import React from 'react'
import {store} from "react-redux"
import {Provider} from "react-redux"
import {useGetPostsQuery} from './redux/api';

const App = () => {
  return (
    <Provider store={store}>
      <div>App</div>
    </Provider>
  )
}

export default App
