import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo";

import { ReactTypeformEmbed } from 'react-typeform-embed';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

const tweets = [
  {
    id:0,
    username: 'archanaserver',
    html: `<blockquote class="twitter-tweet" data-conversation="none" data-theme="dark"><p lang="en" dir="ltr">The platform is so cool for all who is going to join <a href="https://twitter.com/hashtag/LeapcodeOpen?src=hash&amp;ref_src=twsrc%5Etfw">#LeapcodeOpen</a>, the best part of this platform is everyone contributor will get scores after each pull requests. 🤩<br><br>Thank you <a href="https://twitter.com/isethu?ref_src=twsrc%5Etfw">@isethu</a> and the <a href="https://twitter.com/leapcodeio?ref_src=twsrc%5Etfw">@leapcodeio</a> team for building this platform. This is going to be huge soon.🔥</p>&mdash; Archana🦉 (@archanaserver) <a href="https://twitter.com/archanaserver/status/1268254820080615424?ref_src=twsrc%5Etfw">June 3, 2020</a></blockquote>`
  },
  {
    id:1,
    username:'hiralthaker12',
    html:`<blockquote class="twitter-tweet" data-conversation="none" data-theme="dark"><p lang="en" dir="ltr">The platform is so easy and insightful to understand, play around and make your first open source contribution.<br><br>Waiting for them to go public with their project.<a href="https://twitter.com/hashtag/opensource?src=hash&amp;ref_src=twsrc%5Etfw">#opensource</a> <a href="https://twitter.com/hashtag/opensourceprojects?src=hash&amp;ref_src=twsrc%5Etfw">#opensourceprojects</a> <a href="https://twitter.com/hashtag/WomenInTech?src=hash&amp;ref_src=twsrc%5Etfw">#WomenInTech</a></p>&mdash; Thaker Hiral #WomenInTech #IWD20 #TogetherWeRise (@hiralthaker12) <a href="https://twitter.com/hiralthaker12/status/1267501834010312704?ref_src=twsrc%5Etfw">June 1, 2020</a></blockquote>`

  }, {
    id:3,
    username:'PrateekG_',
    html:`<blockquote class="twitter-tweet" data-conversation="none" data-theme="dark"><p lang="en" dir="ltr"><a href="https://twitter.com/leapcodeio?ref_src=twsrc%5Etfw">@leapcodeio</a> guides you each step, from finding a project to raising your first PR. The whole process of working on an open source project is gamified such that it keeps you engaged. Overall, you can be a open source contributor in just a few clicks😁</p>&mdash; Prateek Gupta (@PrateekG_) <a href="https://twitter.com/PrateekG_/status/1270385738815664128?ref_src=twsrc%5Etfw">June 9, 2020</a></blockquote>`
  }
]



const UserSteps = [{
  id:0,
  heading: 'Create an Account',
  desc: 'Sign in using your GitHub account'
}, {
  id:1,
  heading: 'Pick a Repository',
  desc: 'Pick a repo matching with your skills from our curated list'
}, {
  id:2,
  heading: 'Start Contributing',
  desc: 'Streamlined & simple steps to help you contribute to the repo'
}, {
  id:3,
  heading: 'Earn Rewards 🔥',
  desc: 'Receive points as you progress through the steps. Brownie points & badges when your Pull Request is accepted.'
}]


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

class IndexPage1 extends Component {

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
    <SEO title="Leapcode" />
    <SurveyModel onClose={this.onClose} isOpen={this.state.sur} />

      <div className="py-3 w-screen text-center text-sm font-gt bg-black text-white">We have moved our women in tech platform to a <a className='font-bold hover:underline' href="https://women.leapcode.io">new home</a></div>

    {/* <div className="ani-intro--full flex">
      <div className='ani-intro--full--wrapper  items-center justify-center'>
        <img className="md:w-1/5 w-1/2 mx-auto md:mx-1" src={require('../images/leapcode--open--noslash.png')} />
      </div>
    </div> */}
    <div className="md:w-11/12 lg:w-2/3  mx-auto pt-20 md:pt-32 md:pb-12 flex justify-center items-center flex-col md:flex-row">
      {/* <div className="logo md:w-1/3 lg:w-1/3 mb-10">
        <img className="md:w-2/3 w-1/2 mx-auto md:mx-1" src={require('../images/leapcode--open--noslash.png')} />
      </div> */}
      <div className="md:w-2/3  center text-center px-2">
        <img className="md:w-1/4 w-1/3 mx-auto mb-24" src={require('../assets/images/leapcode-logo.svg')} />

        <h1 className="font-medium dark:text-white font-gt font-bold tracking-tight text-gray-900 leading-16 lg:text-5xl">Kick start your open source contribution</h1>
        <p className='dark:text-white font-medium font-gt lg:text-2xl leading-8'>Leapcode helps you contribute to open source projects right from your first pull request to working on major projects</p>
        <p className='dark:text-white font-medium text-gray-800 font-gt mt-10 block font-bold'>Want to hop on 🚌 as we build?</p> 
        <a onClick={this.runSurvey} className=' inline-block font-bold px-8 py-3 bg-purple-700 hover:bg-purple-800 text-white font-gt rounded text-base a-button' style= {{ backgroundColor:"#ed4857"}} >Count me in 👋</a>  
      </div>
    </div>
    <section className=" py-4">


    {/* <blockquote className="twitter-tweet" data-conversation="none" data-dnt="true" data-theme="light">
      <p lang="en" dir="ltr">The platform is so cool for all who is going to join 
        <a href={"https://twitter.com/hashtag/LeapcodeOpen?src=hash&amp;ref_src=twsrc%5Etfw"}>#LeapcodeOpen</a>, the best part of this platform is everyone contributor will get scores after each pull requests. 🤩<br /><br />Thank you <a href="https://twitter.com/isethu?ref_src=twsrc%5Etfw">@isethu</a> and the <a href="https://twitter.com/leapcodeio?ref_src=twsrc%5Etfw">@leapcodeio</a> team for building this platform. This is going to be huge soon.🔥</p>&mdash; Archana🦉 (@archanaserver) <a href="https://twitter.com/archanaserver/status/1268254820080615424?ref_src=twsrc%5Etfw">June 3, 2020</a></blockquote>
 */}

      <div className="mt-16 px-4 md:px-0 max-w-screen-sm md:max-w-4xl mx-auto flex flex-row flex-wrap items-center">
        { tweets.map(tweet => <div key={tweet.id} className="">
            <div className="w-1/2" dangerouslySetInnerHTML={{ __html: tweet.html }} />
        </div>) }
      </div>

    <div className=''>
        { blockData.map(block => <InfoBlock {...block} />) }
    </div>


    {/* <div className="bg-black text-white"></div> */}



      <div className={` py-12 bg-gray-100`}>
          <div className="mx-auto md:w-1/2 text-center py-12">
            <h3 className='dark:text-white font-medium text-gray-800 font-gt block mb-12 font-bold'>Want to get early access and product updates?</h3> 
            <a onClick={this.runSurvey} className=' block md:inline-block font-bold px-4 py-3 bg-purple-700 hover:bg-purple-800 text-white font-gt rounded text-sm a-button' style= {{ backgroundColor:"#ed4857"}} >Count me in 🙋‍♀️</a>  
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
 



    <div className="font-gt flex justify-between md:w-1/2 px-4 mx-auto mt-4 py-4 text-gray-500">
      <span><a className="hover:underline" href="https://women.leapcode.io">Women in tech community</a></span>
      <span>From the <a href="https://leapcode.io">Leapcode</a> team</span>
    </div>

 

  </Layout>
)}};



class IndexPage extends Component {

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
    return(
      <Layout>
        <SEO title="Leapcode" />
        <SurveyModel onClose={this.onClose} isOpen={this.state.sur} />
        <div className="max-w-screen-lg mx-auto mt-12 md:mt-32">
          <div className="flex justify-center">

         
            <div className="w-full md:w-1/2 text-center px-6 md:px-0">
              <img className="md:w-1/2 w-1/2 mx-auto mb-24" src={require('../assets/images/leapcode-logo--new.svg')} />
              <h1 className="w-full text-3xl md:text-5xl text-newblue-900 font-gt">{}Kick start your  open <br /> source contribution{}</h1>
              <p className=" font-gt text-base md:text-lg text-newblue-900 leading-relaxed tracking-wide letter">Leapcode helps you contribute to open source projects right from your first pull request to working on major projects</p>
            
              <button  onClick={this.runSurvey} className=" bg-newblue-800 text-white font-gt font-semibold px-6 py-3 text-sm md:text-base rounded-lg mt-8">Get Early Access</button>
            </div>

            {/* <div className="w-full md:w-1/2">

            </div> */}


          </div>
        </div>  




        <div className="bg-newblue-100 mt-12 md:mt-64 py-12 md:pt-32 md:pb-24 steps--container">
          <div className="max-w-screen-lg mx-auto">
            <div className="flex steps-section justify-center ">
              {/* <div className="md:w-1/2"></div> */}
              <div className="md:w-1/2 px-6 md:px-0">
                <h3 className=" text-2xl text-center md:text-3xl font-bold text-newblue-900 leading-relaxed font-gt">Make your first Pull Request <br /> in 5 minutes</h3>
                <div className="steps-area ">
                  {
                      UserSteps.map(step => (
                        <div class="step__item active">
                          <span class="step__item-number font-gt"></span>
                          <div class="step__item-content">
                            <span className="font-gt text-xl md:text-2xl mb-4 block text-newblue-900 font-bold">{step.heading}</span>
                            <p className="font-gt">{step.desc}</p>
                          </div>
                        </div>
                      ))
                  }
                
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="mt-24 text-center">
                <h2 className="font-gt md:text-5xl text-newblue-900">Don’t take our word for it</h2>
                <p className="font-gt text-newblue-900 tracking-wide">Our users are already talking about it on twitter</p>
          <div className="mt-12 md:mt-24 px-4 md:px-0 max-w-screen-sm md:max-w-screen-lg mx-auto flex flex-row flex-wrap justify-center"> 
            { tweets.map(tweet => <div key={tweet.id} className="w-full md:w-1/2 px-4 mb-8">
                <div className="" dangerouslySetInnerHTML={{ __html: tweet.html }} />
            </div>) }
          </div>

        </div>
       


        <div className=" mt-12 md:mt-32 text-center bg-newblue-800 py-12 md:py-32 strokes-bg">
          <div className="max-w-screen-md mx-auto px-6 md:px-2">
            <h2 className="text-3xl md:text-4xl font-gt text-white">Contributing to open source is now <br />easy & rewarding</h2>
            <p className="font-gt text-white  leading-relaxed tracking-wide">A lot of first time contributor face issues in finding a project, figuring out what to contribute, understanding the repo etc. With Leapcode, we are empowering first time contributors by motivating & rewarding each step they take towards the contribution.</p>
            <button  onClick={this.runSurvey} className="bg-white hover:bg-gray-200 px-6 py-3 text-base rounded-lg mt-8 font-gt font-bold text-newblue-900">Get Early Access</button>
          </div>
        </div>



        <section className="md:mt-32 mt-16" >
          <div className="max-w-screen-lg mx-auto">
            <div className="md:w-2/3 px-6 md:px-0">
              <small className="font-gt font-bold block mb-4 text-lg opacity-75">For Open Source Project Owners</small>
              <h2 className="text-4xl font-gt text-newblue-900 leading-snug">Create a seamless experience for your contributors</h2>
              <p className="text-newblue-900 tracking-wide font-gt">For open source project maintainers & owners, Leapcode helps you onboard first time contribitors by simplyfying your contribution process & making it interesting.</p>
              <div class="check__item">
                <h5 className="text-2xl font-gt text-newblue-900">Onboard new contributors easily</h5>
                <p className="text-base font-gt  text-newblue-900 tracking-wide">Onboard & navigate new contributors to your open source projects quickly</p>
              </div>

              <div class="check__item">
                <h5 className="text-2xl font-gt text-newblue-900">Access to a thriving community</h5>
                <p className="text-base font-gt  text-newblue-900 tracking-wide">Get an ethusiastic and motivated community to contribute to your projects</p>
              </div>


              <div class="check__item">
                <h5 className="text-2xl font-gt text-newblue-900">Grow your projects</h5>
                <p className="text-base font-gt  text-newblue-900 tracking-wide">Get issues fixed & features added from a community of contributors that helps each other</p>
              </div>


              <a href="https://airtable.com/shrGWFt2xQsfAHMu4" target="_blank" className=" mt-12 block text-center md:inline-block bg-gray-300 hover:bg-gray-400 text-newblue-900 font-semibold font-gt px-6 py-3 rounded">Add your Repository</a>

            </div>
            
            
          </div>
        </section>




        {/* <div className="mt-12 md:mt-32 text-center bg-newblue-200 py-24 strokes-bg">
          <div className="max-w-screen-md mx-auto px-6 md:px-2">
            <h2 className="text-3xl md:text-4xl font-gt text-newblue-900">Interested to get started to contribute to open source?</h2>
            <p className="font-gt text-newblue-900 leading-relaxed tracking-wide"></p>
            <button  onClick={this.runSurvey} className="text-white px-6 py-3 text-base rounded-lg mt-8 font-gt font-bold bg-newblue-900">Join the waitlist</button>
          </div>
        </div> */}


        <div className="py-12 mt-12 md:mt-32 bg-black">
          <div className="max-w-screen-lg mx-auto px-2">
            <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-4">
              <div className="le">
                  <ul className="text-sm">
                    <li> <a href="https://women.leapcode.io" className='hover:underline cursor-pointer text-gray-200 font-gt'>Women in Tech Commmunity</a></li>
                    <li> <a href="/faq" className='hover:underline cursor-pointer text-gray-200 font-gt'>Frequently Asked Questions</a></li>
                    <li> <a href="/code-of-conduct" className='hover:underline cursor-pointer text-gray-200 font-gt'>Code of Conduct</a></li>
                  </ul>
              </div>

              <div className="mm text-sm">
                <ul>
                  <li className='hover:underline text-gray-200 font-gt'><a href="https://twitter.com/leapcodeio">Follow us on Twitter</a></li>
                  <li className='hover:underline text-gray-200 font-gt'><a href="https://facebook.com/leapcodeio">Follow us on Facebook</a></li>
                  <li className='hover:underline text-gray-200 font-gt'><a href="https://linkedin.com/leapcodeio">Follow us on Linkedin</a></li>
                </ul>
              </div>

              <div className="rt text-sm md:text-right flex items-center md:justify-end md:items-center px-6">
                <img className="w-10 mb-0" src={require('../assets/images/leapcode-logo-circle.svg')}></img>
                <span className="text-gray-400 opacity-75 font-gt ml-4">Ⓒ 2020 Leapcode</span>
              </div>
             
            </div>
          </div>
        </div>


        
      </Layout>
    )
    
  }
}



export default IndexPage
