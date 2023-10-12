function Hello(){
  return (
    <p>Hello World</p>
  )
}

function App() {
  return(
    <div>
      <p>Greetings</p>
      <Hello />
      <Hello />
      <Hello />
    </div>
    
  )
}

export default App;