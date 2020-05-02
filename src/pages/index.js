import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <div className="w-screen min-h-screen flex justify-center items-center flex-col">
      <div className="logo md:w-1/2 lg:w-1/2 mb-10">
        <img className="md:w-1/4 lg:w-1/3 w-1/2 mx-auto" src={require('../images/leapcode--open--noslash.png')} />
      </div>
      <div className="md:w-1/2  center text-center px-2">
        <h1 className="font-medium dark:text-white font-gt font-bold tracking-tighter text-gray-900 leading-10">A better way to get started with <br></br>open source contribution</h1>
        <p className='dark:text-white font-medium font-gt'>We're building Leapcode Open to help you get things rolling with your first open source contribution</p>
        <p className='dark:text-white font-medium text-gray-800 font-gt mt-8 block'>Be the first to know!</p> 
        <a href="#" className=' inline-block px-4 py-3 bg-purple-700 hover:bg-purple-800 text-white font-gt rounded text-sm' style= {{ backgroundColor:"#ed4857"}} >Count me in🙋‍♀️</a>  
      </div>
    </div>

    <section className=" bg-gray-100 py-4">
        <div className="md:w-1/2 px-4 mx-auto text-lg leading-8 py-4 my-4" >
          <p className="font-gt py-4 my-4">You have read a lot of blogs on the internet & went through different resources on contributing to open source. But, still stuck and haven't made any contributions yet.<br /><br />
There are a lot of open-source projects out there, and it's quite tricky to find a perfect one that excites you. On top of that, sometimes you don't understand the code or get nervous about making changes to the code, thinking if it is right or not.    <br /><br />
    We all know this can be a little overwhelming when you are just starting. 
    <br /><br />
But still, we can make it more comfortable and exciting for you to get started. With Leapcode's Open, we are upgrading your experience as a first-time contributor and making it more engaging & straightforward.
    <br /><br />
    A fresh start, the way it should be.
    </p>
        </div>
    </section>



    <div className="font-gt md:w-1/2 px-4 mx-auto mt-4 py-4 text-gray-500">
      From the <a href="https://leapcode.io">Leapcode</a> team
    </div>
  </Layout>
)

export default IndexPage
