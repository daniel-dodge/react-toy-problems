import React, {Component} from 'react'
export default class Palindrome extends Component {
    constructor(){
        super()
        this.state ={
            userInput : '',
            palindrome : ''
        }
    }
    handleChange(val){
        this.setState({userInput:val})
    }
    checkPalindrome(inputText){
    let stringArr = inputText.split("")
    console.log(inputText)
    let topNum = stringArr.length - 1
    console.log(stringArr)
    console.log(topNum)

    for(let i = 0; i < stringArr.length; i++){
        if(stringArr[i] === stringArr[topNum]){
            console.log('ok')
            topNum -= 1
        } else{
            console.log('nah')
            return
        }
    }
    this.setState({palindrome:inputText})
    }
    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e)=>{this.handleChange(e.target.value)}}></input>
                <button className="confirmationButton" onClick={() => {this.checkPalindrome(this.state.userInput)}}></button>
                <span className="resultsBox">Palindrome :{JSON.stringify(this.state.palindrome)}</span>

            </div>
        )
    }


}