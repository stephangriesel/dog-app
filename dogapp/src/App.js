import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount(){
    fetch('https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=4')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    });

  }

  render() {

    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    } else {

      return (
        <div className="App">
          <ul>
            {items.map(item => (
              <li key={item.id}>
              {/*{console.log(items)*/}
              {console.log(items[0])}
              {console.log(items[0].breeds[0].bred_for)}
              Name: {items[1].breeds[0].name} | Bred for: {items[1].breeds[0].bred_for}
              </li>
            ))}
          </ul>
        </div>
      )
    };
    
  }
}

export default App;
