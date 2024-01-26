/* eslint-disable prettier/prettier */
import React, { useContext, useEffect } from 'react'
import style from './Login.module.css'
import API from '../../constants/api/API'
import { Link, useNavigate } from 'react-router-dom'
import { ValidationLogin } from '../../validation/validationForm'
import axios from 'axios'
import { PATH_URL } from '../../constants/values'
import useUserContext from '../../hooks/useUserContext'

const Login = () => {
  const [data, setData] = React.useState({ username: '', password: '' })
  const [error, setError] = React.useState({ username: '', password: '', login: '' })

  let navigate = useNavigate();
  const user = useUserContext();

  useEffect(() => {
    user && navigate('/home')
  }, [])

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const isValidation = fields => {
    let isValid = true
    let error = {}
    fields.forEach(field => {
      if (!field.isValidField) {
        isValid = false
        error[field.field] = field.message
      }
    })
    setError(error)

    return isValid
  }

  const handleSubmit = e => {
    e.preventDefault()
    const fieldCheck = ValidationLogin(data)

    console.log(fieldCheck)

    if (isValidation(fieldCheck)) {
      setError('')

      const data_json = {
        username: data.username,
        password: data.password
      }

      axios.post(PATH_URL+'login/', data_json)
        .then(res => {
          if (res.status === 200) {
    
            navigate('/home')

            const data = {...data_json,id:res.data.user_info.id}

            localStorage.setItem('user', JSON.stringify(data))

            console.log("save")
            console.log(data)
            
          } else {
            console.log('!200')
            setError({ login: res.data.message })
          }
          console.log(res)
        })
        .catch(err => {
          console.log("err",err)
        })
    }
  }

  return (
    <div className={style.page}>
      <div className={style.container}>
        <div className={style.image}>
          <img
            src='https://res.cloudinary.com/de59jbjlb/image/upload/v1696598738/login_beug6j.png'
            alt=''
          />
        </div>

        <form className={style.form} onSubmit={handleSubmit} noValidate>
          <h2 className={style.form__header}>Login Details</h2>
          <input
            type='username'
            name='username'
            className={style.form__username}
            placeholder='Username, email & phone number'
            onChange={handleChange}
            required
          />
          <p className={style.form__error}>{error.email}</p>
          <input
            type='password'
            name='password'
            className={style.form__password}
            placeholder='Password'
            onChange={handleChange}
            required
          />
          <p className={style.form__error}>{error.password}</p>
          <p className={style.form__link}>
            Forgot Password ?{' '}
            <span>
              or <Link to='/signup'>Sign Up</Link>
            </span>
          </p>
          <p className={style.form__error}>{error.login}</p>
          <button type='submit' name='submit' className={style.form__button}>
            Login
          </button>
          <button type='button' className={style.button_add} onClick={() => navigate('/add-data')}>
            Add Data without Login
          </button>
        </form>
      </div>
      <div className={style.decoration}>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
            className={style.shape_fill}
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default Login
