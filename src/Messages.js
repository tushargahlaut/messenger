import React from "react";
//import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./Messages.css";

const Messages = ({message,user}) => {
    const isUser = user===message.username;
    return ( 
       <div className={`message ${isUser && 'message__user'}`}>
           <Card className={isUser ? 'message__userCard' : "message__guestCard"}>
               <CardContent>
                   <Typography
                   variant="h5"
                   component="h2"
                   >
                      {message.username} : {message.msg}
                   </Typography>
               </CardContent>
           </Card>
           
        </div>
     );
}
 
export default Messages;