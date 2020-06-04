import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo";

import { ReactTypeformEmbed } from 'react-typeform-embed';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'




const blockData = [{
  id:1,
  title:'Beginner Friendly',
  src:'/drawkit-developer-woman-monochrome.svg',
  para: 'The open source ecosystem could be complex and overwhelming for beginners. Currently, the documentations are either non-existent or not beginner-friendly. As a first time contributor, there is a series of proven ways through which you can easily get started on any project.'
}, {
  id:2,
  title:'Less Intimidating & More Motivating',
  src:'/revenue-graph-monochrome.svg',
  para:'Contributing to open source should be motivating. But a lot of times beginners get overwhelmed by the code, the community, etc. A welcoming community of existing contributors is here to make your journey more exciting.'
}, {
  id:3,
  title:'A Helping Hand to Move Forward',
  src:'/drawkit-list-app-monochrome.svg',
  para:'Open source communities are diverse, and talking to strangers could be a daunting task, to begin with. Getting connected with a mentor in the community who could guide is going to be really helpful.'
}]

const InfoBlock = (props) => (
        <div className={` py-8 ${props.id % 2 == 0 ? 'bg-gray-100' : ''}`}>
          <div className="mx-auto md:w-2/3  grid md:grid-cols-2 sm:grid-cols-none px-2" >
            <div className="xs:flex xs:items-center">
              <img 
                data-sal="slide-right"
                data-sal-delay="0"
                data-sal-easing="ease-in" 
                className="w-1/2 lg:w-full md:-ml-20"  
                src={props.src} />

            </div>
            <div className="flex justify-center flex-col">
              <h3 className="font-gt text-gray-800 font-bold lg:text-4xl">{props.title}</h3>
              <p className="font-gt text-sm font-regular">{props.para}</p>
            </div>
          </div>
        </div>
)


const SurveyModel = ({ isOpen, onClose }) => (
  <div className={`modal ${ isOpen ? 'opacity-100' : 'pointer-events-none none opacity-0'}  fixed w-full h-full top-0 left-0 flex items-center justify-center z-30`}>
    <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50 z-10" onClick={onClose}></div>
    <div className="modal-container flex flex-col bg-white w-11/12 md:max-w-lg mx-auto rounded shadow-lg z-50 overflow-y-auto">
      <div className="flex py-2 px-4 flex justify-end">
        <button onClick={onClose} className="font-gt text-xs text-gray-350">Close</button>
      </div>
      <div class="modal-content bg-white  text-left w-full mx-auto">
        {/* <div id="smcx-sdk" className="z-40" />     */}
        <ReactTypeformEmbed style={{ height:'500px', width:'100%', position:'relative' }} url="https://leapcode-open.typeform.com/to/YKAb4w" />
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

    trackCustomEvent({
      // string - required - The object that was interacted with (e.g.video)
      category: "Form Filling",
      // string - required - Type of interaction (e.g. 'play')
      action: "Click",
      // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
      label: "Beta Form",
      // number - optional - Numeric value associated with the event. (e.g. A product ID)
      value: 1
    })


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
    {/* <div className="ani-intro--full flex">
      <div className='ani-intro--full--wrapper  items-center justify-center'>
        <img className="md:w-1/5 w-1/2 mx-auto md:mx-1" src={require('../images/leapcode--open--noslash.png')} />
      </div>
    </div> */}
    <div className="md:w-11/12 lg:w-2/3  mx-auto min-h-screen flex justify-center items-center flex-col md:flex-row">
      {/* <div className="logo md:w-1/3 lg:w-1/3 mb-10">
        <img className="md:w-2/3 w-1/2 mx-auto md:mx-1" src={require('../images/leapcode--open--noslash.png')} />
      </div> */}
      <div className="md:w-2/3  center text-center px-2">
        <img className="md:w-1/4 w-1/2 mx-auto mb-12" src="https://women.leapcode.io/static/logo-v3.png" />

        <h1 className="font-medium dark:text-white font-gt font-bold tracking-tight text-gray-900 leading-16 lg:text-5xl">Kick start your open source contribution</h1>
        <p className='dark:text-white font-medium font-gt lg:text-2xl leading-8'>Leapcode helps you contribute to open source projects right from your first pull request to working on major projects</p>
        <p className='dark:text-white font-medium text-gray-800 font-gt mt-10 block font-bold'>Want to hop on 🚌 as we build?</p> 
        <a onClick={this.runSurvey} className=' inline-block font-bold px-8 py-3 bg-purple-700 hover:bg-purple-800 text-white font-gt rounded text-base a-button' style= {{ backgroundColor:"#ed4857"}} >Count me in 🙋‍♀️</a>  
      </div>
    </div>
    <section className=" py-4">



    <div className=''>
        { blockData.map(block => <InfoBlock {...block} />) }
      </div>



      <div className={` py-12 bg-gray-100`}>
          <div className="mx-auto md:w-1/2 text-center py-12">
            <h3 className='dark:text-white font-medium text-gray-800 font-gt block mb-12 font-bold'>Want to get early access and product updates?</h3> 
            <a onClick={this.runSurvey} className=' inline-block font-bold px-4 py-3 bg-purple-700 hover:bg-purple-800 text-white font-gt rounded text-sm a-button' style= {{ backgroundColor:"#ed4857"}} >Count me in 🙋‍♀️</a>  
          </div>
        </div>





        {/* <div className="md:w-1/2 px-4 mx-auto text-lg leading-8 py-4 my-4" >
          <p className="font-gt py-4 my-4">You have read a lot of blogs on the internet & went through different resources on contributing to open source. But, still stuck and haven't made any contributions yet.<br /><br />
There are a lot of open-source projects out there, and it's quite tricky to find a perfect one that excites you. On top of that, sometimes you don't understand the code or get nervous about making changes to the code, thinking if it is right or not.    <br /><br />
    We all know this can be a little overwhelming when you are just starting. 
    <br /><br />
But still, we can make it more comfortable and exciting for you to get started. With Leapcode's Open, we are upgrading your experience as a first-time contributor and making it more engaging & straightforward.
    <br /><br />
    A fresh start, the way it should be.
    </p>
        </div> */}

    </section>
 



    <div className="font-gt md:w-1/2 px-4 mx-auto mt-4 py-4 text-gray-500">
      From the <a href="https://leapcode.io">Leapcode</a> team
    </div>

 

  </Layout>
)}}


export default IndexPage
