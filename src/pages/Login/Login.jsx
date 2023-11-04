import React from 'react'
import { account, ID } from '../../appwrite/appwrite';

function Login() {

  const funcDemo = async(e) => {
    e.preventDefault();

    const promise = account.create();
  }

  return (
    <div>Login page</div>
  )
}

export default Login