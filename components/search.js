import React, { Component } from 'react'

class Search extends Component {

  constructor (props) {
    super(props)
  }


	handleClick() {
		let ingredient = document.getElementById('ingredient').value
		console.log('aaa', ingredients)
		return ingredients
	}

  render () {
    return (
    	 <div>
    	 <h1>Search for ingredient</h1>
    	 <input id="ingredient" type="text" /><button onClick={() => {this.handleClick()}}>Ok</button>
  		 </div>
  		 )
	}

}

export default Search