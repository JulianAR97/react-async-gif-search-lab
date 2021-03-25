import React, {Component} from 'react';
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

const apiKey = "Jcfpz1VcJa44sCUUOXvdsxKyxjEbfe6s"
const giphyUrl = 'https://api.giphy.com/v1/gifs/search?q='
class GifListContainer extends Component {
  state = {
    gifs: []
  }

  handleSubmit = e => {
    e.preventDefault()
    let searchQuery =  document.getElementById('searchQuery').value
    e.target.reset()
    fetch(`${giphyUrl}${searchQuery}&api_key=${apiKey}`)
      .then(resp => resp.json())
      .then(data => {
        let gifUrls = data.data.slice(0, 3).map(gif => gif.images.original.url)
        this.setState({
          gifs: gifUrls
        })
      })
  }

  render() {

    return(
      <div>
        <GifSearch handleSubmit={this.handleSubmit} />
        <GifList gifs={this.state.gifs}/>

      </div>
    )
  }
  
}

export default GifListContainer;
