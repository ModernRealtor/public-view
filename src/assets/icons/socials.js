import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {PhoneIcon, DeviceMobileIcon, AtSymbolIcon, LocationMarkerIcon} from "@heroicons/react/solid"

export function FacebookLogo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 56.693 56.693"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      className={`w-5 h-5  ${props.className}`}
    >
      <path d="M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029  c-8.248,0-10.125,6.174-10.125,10.125v5.518h-5.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77  L40.43,21.739z" />
    </svg>
  )
}

export function InstagramLogo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      version="1.1"
      preserveAspectRatio="xMidYMid"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      className={`w-5 h-5 ${props.className}`}
    >
      <g>
        <path d="M127.999746,23.06353 C162.177385,23.06353 166.225393,23.1936027 179.722476,23.8094161 C192.20235,24.3789926 198.979853,26.4642218 203.490736,28.2166477 C209.464938,30.5386501 213.729395,33.3128586 218.208268,37.7917319 C222.687141,42.2706052 225.46135,46.5350617 227.782844,52.5092638 C229.535778,57.0201472 231.621007,63.7976504 232.190584,76.277016 C232.806397,89.7746075 232.93647,93.8226147 232.93647,128.000254 C232.93647,162.177893 232.806397,166.225901 232.190584,179.722984 C231.621007,192.202858 229.535778,198.980361 227.782844,203.491244 C225.46135,209.465446 222.687141,213.729903 218.208268,218.208776 C213.729395,222.687649 209.464938,225.461858 203.490736,227.783352 C198.979853,229.536286 192.20235,231.621516 179.722476,232.191092 C166.227425,232.806905 162.179418,232.936978 127.999746,232.936978 C93.8200742,232.936978 89.772067,232.806905 76.277016,232.191092 C63.7971424,231.621516 57.0196391,229.536286 52.5092638,227.783352 C46.5345536,225.461858 42.2700971,222.687649 37.7912238,218.208776 C33.3123505,213.729903 30.538142,209.465446 28.2166477,203.491244 C26.4637138,198.980361 24.3784845,192.202858 23.808908,179.723492 C23.1930946,166.225901 23.0630219,162.177893 23.0630219,128.000254 C23.0630219,93.8226147 23.1930946,89.7746075 23.808908,76.2775241 C24.3784845,63.7976504 26.4637138,57.0201472 28.2166477,52.5092638 C30.538142,46.5350617 33.3123505,42.2706052 37.7912238,37.7917319 C42.2700971,33.3128586 46.5345536,30.5386501 52.5092638,28.2166477 C57.0196391,26.4642218 63.7971424,24.3789926 76.2765079,23.8094161 C89.7740994,23.1936027 93.8221066,23.06353 127.999746,23.06353 M127.999746,0 C93.2367791,0 88.8783247,0.147348072 75.2257637,0.770274749 C61.601148,1.39218523 52.2968794,3.55566141 44.1546281,6.72008828 C35.7374966,9.99121548 28.5992446,14.3679613 21.4833489,21.483857 C14.3674532,28.5997527 9.99070739,35.7380046 6.71958019,44.1551362 C3.55515331,52.2973875 1.39167714,61.6016561 0.769766653,75.2262718 C0.146839975,88.8783247 0,93.2372872 0,128.000254 C0,162.763221 0.146839975,167.122183 0.769766653,180.774236 C1.39167714,194.398852 3.55515331,203.703121 6.71958019,211.845372 C9.99070739,220.261995 14.3674532,227.400755 21.4833489,234.516651 C28.5992446,241.632547 35.7374966,246.009293 44.1546281,249.28042 C52.2968794,252.444847 61.601148,254.608323 75.2257637,255.230233 C88.8783247,255.85316 93.2367791,256 127.999746,256 C162.762713,256 167.121675,255.85316 180.773728,255.230233 C194.398344,254.608323 203.702613,252.444847 211.844864,249.28042 C220.261995,246.009293 227.400247,241.632547 234.516143,234.516651 C241.632039,227.400755 246.008785,220.262503 249.279912,211.845372 C252.444339,203.703121 254.607815,194.398852 255.229725,180.774236 C255.852652,167.122183 256,162.763221 256,128.000254 C256,93.2372872 255.852652,88.8783247 255.229725,75.2262718 C254.607815,61.6016561 252.444339,52.2973875 249.279912,44.1551362 C246.008785,35.7380046 241.632039,28.5997527 234.516143,21.483857 C227.400247,14.3679613 220.261995,9.99121548 211.844864,6.72008828 C203.702613,3.55566141 194.398344,1.39218523 180.773728,0.770274749 C167.121675,0.147348072 162.762713,0 127.999746,0 Z M127.999746,62.2703115 C91.698262,62.2703115 62.2698034,91.69877 62.2698034,128.000254 C62.2698034,164.301738 91.698262,193.730197 127.999746,193.730197 C164.30123,193.730197 193.729689,164.301738 193.729689,128.000254 C193.729689,91.69877 164.30123,62.2703115 127.999746,62.2703115 Z M127.999746,170.667175 C104.435741,170.667175 85.3328252,151.564259 85.3328252,128.000254 C85.3328252,104.436249 104.435741,85.3333333 127.999746,85.3333333 C151.563751,85.3333333 170.666667,104.436249 170.666667,128.000254 C170.666667,151.564259 151.563751,170.667175 127.999746,170.667175 Z M211.686338,59.6734287 C211.686338,68.1566129 204.809755,75.0337031 196.326571,75.0337031 C187.843387,75.0337031 180.966297,68.1566129 180.966297,59.6734287 C180.966297,51.1902445 187.843387,44.3136624 196.326571,44.3136624 C204.809755,44.3136624 211.686338,51.1902445 211.686338,59.6734287 Z" />
      </g>
    </svg>
  )
}

export function LinkedInLogo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 5 1036 990"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      className={`w-5 h-5 ${props.className}`}
    >
      <path d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z" />
    </svg>
  )
}

export function YoutubeLogo(props) {
  return (
    <svg
      viewBox="0 0 235 165.6"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      className={`h-5 ${props.className}`}
    >
      <path d="M 93.465 47.843 L 154.886 82.785 L 93.465 117.725 Z M 230.089 25.854 C 227.386 15.677 219.424 7.663 209.313 4.943 C 190.987 0 117.499 0 117.499 0 C 117.499 0 44.013 0 25.687 4.943 C 15.576 7.663 7.613 15.677 4.911 25.854 C 0 44.3 0 82.784 0 82.784 C 0 82.784 0 121.269 4.911 139.715 C 7.613 149.891 15.576 157.905 25.687 160.626 C 44.013 165.568 117.499 165.568 117.499 165.568 C 117.499 165.568 190.987 165.568 209.313 160.626 C 219.424 157.905 227.386 149.89 230.089 139.716 C 235 121.268 235 82.784 235 82.784 C 235 82.784 235 44.3 230.089 25.854 Z"></path>
    </svg>
  )
}

export function TikTokLogo(props) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      version="1.1" 
      viewBox="0 0 256 256" 
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      className={`w-5 h-5 ${props.className}`}
    >
      <g transform="translate(128 128) scale(0.72 0.72)">
        <g transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)">
          <path d="M 45 0 C 20.147 0 0 20.147 0 45 c 0 24.853 20.147 45 45 45 s 45 -20.147 45 -45 C 90 20.147 69.853 0 45 0 z M 72.039 33.277 v 6.758 c -3.187 0.001 -6.283 -0.623 -9.203 -1.855 c -1.878 -0.793 -3.627 -1.814 -5.227 -3.048 l 0.048 20.801 c -0.02 4.684 -1.873 9.085 -5.227 12.4 c -2.73 2.698 -6.188 4.414 -9.937 4.97 c -0.881 0.13 -1.777 0.197 -2.684 0.197 c -4.013 0 -7.823 -1.3 -10.939 -3.698 c -0.586 -0.452 -1.147 -0.941 -1.681 -1.468 c -3.635 -3.593 -5.509 -8.462 -5.194 -13.584 c 0.241 -3.899 1.802 -7.618 4.404 -10.532 c 3.443 -3.857 8.26 -5.998 13.41 -5.998 c 0.906 0 1.803 0.068 2.684 0.198 v 2.499 v 6.951 c -0.835 -0.275 -1.727 -0.427 -2.656 -0.427 c -4.705 0 -8.512 3.839 -8.442 8.548 c 0.045 3.013 1.69 5.646 4.118 7.098 c 1.141 0.682 2.453 1.105 3.853 1.182 c 1.097 0.06 2.151 -0.093 3.126 -0.415 c 3.362 -1.111 5.787 -4.268 5.787 -7.992 l 0.011 -13.93 V 16.5 h 9.307 c 0.009 0.922 0.103 1.822 0.276 2.694 c 0.702 3.529 2.692 6.591 5.46 8.678 c 2.414 1.821 5.42 2.9 8.678 2.9 c 0.002 0 0.029 0 0.027 -0.002 V 33.277 z" transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
        </g>
      </g>
    </svg>
  )
}


export let contactIcons = {
  "fb": {
    icon: FacebookLogo,
    prefix: "https://www.facebook.com/",
    desc: "Facebok Page"
  },
  "ig": {
    icon: InstagramLogo,
    prefix: "https://www.instagram.com/",
    desc: "Instagram Account"
  },
  "linkedIn": {
    icon: LinkedInLogo,
    prefix: "https://www.linkedin.com/in/",
    desc: "LinkedIn Page"
  },
  "yt": {
    icon: YoutubeLogo,
    prefix: "https://www.youtube.com/channel/",
    desc: "Youtube Channel"
  },
  "tt": {
    icon: TikTokLogo,
    prefix: "https://www.tiktok.com/",
    desc: "TikTok Account"
  },
  "cell": {
    icon: DeviceMobileIcon,
    prefix: "tel:",
    desc: "Cell Phone Number"
  },
  "business": {
    icon: PhoneIcon,
    prefix: "tel:",
    desc: "Business Number"
  },
  "email": {
    icon: AtSymbolIcon,
    prefix: "mailto:",
    desc: "Email Address"
  },
  "addr": {
    icon: LocationMarkerIcon,
    prefix: "https://maps.google.com/?q=",
    desc: "Address"
  }
}

export default function FooterSocials(props) {
  let {cms: {org: {contact}}} = useStaticQuery(graphql`
  query {
    cms {
      org {
        contact {
          fb
          ig
          linkedIn
          yt
          tt
        }
      }
    }
  }
`)
  return (
    <ul className="flex items-center content-between gap-x-3">
      {Object.keys(contact)
        .filter(cKey => contact[cKey])
        .map((cKey, i) => ({
          key: i,
          href: `${contactIcons[cKey].prefix}${contact[cKey]}`,
          label: contactIcons[cKey].desc,
          icon: contactIcons[cKey].icon
        })).map(item => (
          <li key={item.key}>
            <a
              href={item.href}
              aria-label={item.label}
              className="social-icon"
              title={item.label}
            >
              <item.icon/>
            </a>
          </li>
      ))}
    </ul>
  )
}