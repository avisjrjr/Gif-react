import { Component } from 'react';

const BIRD_KEY= process.env.REACT_APP_SCREAM


class App extends Component {
  state ={
      searchValue: "",
      gif: []
    }
  
handleChange = (event) => {
  this.setState({ [event.target.name]: event.target.value})
}
  
  handleSubmit = (event)=>{
    event.preventDefault()

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${BIRD_KEY}&q=${this.state.searchValue}&limit=10&offset=0&rating=g&lang=en`)
      .then(response=>  {
        return response.json()
      })
      .then(data=> {
        this.setState({
          gif: data.data
        })
      })
    }


    render() { 
      return (
      <div>
        <h4>Search for Bird:</h4>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="searchValue" value={this.state.searchValue} onChange={this.handleChange}/>
          <button>Submit</button>
        </form>
        {this.state.gif.map((gif, idx)=> {
          return(
            <img src={gif.images.original.url} key={idx}/>
          )
        })}
      </div>
        
        );
    }
  }
  
  

export default App;