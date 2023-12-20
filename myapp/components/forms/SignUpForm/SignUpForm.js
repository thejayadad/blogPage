'use client'
import {signIn} from "next-auth/react";
import {redirect, useRouter} from "next/navigation";
import {useEffect} from "react";

import React from 'react'

const SignUpForm = ({user}) => {
    const router = useRouter();
    useEffect(() => {
        if (
          'localStorage' in window
          && window.localStorage.getItem('desiredUsername')
        ) {
          const username = window.localStorage.getItem('desiredUsername');
          window.localStorage.removeItem('desiredUsername');
          redirect('/account?desiredUsername=' + username);
        }
      }, []);
      async function handleSubmit(ev) {
        ev.preventDefault();
        const form = ev.target;
        const input = form.querySelector('input');
        const username = input.value;
        if (username.length > 0) {
          if (user) {
            router.push('/account?desiredUsername='+username);
          } else {
            window.localStorage.setItem('desiredUsername', username);
            await signIn('google');
          }
        }
      }

  return (
    <form
    className="inline-flex items-center shadow-lg bg-white shadow-gray-500/20"
    onSubmit={handleSubmit}

    >
          <span className="bg-white py-4 pl-4">
            linklist.to/
          </span>
    <input
        type="text"
        className=""
        placeholder="username"/>
      <button
        type="submit"
        className="bg-primary text-white py-4 px-6 whitespace-nowrap">
        Join for Free
      </button>

    </form>
  )
}

export default SignUpForm