import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo";

import { ReactTypeformEmbed } from 'react-typeform-embed';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'


class CodeConduct extends Component {


  render() {
    return(
      <Layout>
        <SEO title="Leapcode" />
 <nav class="flex items-center justify-between flex-wrap bg-current p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
              <img className="md:w-1/3 w-1/3 mx-auto mb-2" src={require('../assets/images/leapcode-logo--new.svg')} />
  </div>
</nav>
        <section >
          <div className="max-w-screen-lg mx-auto">
            <div className="md:w-2/3 px-6 md:px-0">
              {/* <small className="font-gt font-bold block mb-4 text-lg opacity-75">For Open Source Project Owners</small> */}
              <h2 className="text-4xl font-gt text-newblue-900 leading-snug">Code of Conduct</h2>
                <h5 className="text-2xl font-gt text-newblue-900">Our Pledge</h5>
                <p className="text-base font-gt  text-newblue-900 tracking-wide">In the interest of fostering an open and welcoming environment, we as
members, contributors, and leaders pledge to make participation in our project and
our community a harassment-free experience for everyone, regardless of age, body
size, disability, ethnicity, sex characteristics, gender identity and expression,
level of experience, education, socio-economic status, nationality, personal
appearance, race, religion, or sexual identity and orientation.</p>

                <h5 className="text-2xl font-gt text-newblue-900">Our Standards</h5>
                <p className="text-base font-gt  text-newblue-900 tracking-wide">
                Examples of behavior that contributes to creating a positive environment
include:
<br></br><br></br>

* Using welcoming and inclusive language
<br></br>

* Being respectful of differing viewpoints and experiences
<br></br>

* Gracefully accepting constructive criticism
<br></br>

* Focusing on what is best for the community
<br></br>

* Showing empathy towards other community members
<br></br><br></br>
Examples of unacceptable behavior by participants include:
<br></br><br></br>
* The use of sexualized language or imagery and unwelcome sexual attention or
  advances
  <br></br>
* Trolling, insulting/derogatory comments, and personal or political attacks
* Public or private harassment
<br></br>
* Publishing others' private information, such as a physical or electronic
  address, without explicit permission
  <br></br>
* Other conduct which could reasonably be considered inappropriate in a
  professional setting
  <br></br>

</p>


                <h5 className="text-2xl font-gt text-newblue-900">Our Responsibilities</h5>
                <p className="text-base font-gt  text-newblue-900 tracking-wide">
                Project maintainers are responsible for clarifying the standards of acceptable
behavior and are expected to take appropriate and fair corrective action in
response to any instances of unacceptable behavior.
<br></br> <br></br>
Project maintainers have the right and responsibility to remove, edit, or
reject comments, commits, code, wiki edits, issues, and other contributions
that are not aligned to this Code of Conduct, or to ban temporarily or
permanently any contributor for other behaviors that they deem inappropriate,
threatening, offensive, or harmful.</p>

<h5 className="text-2xl font-gt text-newblue-900">Scope</h5>
                <p className="text-base font-gt  text-newblue-900 tracking-wide">
                This Code of Conduct applies within all project spaces, and it also applies when
an individual is representing the project or its community in public spaces.
Examples of representing a project or community include using an official
project e-mail address, posting via an official social media account, or acting
as an appointed representative at an online or offline event. Representation of
a project may be further defined and clarified by project maintainers.</p>

<h5 className="text-2xl font-gt text-newblue-900">Enforcement</h5>
                <p className="text-base font-gt  text-newblue-900 tracking-wide">
                Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported by contacting the project team at sethu@leapcode.io. All
complaints will be reviewed and investigated and will result in a response that
is deemed necessary and appropriate to the circumstances. The project team is
obligated to maintain confidentiality with regard to the reporter of an incident.
Further details of specific enforcement policies may be posted separately.
<br></br><br></br>
Project maintainers who do not follow or enforce the Code of Conduct in good
faith may face temporary or permanent repercussions as determined by other
members of the project's leadership.</p>

<h5 className="text-2xl font-gt text-newblue-900">Attribution</h5>
                <p className="text-base font-gt  text-newblue-900 tracking-wide">
                This Code of Conduct is adapted from the [Contributor Covenant][homepage], version 1.4,
available at <a href="https://www.contributor-covenant.org/version/1/4/code-of-conduct.html" target="_blank">https://www.contributor-covenant.org/version/1/4/code-of-conduct.html</a></p>
            </div>
            
            
          </div>
        </section>


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



export default CodeConduct
