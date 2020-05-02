import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="w-screen min-h-screen flex justify-center items-center flex-col">
      <div className="logo md:w-1/2 lg:w-1/2 mb-10">
        <img className="md:w-1/4 lg:w-1/3 w-1/2 mx-auto" src={require('../images/leapcode-open.png')} />
      </div>
      <div className="md:w-1/2  center text-center px-2">
        <h1 className="font-medium dark:text-white font-ex tracking-tighter text-gray-900 leading-10">A better way to get started with open source contribution</h1>
        <p className='dark:text-white font-medium font-gt'>We're building something to help people break the ice on their first open source contribution.</p>
        <p className='dark:text-white font-medium text-gray-800 font-gt mt-8 block'>Be a part of our pilot cohert</p> 
        <a href="#" className=' inline-block px-4 py-3 bg-purple-700 hover:bg-purple-800 text-white font-gt rounded text-sm'>Sign up this questioniar</a>  
      </div>
    </div>

    <section className=" bg-gray-100 py-4">
        <div className="md:w-1/2 px-4 mx-auto text-lg leading-8 py-4 my-4" >
          <p className="font-gt py-4 my-4">You have read a lot of blogs on the internet & went through different resources on contributing to open source. Are you still stuck and not able to any contributions yet? <br /><br />
    Sometimes you don't understand the code or sometimes you are afraid of making changes to your code thinking if this is right or not. We all know it can be a little overwhelming when you get started. On top of that, there are a lot of open-source projects out there and finding a project that excites you is also a problem.
    <br /><br />
    But still, we can make it easier and exciting for you to get started. With Leapcode's Open, we have done that. We are improving your experience as a first-time contributor and making it more simple & engaging. A fresh start, the way it should be.</p>
        </div>
    </section>



    <div className="font-gt md:w-1/2 px-4 mx-auto mt-4 py-4 text-gray-500">
      From the <a href="https://leapcode.io">Leapcode.io</a> team
    </div>
  </Layout>
)

export default IndexPage
