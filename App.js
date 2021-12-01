import React from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import Page1 from './Page1'
import {store} from './redux/Store'
import Home from './screen/Home'
import ShowData from './ShowData'

const App = () => {
  return (
    <Provider store={store}> 
  <Home/>
    </Provider>  
  )
}

export default App
