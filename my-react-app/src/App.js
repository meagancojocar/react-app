
import React from 'react'
import Table from './Table'

class App extends React.Component {
  state = {
    destList: [
        {
          destination: 'Venice',
          country: 'Italy'
        },
        {
          destination: 'Gili Islands',
          country: 'Indonesia'
        },
        {
          destination: 'Kekova',
          country: 'Turkey'
        },
        {
          destination: 'Zhangjiajie',
          country: 'China'
        },
        {
            destination: 'Waitomo Glow Worm Cave', 
            country: 'New Zealand'
        },
    ],
  }

  removeDestination = index => {    
    const listofDest = this.state.destList;     
    this.setState({
      destList: listofDest.filter((dest, i) => { 
        return i !== index
      }),     
    })
  }

  render() {
      
    return (
      <div className="App">
        <h1>Travel Bucketlist</h1>
        <Table destinations={this.state.destList} removeDestination={this.removeDestination}/>
      </div>
    )
  }
}

export default App