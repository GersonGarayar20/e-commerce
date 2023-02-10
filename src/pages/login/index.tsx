import React, { useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import Navbar from '../../components/global/navbar'
import Form from '../../components/login-signup/Form'
import { useFetchValidateUser } from '../../services/query'


const Login = () => {

    const {data,mutate,isLoading,isSuccess}=useFetchValidateUser()

    if(isSuccess && data?.status === 'ok'){
       window.localStorage.setItem('token',data.token);
       /* return <Navigate to="/" replace={true}/> */
    }

  return (
    <div> 

      <Navbar title={'Registrarse'}/>
      <Form title={'Iniciar Sesion'} useMutate={mutate} loading={isLoading}/>

    </div>
  )
}

export default Login;