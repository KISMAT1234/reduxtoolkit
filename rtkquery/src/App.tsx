import React from 'react'
import {useGetPostsQuery} from './redux/api';

const App = () => {
  const {isLoading, isError, isSuccess,data,error}= useGetPostsQuery("");
  return (
      <div>App</div>
  
  )
}

export default App
