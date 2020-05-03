import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo";

import { ReactTypeformEmbed } from 'react-typeform-embed';


const SurveyModel = ({ isOpen, onClose }) => (
  <div className={`modal ${ isOpen ? 'opacity-100' : 'pointer-events-none none opacity-0'}  fixed w-full h-full top-0 left-0 flex items-center justify-center z-30`}>
    <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50 z-10" onClick={onClose}></div>
    <div className="modal-container flex flex-col bg-white w-11/12 md:max-w-lg mx-auto rounded shadow-lg z-50 overflow-y-auto">
      <div className="flex py-2 px-4 flex justify-end">
        <button onClick={onClose} className="font-gt text-xs text-gray-400">Close</button>
      </div>
      <div class="modal-content bg-white  text-left w-full mx-auto">
        {/* <div id="smcx-sdk" className="z-40" />     */}
        <ReactTypeformEmbed style={{ height:'500px', width:'100%', position:'relative' }} url="https://leapcode.typeform.com/to/GVCzFy" />
      </div>
    </div>
   
  </div>
)

class IndexPage extends Component {

  componentDidMount() {
    let el = document.createElement("script");
    el.src = "https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd_2BcEYo8O3z9VnKhrJB6wgHLJnAQLYKUVLpQF4kbKBOIK.js";
    document.body.appendChild(el);
  }

  state = {
    sur: false
  }

  runSurvey = () => {
    console.log('ssd')
    this.setState({
      sur: true
    })
  }

  onClose = () => {
    this.setState({
      sur: false
    })
  }
  
  render() {
    const props = this.props;
    return(
  <Layout>
    <SEO title="Leapcode Open" />
    <SurveyModel onClose={this.onClose} isOpen={this.state.sur} />
    <div className="w-screen min-h-screen flex justify-center items-center flex-col">
      <div className="logo md:w-1/2 lg:w-1/2 mb-10">
        <img className="md:w-1/4 lg:w-1/3 w-1/2 mx-auto" src={require('../images/leapcode--open--noslash.png')} />
      </div>
      <div className="md:w-1/2  center text-center px-2">
        <h1 className="font-medium dark:text-white font-gt font-bold tracking-tighter text-gray-900 leading-10">A better way to get started with <br></br>open source contribution</h1>
        <p className='dark:text-white font-medium font-gt'>We're building Leapcode Open to help you get things rolling with your first open source contribution</p>
        <p className='dark:text-white font-medium text-gray-800 font-gt mt-8 block'>Be the first to know!</p> 
        <a onClick={this.runSurvey} className=' inline-block px-4 py-3 bg-purple-700 hover:bg-purple-800 text-white font-gt rounded text-sm' style= {{ backgroundColor:"#ed4857"}} >Count me in🙋‍♀️</a>  
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
)}}


export default IndexPage
