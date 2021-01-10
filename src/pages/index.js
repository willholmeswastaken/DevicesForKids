import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Map from "../components/Map"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container md:pt-14 lg:pt-28 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <div className="w-full xl:w-3/5 py-6 overflow-y-hidden md:hidden">
        <img className="w-full lg:mx-auto lg:mr-0 slide-in-bottom rounded-xl shadow-lg" alt="distributing tablets" src="luke.jpeg" />
      </div>

      <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
        <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
          We are on a mission....
        </h1>
        <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
          We want to make sure no child is left out of learning during this lockdown. Too many children do not have access to a device to do online learning. Please donate whatever you can!
        </p>
        <div className="flex w-full justify-center md:justify-start lg:pb-0 fade-in ">
          <a href="https://www.gofundme.com/f/help-keep-local-leicestershire-children-learning" className="flex bg-blue-500 rounded-full font-bold text-white px-4 py-3 bounce-top-icons hover:bg-blue-600 mr-6">
            Donate
            <svg xmlns="http://www.w3.org/2000/svg" className="inline ml-2 w-6 stroke-current text-white stroke-2" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </a>
          {/* <iframe src="https://www.gofundme.com/f/help-keep-local-leicestershire-children-learning/widget/small/" frameborder="0" width="50%" height="50px" scrolling="no"></iframe> */}
        </div>

      </div>

      <div className="w-full xl:w-3/5 py-6 overflow-y-hidden hidden md:block">
        <img className="w-full mx-auto lg:mr-0 slide-in-bottom rounded-xl shadow-lg" alt="distributing tablets" src="luke.jpeg" />
      </div>
    </div>

    <div className="w-full py-6 overflow-y-hidden md:block mt-9 fade-in">
      <h1 className="md:my-8 my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center slide-in-bottom-h1">
        Schools Delivered To...
      </h1>
      <Map
        width="100%"
        height="350px"
        center={[-1.133333, 52.6333331]}
        zoom={9.5}
        markers={[
          { long: -1.244940, lat: 52.554310, name: 'Avenue Primary School' },
          { long: -1.074620, lat: 52.699960, name: 'Manor High School' },
          { long: -1.12937, lat: 52.58809, name: 'Fairfield Primary School' },
          { long: -1.04998, lat: 52.53855, name: 'Fleckney Primary School' },
        ]} />
    </div>
  </Layout>
)

export default IndexPage
