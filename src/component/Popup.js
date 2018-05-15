import React from 'react'

class Popup extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <span></span>
                <span></span>
                <input type="text" />
                <input type="button" value="" />
                <input type="button" value="" />
            </div>
        )
    }
}

export default Popup;