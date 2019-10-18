import React from 'react'

class Form extends React.Component { 
    state = {     
      destination: '',     
      country: '', 
    }; 
    
    initialState = this.state  
    
    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        
        this.setState({
          [name] : value
        });
      }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {   
        const destination = this.state.destination;
        const country = this.state.country;   

        return (       
            <form onSubmit={this.onFormSubmit}>           
                <label>Destination</label>           
                <input 
                    type="text"
                    name="destination"
                    value={destination}
                    onChange={this.handleChange} /> 
                <label>Country</label>
                <input 
                    type="text"
                    name="country"
                    value={country}
                    onChange={this.handleChange} />
                <button type="submit">Submit</button>
            </form>   
            ); 
        }
}



export default Form