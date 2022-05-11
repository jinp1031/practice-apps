import React from 'react';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      def:''
    }
    this.add = this.add.bind(this);
    this.onChangeW= this.onChangeW.bind(this);
    this.onChangeD= this.onChangeD.bind(this);
  }

  onChangeW (e) {
    this.setState({
      word: e.target.value
    });
  }

  onChangeD (e) {
    this.setState({
      def: e.target.value
    });
  }

  add() {
    this.props.onAdd(this.state.word, this.state.def);
    this.setState({
      word:'',
      def:''
    })
  }

  render() {
    return (<div>
      <form>
      Add Word: <input value={this.state.term} onChange={this.onChangeW}/><br/>
      Definition: <input value={this.state.term} onChange={this.onChangeD}/>
      </form>
      <button onClick={this.add}> 🆗! Add it!! </button>
    </div>)
  }
}







export default Add;
