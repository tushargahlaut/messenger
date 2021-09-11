
import { useEffect, useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import Messages from './Messages';
import db from "./firebase.js";
import firebase from "firebase";

function App() {
  const [input,setInput] = useState("");
  const [messages,setMessages] = useState([]);
  
  const [userName,setUserName] = useState('');
  const handleMessage = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      msg:input,
      username:userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    //console.log(input);
    //setMessages([...messages,{username : userName, msg:input}]);
    setInput("");
  }

  useEffect(()=>{
    db.collection("messages")
    .orderBy("timestamp",'asc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data() ))
    })
  },[])

  useEffect(()=>{
   setUserName("Test1");
    //setUserName(prompt("Enter Your Name"));
  },[])

  return (
    <div className="App">
        <h1>Welcome to My Messenger Clone</h1>
        <h2>Welcome {userName}</h2>
        <form>
        <TextField size="small" label="Message" variant="outlined" type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
        <Button disabled={!input} variant="outlined" startIcon={<SendIcon/>} color="primary" type="submit" onClick ={handleMessage} >Send</Button>
        </form>
        
        {messages.map(message => (
            <Messages user={userName} message={message}/>
        ))}
        
    </div>
  );
}

export default App;
