import Header from './components/header'
import Jobs from './components/jobs'

function App() {
  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await axios.get('http://localhost:9000/jobs')
  //     const { data } = response
  //     data.forEach((e) => {
  //       const tags = [e.role, e.level, ...e.languages, ...e.tools]
  //       e.tags = { ...tags }
  //     })

  //     return data
  //   }
  //   getData()
  // }, [])

  return (
    <div className='mx-auto'>
      <Header />
      <Jobs />
    </div>
  )
}

export default App
