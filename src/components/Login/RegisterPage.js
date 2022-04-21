import React from 'react'

export const RegisterPage = () => {
  return (
    <div className='container register__bg'>
      <form className='login__form'>

        <h3 className='login__title'>Regístrate</h3>

        <div className='login__form-group'>
          <label htmlFor='email'>Username</label>
          <input type='text' id='email' autocomplete='off' />
        </div>
        <div className='login__form-group'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' autocomplete='off' />
        </div>
        <div className='login__form-group'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' autocomplete='off' />
        </div>

        <button className='submit register__button'>Sign up</button>
      </form>
    </div>
  )
}
