import React, { Component } from 'react'
import Header from './header'
import Search from './search'

class App extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
    	<div>
	    	<h1>Welcome to {this.props.name}</h1>
	 		<Search />
	    	<Header />
    	</div>
	)
  }

}

export default App
