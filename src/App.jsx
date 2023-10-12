function Hello(props){
  return (
    <p>Hello {props.userName}</p>
  )
}


function App() {

  let user1 = "Bharathan"
  let user2 = "Niranjan"
  return(
    <div>
      <p>Greetings</p>
      <Hello userName={user1}/>
      <Hello userName={user2}/>
      
    </div>
    
  )
}

export default App;