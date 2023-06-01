import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import API from '../API/API'

const Home = () => {
    
  return (
    <div>
      <Main />
      <Row rowID='1' title='Popular' fetchURL={API.popular}/>
      <Row rowID='2' title='Trending' fetchURL={API.trending}/>
      <Row rowID='3' title='Top Rated' fetchURL={API.topRated}/>
      <Row rowID='4' title='Upcoming' fetchURL={API.upcoming}/>
      <Row rowID='5' title='TV Series' fetchURL={API.tvSeries}/>
    </div>
  )
}

export default Home
