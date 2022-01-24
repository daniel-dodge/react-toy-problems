import React, {Component} from 'react'
export default class FilterObject extends Component {
    constructor(){
        super()
        this.state ={
        unFilteredArray:[
            {name:'Apple',
            tasty:true,
            type:"Green Apple"
        },
            {name:"Banana",
            color:"Yellow"
        },
            {name:"Orange",
        tasty:true
        }
        ],
        userInput:'',
        filteredArray:[]
        }
    }
    handleChange(val){
        this.setState({userInput:val})
    }
    filterArray(propName){
    let filterArr = []
    let fruits = this.state.unFilteredArray
    console.log(this.state.userInput)
    console.log(fruits)
    for(let i = 0; i < fruits.length; i++){
    if(fruits[i].hasOwnProperty(propName)){
        console.log("djkslad")
        filterArr.push(fruits[i])
    } else{
        console.log("false")
    }
    this.setState({filteredArray:filterArr})
    }
    
    }
    render(){
        return(
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Unfiltered Text : {JSON.stringify(this.state.unFilteredArray )}</span>
                <input className='inputLine' onChange={e => {this.handleChange(e.target.value)}}></input>
                <button className='confirmationButton' onClick={() => {this.filterArray(this.state.userInput)}}></button>
                <span className='resultsBox filterObjectRB'>Filtered Text : {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }


}