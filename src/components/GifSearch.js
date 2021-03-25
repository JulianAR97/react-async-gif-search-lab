import React, { Component } from 'react';

class GifSearch extends Component {

  render() {
    return(
      <form onSubmit={this.props.handleSubmit}>
        <input type="text" id="searchQuery" name="searchQuery"/>
        <input type="submit" value="Find Gifs" />
      </form>
    )
  }
}

export default GifSearch;