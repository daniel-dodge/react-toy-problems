import React, {Component} from 'react'
export default class Sum extends Component {
    constructor(){
        super()
        this.state = {
            number1:0,
            number2:0,
            sum:null
        }
    }
    handleChangeNum1(val){
        this.setState({number1:val})
    }
    handleChangeNum2(val){
        this.setState({number2:val})
    }
    addSum(num1,num2){
    let sumNum = +num1 + +num2
    this.setState({sum:sumNum})
    }
    render(){
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={e => {this.handleChangeNum1(e.target.value)}}></input>
                <input className="inputLine" onChange={e => {this.handleChangeNum2(e.target.value)}}></input>
                <button className='confirmationButton' onClick={()=>{this.addSum(this.state.number1,this.state.number2)}}></button>
                <span className='resultsBox'>Sum : {this.state.sum}</span>
            </div>
        )
    }


}