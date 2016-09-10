import React, { Component } from 'react';
import View from './primitives/View';
import Text from './components/Text';
import StyleSheet from './primitives/StyleSheet';
import logo from './logo.svg';
import './App.css';

const styles = StyleSheet.create({
  yellow: {
    backgroundColor: 'gold',
  },
  blue: {
    backgroundColor: 'aquamarine',
    ':hover': { backgroundColor: 'blue' },
  },
});

class App extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    setInterval(() => {
      const { count } = this.state;
      this.setState({ count: count + 1 });
    }, 500);
  }

  render() {
    const { count } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      <View
        style={[
          styles.yellow,
          {
            padding: 24,
            ':hover': { backgroundColor: 'blue' },
        }]}
      >
        <Text selectable={false}>hola</Text>
      </View>
      <View
        pointerEvents="box-only"
        style={styles.blue}
      >
        <View>
          <Text>{count}</Text>
        </View>
      </View>
      </div>
    );
  }
}

export default App;
