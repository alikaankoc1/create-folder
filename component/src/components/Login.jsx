import React from 'react'

function Login() {
  return (
    <div>
        <div>
            <p>Adınız Soyadınınız:</p>
            <input type="text" />
        </div>
        <div>
            <p>E-Mail:</p>
            <input type="email" />
        </div>
        <div>
            <p>Şifreniz:</p>
            <input type="password" />
        </div>
    </div>
  )
}

export default Login