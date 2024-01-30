/* eslint-disable prettier/prettier */
import React from 'react'
import style from './SignUp.module.css'
import { Link, useNavigate } from 'react-router-dom'
import API from '../../constants/api/API'
import { ValidationRegister } from '../../validation/validationForm'

const SignUp = () => {
  const [data, setData] = React.useState({ username: '', password: '', confirmPassword: '', email: '', first_name: '', last_name: '' })
  const [error, setError] = React.useState({ username: '', password: '', confirmPassword: '', email: '', first_name: '', last_name: '', signup: '' })

  let navigate = useNavigate()

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const isValidation = (fields) => {
    let isValid = true
    let error = {}

    fields.forEach((field) => {
      if (!field.isValid) {
        isValid = false
        error[field.field] = field.message
      }
    })
    setError(error)

    return isValid
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    const fieldCheck = ValidationRegister(data)

    if (isValidation(fieldCheck)) {
      setError('')
      const formdata = new FormData()
      formdata.append('username', data.username)
      formdata.append('password', data.password)
      formdata.append('first_name', data.first_name)
      formdata.append('last_name', data.last_name)
      formdata.append('email', data.email)

      API.post('register', formdata)
        .then((res) => {
          res.status === 200 && navigate('/login')
          console.log(res)
        })
        .catch((err) => {
          setError({ ...error, signup: err.response.data.message })
          console.log(err)
        })
    }
  }

  return (
    <div className={style.page}>
      <div className={style.container}>
        <form className={style.form} method='post' onSubmit={handleSubmit} noValidate>
          <h2 className={style.form__header}>Sign Up</h2>
          <input
            type='text'
            name='username'
            className={style.form__username}
            placeholder='Username'
            onChange={handleChange}
            required
          />
          <p className={style.form__error}>{error.username}</p>
          <input
            type='password'
            name='password'
            className={style.form__password}
            placeholder='Password'
            onChange={handleChange}
            required
          />
          <p className={style.form__error}>{error.password}</p>
          <input
            type='password'
            name='confirmPassword'
            className={style.form__password}
            placeholder='Confirm Password'
            onChange={handleChange}
            required
          />
          <p className={style.form__error}>{error.confirmPassword}</p>
          <input
            type='email'
            name='email'
            className={style.form__email}
            placeholder='Email'
            onChange={handleChange}
            required
          />
          <p className={style.form__error}>{error.email}</p>
          <input
            type='text'
            name='first_name'
            placeholder='First Name'
            onChange={handleChange}
          />
          <p className={style.form__error}>{error.first_name}</p>
          <input
            type='text'
            name='last_name'
            placeholder='Last Name'
            onChange={handleChange}
          />
          <p className={style.form__error}>{error.last_name}</p>
          <p className={style.form__link}>
            Already have an account ? <Link to='/login'>Login</Link>
          </p>
          <button type='submit' name='submit' className={style.form__button}>
            Sign Up
          </button>
          <p className={style.form__error}>{error.signup}</p>
        </form>
      </div>
      <div className={style.decoration}>
        <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
          <path
            className={style.shape_fill}
            d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default SignUp
