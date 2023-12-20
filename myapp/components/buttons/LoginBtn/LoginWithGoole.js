'use client';

import { signIn, } from 'next-auth/react';


const LoginWithGoole = () => {
  return (
    <button
    onClick={signIn()}
    className="bg-white shadow text-center w-full py-4 flex gap-3 items-center justify-center">
    <span>Sign In with Google</span>
  </button>
  )
}

export default LoginWithGoole