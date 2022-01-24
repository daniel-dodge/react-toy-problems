import React, {Component} from 'react'
export default class FilterString extends Component {
    constructor(){
        super()
        this.state = {
            unFilteredArray: ["amongus", "jdkas", "the"],
            userInput:'',
            filteredArray:[]
        }
    }
    handleChange(val){
    this.setState({userInput:val})
    // console.log(this.state.userInput)    
    }
    sortString(filterText){
    let filteredArr = []
    let strings = this.state.unFilteredArray
    for(let i = 0; i < strings.length; i++){
        if(strings[i].includes(filterText)){
            // console.log("true")
            // console.log(strings[i])
            filteredArr.push(strings[i])
        }
        this.setState({filteredArray:filteredArr})
    }
    }
    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Unfiltered Strings : {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={(e) => {this.handleChange(e.target.value)}}></input>
                <button className="confirmationButton" onClick={() => {this.sortString(this.state.userInput)}}></button>
                <span className="resultsBox filterStringRB">Filtered String : {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }


}