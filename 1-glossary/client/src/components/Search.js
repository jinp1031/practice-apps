import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.search = this.search.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
    this.setState({
      term:''
    })
  }

  render() {
    return (<div>
      Search Word: <input value={this.state.term} onChange={this.onChange}/>
      <button onClick={this.search}> 🕹🕹🕹 </button>
    </div>)
  }
}







export default Search;
