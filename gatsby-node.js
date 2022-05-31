const Path = require("path")
const fs = require("fs/promises")
const fetch = require("node-fetch")
const colors = require("tailwindcss/colors")

const downloadImg = require("./download-img")
const generateOG = require("./create-OGimage")

const MAP_TOKEN = process.env["MAP_TOKEN"]

// Write data to a local file system path. Returns a promise
function writeFile(path, data) {
  return fs.writeFile(path, data).catch(err => {
    console.error("Could not write file", err)
  })
}

// Returns {longitude: XX, latitude: XX} of a given address
function getLatLon(address) {
  let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?country=ca&limit=1&types=place%2Cpostcode%2Caddress&language=en&access_token=${MAP_TOKEN}`
  return fetch(url)
    .then(resp => resp.json())
    .then(({ features: [{ center: [longitude, latitude] }] }) => ({
      longitude,
      latitude,
    }))
}

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
  // Screenshot OG images
}

exports.createPages = async ({ graphql, actions }) => {
  let proms = []
  const { createPage } = actions

  let queryRet = await graphql(`
    {
      cms {
        curOrg {
          id
          name
          imageUrl
          tagline
          dominantColor
          complimentColor
          contact {
            addr
          }
          staff {
            id
            title
            about
            displayOnPv
            user {
              name
              imageUrl
              contact {
                fb
                ig
                linkedIn
                yt
                twitter
                cell
                business
                email
                addr
              }
            }
          }
          listings {
            a_c
            ad_text
            addr
            appts
            apt_num
            area_infl1_out
            area_infl2_out
            ass_year
            bath_tot
            board
            bph_num
            bsmt1_out
            cctd
            cd
            class
            cldt
            cndsold_xd
            co_lagt_ph
            co_list
            com_coopb
            comments
            cond
            coop_s2
            country
            county
            cross_st
            dom
            dt_sus
            dt_ter
            elevator
            esc_clause
            esc_flag
            extras
            gar_type
            heating
            holdover
            inc_list
            inc_sale
            input_date
            internet
            lagt_ph
            ld
            list_agent
            lp_dol
            lsc
            lse_terms
            lud
            map_col
            map_page
            map_row
            ml_num
            mort_amt
            mort_comm
            mort_freq
            mort_inc
            mort_ir
            mort_lendr
            mort_mdt
            mort_pay
            occ
            occupancy
            oenc
            oenc_freq
            oenc_inc
            oenc_ir
            oenc_lendr
            oenc_mdt
            oenc_pay
            oenc_type
            orig_dol
            outof_area
            parcel_id
            park_spcs
            pctd
            perc_dif
            pix
            pix_img
            pix_ts
            pr_lp_dol
            pr_lsc
            redt
            rltr
            rr
            rr_edt
            s_r
            scdt
            sec
            sell_agt
            sp_dol
            srchst_num
            srltr
            st
            st_dir
            st_num
            st_sfx
            status
            susdt
            taxes
            td
            timestamp
            tour_flag
            tour_url
            town
            township
            tv
            type_own1_out
            uctd
            uffi
            unavail_dt
            vend_pis
            vtour_upby
            vtour_updt
            wrtd
            xd
            xdtd
            yr
            yr_built
            zip
            zn
            code_treb
            agent_id
            co_lagt_id
            disp_addr
            mmap_col
            mmap_page
            mmap_row
            perm_adv
            contac_exp
            parking_spots
            area_code
            municipality_code
            community_code
            area
            municipality
            community
            municipality_district
            handi_equipped
            energy_cert
            green_pis
            cert_lvl
            alt_feature_sheet
            sound_bite_url
            sales_brochure_url
            addl_pix_url
            map_loc_url
            lcdt
            ddf_idx
            images{
              path
              imgNum
              comment
              updatedAt
            }
          }
        }
      }
    }
  `)
  let org = queryRet?.data?.cms?.curOrg
  if (!org)
    throw new Error(
      `Cannot retrieve org from Graphql query. queryRet: ${JSON.stringify(
        queryRet
      )}`
    )

  // Copy logo SVG into main.svg
  let logoDir = Path.join(__dirname, "static", "logos")
  let logoOut = Path.join(logoDir, "main.svg")
  proms.push(downloadImg(org.imageUrl, logoOut).then(() => (
    // Generate OG Image
    generateOG({
      primaryColor: org.dominantColor,
      secondaryColor: org.complimentColor,
      imgPath: logoOut,
      name: org.name,
      tagline: org.tagline || "",
      outPath: Path.join(logoDir, "main300x300.png"),
    })
  )))

  // If org address provided, download map image
  if (org.contact?.addr) {
    proms.push(
      getLatLon(org.contact.addr).then(({ latitude, longitude }) => {
        let outPath = Path.join(__dirname, "static", "map.png")
        let markerColor = org.info?.dominantColor
          ? colors[org.info.dominantColor][500].replace("#", "")
          : "555555"
        let url = `https://api.mapbox.com/styles/v1/mapbox/light-v10/static/pin-l+${markerColor}(${longitude},${latitude})/${longitude.toFixed(
          4
        )},${latitude.toFixed(4)},15,0/600x400@2x?access_token=${MAP_TOKEN}`
        return downloadImg(url, outPath)
      })
    )
  }

  // New colors
  let themePath = Path.join(__dirname, "custom-theme.txt")
  proms.push(
    writeFile(
      themePath,
      `${org.dominantColor},${org.complimentColor}`
    )
  )

  // Create team member pages
  let team = org.staff.filter(({displayOnPv}) => displayOnPv)
  team.forEach(({id, user: {imageUrl}}) => {
      let i = imageUrl.lastIndexOf(".")
      if (i === -1) {
        return Promise.reject(
          new Error(`Expected extension in url: ${imageUrl}`)
        )
      }
      let imgPath = Path.join(
        __dirname,
        "dynamicImages",
        "team",
        `${id}${imageUrl.slice(i)}`
      )
      proms.push(downloadImg(imageUrl, imgPath))
    }
  )

  team.forEach((staff) => {
    let slug = (staff.user.name || `Staff${staff.id}`).replace(/\s+/g, "")
    createPage({
      path: `/team/${slug}`,
      component: Path.resolve(`src/dynamicPages/teamMember.js`),
      context: { staff, fname: String(staff.id)},
    })
  })

  org.listings.filter(listn => (listn.images || []).length > 0)
    .forEach((listn) => {
      let newDir = Path.join(
        __dirname,
        "dynamicImages",
        "listings",
        listn.ml_num
      )
      proms.push(fs
        .mkdir(newDir, { recursive: true })
        .then(ret => Promise.all(
          listn.images.map(({ path, imgNum }) => downloadImg(path, Path.join(newDir, `${imgNum}.jpg`)))
        ))
        .then(ret => createPage({
          path: `/listing/${listn.ml_num}`,
          component: Path.resolve(`src/dynamicPages/listing.js`),
          context: { listing: listn, mlNum: listn.ml_num},
        }))
      )
    })

  return Promise.all(proms)
}
