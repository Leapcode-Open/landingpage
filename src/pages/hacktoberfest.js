import React, { Component } from 'react'

export default class hacktoberfest extends Component {
    render() {
        return (
            <div className="bg-superblack">
                <div className="py-32 hacktob-lines relative">
                    {/* <div className="absolute top-0 left-0 w-full z-0">
                        <img className="w-full" src={require('../assets/images/random-2.svg')} />
                    </div> */}
                    <div className="max-w-4xl mx-auto z-10">
                        <h1 className="text-white font-gt text-5xl linear-wipe">Create your first Pull Request during Hacktoberfest</h1>
                    </div>
                </div>
            </div>
        )
    }
}
