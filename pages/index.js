 import React, {useContext} from "react";

import {Context} from "../context";

import {useRouter} from "next/router";

import axios from "axios";

 export default function Auth() {
     const {
         username,
         secret,
         setUsername,
         setSecret
     } = useContext(Context)
     const router = useRouter()

     function onSubmit(e) {
         e.preventDefault()
         if(username.length === 0 || secret.length === 0) return
         axios.put("https://api.chatengine.io/users/",
             {username, secret},
             {headers: {"Private-key": "dde7a749-c54a-4156-81a1-9cc3b32bd3b2"}}
         ).then(r => {
             router.push('/chats')
         })
     }

  return (
      <div className="background">
       <div className="auth-container">
        <form action="" className="auth-form" onSubmit={e => onSubmit(e)}>
            <div className="auth-title">
                NextJS Chat
            </div>

            <dev className="input-container">
                <input type="text" placeholder="Email" className="text-input" onChange={e => setUsername(e.target.value)} />
            </dev>
            <dev className="input-container">
                <input type="password" placeholder="Password" className="text-input" onChange={e => setSecret(e.target.value)} />
            </dev>

            <button type="Submit" className="submit-button">
                Login / Sign Up
            </button>
        </form>
       </div>
      </div>
  )
}
