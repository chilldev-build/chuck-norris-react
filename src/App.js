import React from 'react';
import Quote from './components/quotes';
import './App.css';

class App extends React.Component {
  state = {
    category: "dev"
  }

  changeCategory = () => {
    this.setState({
        category: "sport"
    });
  };

  render() {
    const { category } = this.state;
    return (
      <div className="App">
          <Quote category ='sport' />
          <br />
          <button onClick={() => this.changeCategory()}>
            Change Category
          </button>
      </div>
    );
  }
}

export default App;
