import React from "react"

import {moreFeatures} from "@site/src/constants"
import LinkButton from "../shared/LinkButton"
import {analyticsHandler} from "@site/src/utils"

const FeatureBox = ({feature}) => {
  return (
    <div
      style={{
        borderBottom: "1px solid var(--ifm-color-brand-light-200)",
      }}
      className="flex flex-col sm:flex-row items-start justify-start sm:items-center text-start space-y-SPACE_02 sm:space-y-0 py-SPACE_04 sm:py-SPACE_08 lg:py-SPACE_12 sm:space-x-SPACE_04 text-content-tiny font-bold sm:text-title-small lg:text-title-medium text-tailCall-dark-500  sm:h-32 w-full border border-tailCall-dark-300"
    >
      <feature.logo className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
      <span className="mt-0">{feature.title}</span>
    </div>
  )
}

const MoreFeatures = () => {
  return (
    <section className="w-full mb-SPACE_08 sm:mb-SPACE_20">
      <div className="max-w-7xl mx-SPACE_04 sm:mx-SPACE_10 lg:mx-auto text-center flex flex-col items-center">
        <h5 className="text-title-semi-large sm:text-display-tiny lg:text-display-small text-tailCall-dark-500">
          There’s so much more.
        </h5>
        <div className="grid grid-cols-2 my-SPACE_04 sm:my-SPACE_10 lg:my-SPACE_16 gap-x-SPACE_06 sm:gap-x-SPACE_10">
          {moreFeatures.map((feature) => (
            <FeatureBox feature={feature} key={feature.id} />
          ))}
        </div>
        <div className="sm:hidden">
          <LinkButton
            title="View More"
            onClick={() => analyticsHandler("Home Page", "Click", "View More")}
            href="/enterprise/"
            theme="light"
            width="300px"
          />
        </div>
        <div className="hidden sm:block">
          <LinkButton
            title="View More"
            onClick={() => analyticsHandler("Home Page", "Click", "View More")}
            href="/enterprise/"
            theme="light"
            width="500px"
          />
        </div>
      </div>
    </section>
  )
}

export default MoreFeatures