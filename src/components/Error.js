import React, { Component } from 'react'


export class Error extends Component {
    
    state = {
        error: false
    }

    render() {
        if(this.state.error) {
            return (
                <div className="404-error">
                    <h1>Error 404: Page Not Found</h1>
                </div>
            )
        }
    }   

}


export default Error
