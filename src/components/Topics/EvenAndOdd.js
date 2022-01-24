import React, {Component} from 'react'
export default class EvenAndOdd extends Component {
    constructor(){
        super()

        this.state = {
            evenArray : [],
            oddArray : [],
            userInput : ''  
        }
    }
    handleChange(val){
        this.setState({userInput:val})
    }
    calculateEvenOdd(userInput){
        let arr = userInput.split(',')
        console.log(arr)
        let evenArr = []
        let oddArr = []
        for(let i = 0; i < arr.length; i++){
            if(arr[i] % 2 === 0){
                evenArr.push(arr[i])
            } else{
                oddArr.push(arr[i])
            }
        }
        this.setState({evenArray:evenArr, oddArray:oddArr})
    }
    render(){
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Even and Odd</h4>
                <input className='inputLine' onChange={e => this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => {this.calculateEvenOdd(this.state.userInput)}}>Calculate</button>
                <span className='resultsBox'>Even : {JSON.stringify(this.state.evenArray)}</span>
                <span className='resultsBox'>Odd : {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )

    }


}