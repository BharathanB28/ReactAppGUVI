function Hello(props){
  return (
    <p>Hello {props.userName}</p>
  )
}

function App() {

  let user1 = Bharathan
  return(
    <div>
      <p>Greetings</p>
      <Hello {userName=user1}/>
    </div>
    
  )
}

export default App;