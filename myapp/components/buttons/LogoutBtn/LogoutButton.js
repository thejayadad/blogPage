'use client'
import React from 'react'
import {signOut} from "next-auth/react";


const LogoutButton = () => {
  return (
    <button
    onClick={() => signOut()}
    >
        LogOut
    </button>
  )
}

export default LogoutButton