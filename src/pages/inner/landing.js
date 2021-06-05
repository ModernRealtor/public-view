import React from "react"

export default function LandingPage(props) {
  return (
    <div class="bg-red-100 flex flex-col gap-5 py-5 my-5">
      <div class="border border-yellow-700 h-48 tablet:h-64">Hero Img</div>
      <div class="border border-yellow-700 h-60 mx-5 tablet:h-72 tablet:w-2/3 desktop:w-auto">
        Hero Txt
      </div>
      <div class="border border-yellow-700 h-48 mx-5">Mailing List Form</div>
    </div>
  )
}
