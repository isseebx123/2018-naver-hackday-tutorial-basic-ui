import React from 'react'

class Container extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            // ContactPage + ContactTable을 가지거나
            // ContactTable만 여러개 가지거나
            <div style={containerStyle}>

            </div>
        )
    }
}

var containerStyle = {
    border: '1px solid black',
    display: 'inline-block',
}

export default Container;