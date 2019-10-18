
import React from 'react'
import Table from './Table'
import Form from './Form' 

class App extends React.Component {

  state = {
    destList: [],
  }

  removeDestination = index => {    
    const listofDest = this.state.destList;     
    
    this.setState({
      destList: listofDest.filter((dest, i) => { 
        return i !== index
      }),     
    })
  }

  handleSubmit = dest => {
    this.setState({destList: [...this.state.destList, dest]});
}

  render() {
      
    return (
      <div className="App">
        <h1>Travel Bucketlist</h1>
        <Table destinations={this.state.destList} removeDestination={this.removeDestination}/>
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default App