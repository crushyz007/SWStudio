import React from 'react'
// import './Btn.css'

class Btn extends React.Component{
    constructor(props){
        super(props)
    }

    OnClick = () => {
        this.props.parentCallback(this.props.value)
    }

    render() {
        return(
            <button className="btn" onClick={this.OnClick}>{this.props.name}</button>
        )
    }
}

export default Btn