import React from 'react'
import './Card.css'
import Btn from './Btn'

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            score : 0
        }
    }

    calScore = (value) => {
        if (value == "add" && this.state.score < 10){
            this.state.score += 1
            console.log(this.state.score)
        }
        else if (value == "add" && this.state.score >= 10){
            alert("Cannot Vote more")
        }
        else if (value == "substract" && this.state.score > 0){
            this.state.score -= 1
            console.log(this.state.score)
        }
        else if (value == "substract" && this.state.score == 0){
            alert("Cannot Unvote more")
        }
        return this.setState({score : this.state.score})
    }

    showScore() {
        if (this.state.score == 0){
            return "MIN"
        }
        else if (this.state.score ==10){
            return "MAX"
        }
        return this.state.score
    }

    render() {
        return (
            <div className="Box">
                <div className="CardBox">
                    <div className="descriptionBox">
                        <div className="FoodName">{this.props.name}</div>
                        <div className="CategoryName"> {this.props.category}</div>
                        <div className="FoodInfo">{this.props.description}</div>
                    </div>
                    <img src={this.props.img} width="300" height="250" />
                </div>
                <div className="BtnPos">
                    <Btn name="Click to vote" parentCallback={this.calScore} value="add"/>
                    <div className="ScoreBox">{this.showScore()}</div>
                    <Btn name="Click to unvote" parentCallback={this.calScore} value="substract"/>
                </div>
            </div>

        )
    }
}

export default Card