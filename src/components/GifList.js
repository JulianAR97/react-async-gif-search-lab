import React, { Component } from 'react';

class GifList extends Component {
  
  renderListItems = items => {
    return items.map((item, key) => <li key={key}><img src={item} /></li>)
  }
  
  render() {
    return (
      <ul>
        {this.renderListItems(this.props.gifs)}
      </ul>
    )
  }
}

export default GifList;