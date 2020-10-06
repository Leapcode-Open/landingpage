import React, { Component } from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
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
        <ReactTypeformEmbed style={{ height:'500px', width:'100%', position:'relative' }} url="https://form.typeform.com/to/GVCzFy" />
      </div>
    </div>
   
  </div>
)


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
        <SEO title="Leapcode - Make your first open source contribution" />
        <SurveyModel onClose={this.onClose} isOpen={this.state.sur} />
        {/* <div className="py-3 w-screen text-center text-sm font-gt bg-gray-800 font-bold text-white">Leapcode is a winner of the Community Engagement Challenge - Phase One🎉 by GNOME & Endless - <a className='font-bold hover:underline' href="https://www.gnome.org/challenge/phase-one-winners/">Read more</a></div> */}
        <div className="">

    
        <div className="max-w-screen-lg mx-auto mt-12 md:mt-16">
          <div className="flex justify-center">

         
            <div className="w-full md:w-2/3  text-center px-6 md:px-0">
              <img alt='Leapcode Logo' className="md:w-1/3 w-1/2 mx-auto mb-12" src={require('../assets/images/leapcode-logo--new.svg')} />
              <h1 className="w-full text-3xl md:text-5xl text-newblue-900 font-gt">{}Kick start your  open <br /> source contribution{}</h1>
              <p className=" font-gt text-base md:text-lg text-newblue-900 leading-relaxed tracking-wide letter">Leapcode helps you contribute to open source projects right from your first pull request to working on major projects</p>
              <div className="flex flex-col mt-8 align-center justify-center">
                <div className="block mt-2">
                  <a href="https://app.leapcode.io/login?ghlogin=true" rel="nofollow" className=" hover:bg-black bg-gray-900 text-white font-gt inline-block font-semibold px-6 py-3 text-sm md:text-sm rounded-lg "><div className="flex"><img className="w-5 h-5 mb-0 mr-3" src={require('../images/github-logo.svg')} /><span>Sign in with Github</span></div> </a>

                </div>
                <div>
                  <button  onClick={this.runSurvey} className="bg-white underline px-6 py-3 text-base rounded-lg font-gt font-regular mt-4 text-newblue-900 ml-1">Request access</button>

                </div>
              </div>
            </div>

            {/* <div className="w-full md:w-1/2">

            </div> */}


          </div>

        </div>  


        <div className="bg-newblue-100 p-8 rounded-lg mt max-w-2xl mx-auto my-4 text-center">
          <h3 className="text-xl font-gt text-blue-800 font-bold">Easy way to start and be part of <a href="https://hacktoberfest.digitalocean.com/" >Hacktoberfest</a></h3>
          <p className="text-base font-gt mb-0">Participating in hacktoberfest? We are listing some amazing projects & resources to help you make your open source contributions easy.</p>
          {/* <a rel="nofollow" target="_blank" href="https://hacktoberfest.digitalocean.com/"  className="font-gt font-bold text-blue-800 hover:underline" href='#'>Learn more</a> */}
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





         
            <div className="max-w-screen-lg mx-auto mt-4">
              <h2 className="">Recent contributors who made their first pull request</h2>
              <div className="grid gap-4 grid-cols-3 text-left mt-10">
                  {
                    this.props.data.allMarkdownRemark.edges.filter(c => c.node.frontmatter.username != 'sethusathyan').map(contrib => (
                      <a key={contrib.node.frontmatter.username} href={`/contributor/${contrib.node.frontmatter.username}`} className="border cursor-pointer border-gray-300 p-3 shadow-sm hover:shadow-lg transition transition-duration-100 rounded">
                        <h6 className="font-gt text-base mb-2">{contrib.node.frontmatter.name}</h6>
                        <p  className="font-gt text-sm mb-0">{contrib.node.frontmatter.bio}</p>
                      </a>
                    ))
                  }
              </div>

              <a className="text-blue-600 font-bold font-gt mt-10 block hover:underline" href="/contributor">See all contributors →</a>

            </div>
          

        </div>
       


        <div className=" mt-12 md:mt-32 text-center bg-newblue-800 py-12 md:py-32 strokes-bg">
          <div className="max-w-screen-md mx-auto px-6 md:px-2">
            <h2 className="text-3xl md:text-4xl font-gt text-white">Contributing to open source is now <br />easy & rewarding</h2>
            <p className="font-gt text-white  leading-relaxed tracking-wide">A lot of first time contributors face issues in finding a project, figuring out what to contribute, understanding the repo etc. With Leapcode, we are empowering first time contributors by motivating & rewarding each step they take towards the contribution.</p>
            <button  onClick={this.runSurvey} className="bg-white hover:bg-gray-200 px-6 py-3 text-base rounded-lg mt-8 font-gt font-bold text-newblue-900">Request Access</button>
          </div>
        </div>





        <section className="md:mt-32 mt-16" >
          <div className="max-w-screen-lg mx-auto">
            <div className="md:w-2/3 px-6 md:px-0">
              <small className="font-gt font-bold block mb-4 text-lg opacity-75">For Open Source Project Owners</small>
              <h2 className="text-4xl font-gt text-newblue-900 leading-snug">Create a seamless experience for your contributors</h2>
              <p className="text-newblue-900 tracking-wide font-gt">For open source project maintainers & owners, Leapcode helps you onboard first time contributors by simplyfying your contribution process & making it interesting.</p>
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





</div>
      </Layout>
    )
    
  }
}


export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
    
      allMarkdownRemark(
        limit: 3
      ) {
        edges {
          node {
            frontmatter {
              username
              name
              bio
            }
          }
        }
      }
    
  }
`



export default IndexPage
