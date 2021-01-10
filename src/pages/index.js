import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Map from "../components/Map"
import Carousel from "../components/carousel"
import FundraiserTracker from "../components/fundraiser-tracker"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container md:pt-14 lg:pt-28 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      {/* Mobile banner image */}
      <div className="w-full xl:w-3/5 py-6 overflow-y-hidden md:hidden">
        <img className="w-full lg:mx-auto lg:mr-0 slide-in-bottom rounded-xl shadow-lg" alt="distributing tablets" src="luke.jpeg" />
      </div>
      <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
        <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
          We're on a mission....
        </h1>
        <p className="leading-normal text-base md:text-2xl mb-6 text-center md:text-left fade-in">
          We want to make sure no child is left out of learning during this lockdown. Too many children do not have access to a device in order to take part in online learning. Please donate whatever you can!
        </p>
      {/* Large screen fundraiser element */}
      <div className="flex w-full xl:w-full md:w-1/2 justify-center md:justify-start lg:pb-0 fade-in hidden xl:block">
          <FundraiserTracker />
        </div>
      </div>
      {/* Mobile Fundraiser element */}
      <div className="flex w-full md:w-1/2 justify-center md:justify-start lg:pb-0 fade-in xl:hidden">
          <FundraiserTracker />
        </div>
      {/* Large screen banner image */}
      <div className="w-full md:w-1/2 xl:w-3/5 py-6 overflow-y-hidden hidden md:block">
        <img className="lg:ml-6 xl:mx-auto lg:mr-0 fade-in rounded-xl shadow-lg md:h-56 xl:h-full" alt="distributing tablets" src="luke.jpeg" />
      </div>
    </div>
    <div className="container md:pt-14 lg:pt-28 pt-10 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center justify-center fade-in">
      <h1 className="w-full my-4 mb-14 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center">
        Our Supporters
        </h1>
      <div className="w-full xl:w-3/4 px-4 md:ml-8">
        <Carousel settingsOverrides={{
          autoplay: true
        }} />
      </div>
    </div>
    <div className="w-full py-6 overflow-y-hidden md:block mt-9 fade-in">
      <h1 className="md:my-8 my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center">
        Schools Delivered To...
      </h1>
      <Map
        width="100%"
        height="350px"
        center={[-1.133333, 52.6333331]}
        zoom={9.5}
        markers={[
          { long: -1.244940, lat: 52.554310, name: 'Avenue Primary School' },
          { long: -1.06107, lat: 52.60313, name: 'Manor High School' },
          { long: -1.12937, lat: 52.58809, name: 'Fairfield Primary School' },
          { long: -1.04998, lat: 52.53855, name: 'Fleckney Primary School' },
        ]} />
    </div>
  </Layout>
)

export default IndexPage
