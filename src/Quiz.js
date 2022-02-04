import React, { Component } from 'react'
let quizData = require('./quiz_data.json')

class Quiz extends Component {

    constructor(props){
        super(props)
        this.state =  quizData.quiz_questions[0]
        console.log("stateeeeeeeeee",this.state)
    }
    render(){
        return (
            <div className="QuizQuestion">
                {this.state.instruction_text}
                {/* {this.state.quiz_position[0].instruction_text} */}
            </div>
        )
    }
}

export default Quiz