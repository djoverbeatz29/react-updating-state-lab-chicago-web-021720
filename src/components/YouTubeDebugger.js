import React, { Component } from "react"

export default class YouTubeDebugger extends React.Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    setBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        }, () => console.log(this.state.settings))
    }

    setRez = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        }, () => console.log(this.state.settings))
    }

    render() {
        return (
            <div>
                <button className='bitrate' onClick={this.setBitrate}>Change Bitrate</button>
                <button className='resolution' onClick={this.setRez}>Change Rez</button>
            </div>
        )
    }

}