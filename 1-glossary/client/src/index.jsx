import React from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './components/Search.js';
import WordList from './components/WordList.js';
import Add from './components/Add.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words:[]
    }
    this.get = this.get.bind(this)
    this.search = this.search.bind(this)
    this.add = this.add.bind(this)
    this.delete = this.delete.bind(this)
    this.update = this.update.bind(this)
  }

  get(){
    axios.get('/words').then(res => {
      this.setState({
        words:res.data
      })
    })
  }

  componentDidMount(){
    this.get()
  }

  search(term) {
    let query = { word: term };
    axios.get('/words').then((result) => {
      let match = result.data.filter(w => w.word.toLowerCase() === term.toLowerCase());
      this.setState({
        words: match
      })
    });
  }

  add(newWord, wordDefi) {
    let query = {word: newWord, definition: wordDefi};
    axios.post('/words', query).then(()=>{this.get()})
  }

  delete(term){
    let query = {word : term};
    axios.delete('/words', {data: query}).then(()=>{this.get()})
  }

  update(term, defi){
    let query = {word:term, definition:defi};
    axios.put('/words',query).then(()=>{this.get()})
  }

  render(){
    return (<div>
      <h1>Jin's Fantastic Dictionary</h1><br/>
      <Add onAdd={this.add}/> <br/>
      <Search onSearch={this.search}/><br/>
      <WordList
      words={this.state.words}
      onUpdate={this.update}
      onDelete={this.delete}
      /><br/>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));