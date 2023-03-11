import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const { user, setUser } = useContext(UserContext)
  const [ messageAlign, setMessageAlign ] = useState(1)

  const { id: user_id } = useParams()
   
  useEffect(() => {
    // create a new WebSocket connection
    axios.post("http://127.0.0.1:8000/chat/create", {
      "user1": user?.id,
      "user2": user_id
    })
    .then(res => {
      const newSocket = new WebSocket(`ws://localhost:8000/ws/${res.data.chat.id}/${user_id}`);
      setMessages(res.data.messages)
      newSocket.onopen = () => {
        console.log("WebSocket connected");
        setSocket(newSocket);
      };

      newSocket.onmessage = (event) => {
        const data = event.data;
        setMessages(prevState => [...prevState, JSON.parse(data)]);
      };
    })

    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    const messageInput = event.target.elements.message;
    const message = messageInput.value.trim();
    if (message && socket) {
      socket.send(message);
      messageInput.value = "";
    }
  };

  const fetchUser = async() => {
    const res = await axios.get(`http://localhost:8000/user/${user_id}`)
    return res.data.user
  }

  const { data, error, isLoading } = useQuery("user", fetchUser)

  if(isLoading) return <>Loading ... </>

  return (
      <div className="container w-3/5 my-10 mx-auto" style={{minHeight: "450px"}}>
        <div className="flex w-full h-full flex-col items-center">
          <h2 className="font-semibold text-2xl font-roboto">Chatting with: {`${data?.name} ${data?.surname}`}</h2>
          <div className="w-1/2 h-full p-4 shadow-lg" style={{minHeight: "450px"}}>
              {messages.map((message, index) => (
                  message.sender_id == user?.id 
                    ?
                    <p key={index} className="w-full px-2 font-poppins font-lg text-left">{message.message}</p>
                    :
                    <p key={index} className="w-full px-2 font-poppins font-lg text-right">{message.message}</p>
              ))}
          </div>
          <form onSubmit={sendMessage} className="w-1/2">
            <input type="text" className="shadow-xl px-4 h-12 w-4/5" name="message" />
            <button type="submit" className="outline-0 hover:shadow-lg h-12 ml-1 hover:shadow-blue-800/80 inline-flex justify-center items-center py-1 px-5 text-base font-medium text-center rounded-lg border border-gray-300 hover:text-white hover:bg-blue-800 transition duration-200 ease-out hover:border-transparent hover:ease-in border-gray-700 ">Send</button>
          </form>
        </div>
        
      </div>
      
  );
};

export default Chat;