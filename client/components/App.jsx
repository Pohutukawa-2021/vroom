import React from 'react'
import { connect } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { cacheUser } from '../auth0-utils'
import { Route } from 'react-router'
import 'animate.css'

import SearchBar from './SearchBar'
import LandingPage from './LandingPage'
import Footer from './Footer'
import Registration from './Registration/Registration'
import Nav from './Nav'
import PostRide from './Drivers/PostRide'

function App () {
  cacheUser(useAuth0)

  return (
    <div className='app'>
      <Route path='/' component={Nav} />
      {/* <Route exact path='/' component={Users} />
      <Route exact path='/' component={PingRoutes} /> */}
      <Route path='/register' component={Registration} />
      <Route path='/drivers' component={PostRide} />
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/' component={SearchBar} />
      <Route path='/' component={Footer} />
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    fruits: globalState.fruits,
    token: globalState.user.token
  }
}

export default connect(mapStateToProps)(App)
