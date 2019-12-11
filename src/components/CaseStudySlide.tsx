import React, { useEffect, useState } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import TechnologyItem, { Technology } from './TechnologyItem'

interface Props {
  title: string
  paragraph: string
  image: string
  blogUrl?: string
  technlologies?: Technology[]
}

const CaseStudySlide: React.FunctionComponent<Props> = ({
  title,
  paragraph,
  image,
  blogUrl,
  technlologies,
}) => (
  <div className="px-8 md:px-14">
    <div className="relative flex flex-col lg:flex-row items-center justify-center md:px-8 mx-auto w-full h-screen">
      <div className="lg:w-1/3 lg:mr-20 mb-8 lg:mb-0 text-left left-0 text-gray-200">
        <h2 className="mb-5 text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider leading-none uppercase">
          {title}
        </h2>
        <p
          className={
            'tracking-wide' + (blogUrl || technlologies ? ' mb-5' : '')
          }
        >
          {paragraph}
        </p>
        {technlologies && (
          <div className="flex flex-wrap items-center max-h-16 mb-2">
            {technlologies
              .sort((a, b) => a - b)
              .map(technology => (
                <div className="mr-4 md:mr-6 mb-3">
                  <TechnologyItem technology={technology} showLabel={false} />
                </div>
              ))}
          </div>
        )}
        {blogUrl && (
          <AniLink fade to={blogUrl} duration={0.2}>
            <span className="text-md hover:underline">Read More</span>
          </AniLink>
        )}
      </div>

      <div className="bg-gray-900 p-2 w-full lg:w-2/3">
        <div
          style={{
            backgroundImage: `url(${image})`,
            paddingBottom: '47%',
          }}
          className="bg-center bg-contain bg-no-repeat w-full"
        />
      </div>
    </div>
  </div>
)

export default CaseStudySlide
