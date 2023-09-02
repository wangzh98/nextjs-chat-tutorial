import React,{useState, useContext, useEffect} from "react";
import {Context} from "../context";
import {useRouter} from "next/router";
import dynamic from "next/dynamic"

const ChatEngine = dynamic(()=>
  import("react-chat-engine").then((module)=>module.ChatEngine)
)

const MessageFormSocial = dynamic(()=>
  import("react-chat-engine").then((module)=>module.MessageFormSocial))

export default function Chats() {
  const {username, secret} = useContext(Context)
  const [showChat, setShowChat] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true)
    }
  })

    useEffect(()=> {
        if (username.length === 0 || secret.length === 0) router.push("/")
    })

  if (!showChat) return <div></div>

  return (
      <div className="background">
        <div className="shadow">
          <ChatEngine
              height='calc(100ch - 200px)'
              projectID="5d117bd7-5687-4ba1-a50c-44330beaa2d8"
              userName={username}
              userSecret={secret}
              renderNewMessageForm={()=> <MessageFormSocial />}
          />
        </div>

      </div>
  )
}
