// import Button from './component/Button'
import './App.css'
// import Button from './component/Button'
// import Container from './component/Container' 
import { Card } from './component/Card'

function App() {

  return (
    <Card
    title='something' onClick={()=>{
      alert("onclied")
    }}>
  
    </Card>
  )
}
export default App