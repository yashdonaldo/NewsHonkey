import React, { Component } from 'react'
import Navbar from './Component/Navbar'
import News from './Component/News'
import {
  Route,
  Routes,
  BrowserRouter as Router
} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  apikey = process.env.REACT_APP_NEWS_API
  state = {
    progress : 0
  }
  setProgress = (progress)=>{
    this.setState({progress :progress})
  }
  render() {
    return (
        <Router>
      <div>
        <Navbar />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
          <Routes>
            <Route exact path='/' element={<News setProgress={this.setProgress} apikey={this.apikey} key="business" category="business" />} />
            <Route exact path='/entertainment' element={<News setProgress={this.setProgress} apikey={this.apikey} key="entertainment" category="entertainment" />} />
            <Route exact path='/general' element={<News setProgress={this.setProgress} apikey={this.apikey} key="general" category="general" />} />
            <Route exact path='/health' element={<News setProgress={this.setProgress} apikey={this.apikey} key="health" category="health" />} />
            <Route exact path='/science' element={<News setProgress={this.setProgress} apikey={this.apikey} key="science" category="science" />} />
            <Route exact path='/sports' element={<News setProgress={this.setProgress} apikey={this.apikey} key="sports" category="sports" />} />
            <Route exact path='/technology' element={<News setProgress={this.setProgress} apikey={this.apikey} key="technology" category="technology" />} />
          </Routes>
      </div>
        </Router>
    )
  }
}
