import Button from './component/Button'
import './App.css'
import Container from './component/Container' 

function App() {

  return (
    <>
    <p>
      <Button >A button</Button>
      <Button >second</Button>
      <Button  href='https://google.com'>third</Button>
      <Container as={'button'}>click me</Container>
    </p>
    
    </>
  )
}
export default App