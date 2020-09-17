import React, { Component } from 'react'

export default class hacktoberfest extends Component {
    render() {
        return (
            <div className="bg-superblack">
                <div className="py-12 md:py-32 hacktob-lines relative">
                    {/* <div className="absolute top-0 left-0 w-full z-0">
                        <img className="w-full" src={require('../assets/images/random-2.svg')} />
                    </div> */}
                  
                    <div className="max-w-4xl mx-auto z-10 px-4 md:px-0">
                        <div className="flex" >
                            <img className="md:w-64 w-1/2 mb-12" src={require('../assets/images/leapcode-logo--new-dark.svg')} />
                            {/* <img className="md:w-64 w-1/4 mb-12 ml-24" src={ require('../assets/images/HFLogo.svg')} /> */}
                        </div>

                        <h1 className="text-white font-gt text-4xl md:text-6xl linear-wipe">Create your first Pull Request during Hacktoberfest</h1>
                    </div>
                </div>
            </div>
        )
    }
}
