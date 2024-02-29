import React from 'react'
import "./Login.css"

export default function Login() {

  return (
    <div className='container_login'>    
    <div className='wrapper'>
        <div className='form_login'>
            <h2>Вхід</h2>
            <form method='post' action='/login'>
                <div className='input_box_login'>
                    <input type="email" name="email"  required/>
                    <label>Email</label>
                </div>

                <div className='input_box_login'>
                    <input type="password"  name="password" required/>
                    <label>Пароль</label>
                </div>
                <button type="submit" className='btn_login'>Вхід</button>
            </form>
        </div>
    </div>
    </div>
  )
}