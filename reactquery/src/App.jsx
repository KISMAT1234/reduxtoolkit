

function App() {

  const { data, isLoading} =useQuery({
    querykey:["posts"],
    queryFn:fetchPosts,
  })
  console.log(data,isLoading)

  return (
    <>
      <h1>Kismat running</h1>
    </>
  )
}

export default App
