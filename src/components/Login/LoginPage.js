import React from 'react'

export const LoginPage = () => {
  return (
    <div className='container login__bg'>
      <form className='login__form'>
        <h3 className='login__title'>Ingresa</h3>
        <div className='login__form-group'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' autocomplete='off' />
        </div>
        <div className='login__form-group'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' autocomplete='off' />
        </div>

        <button className='submit login__button'>Login</button>
      </form>
    </div>
  )
}
