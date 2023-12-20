'use client'
import React from 'react';
import Link from 'next/link';
import { FiUser } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { signIn, signOut, useSession } from 'next-auth/react';


const AuthLinks =  () => {
    const { data: session } = useSession();

  return (
    <div className="flex items-center">
        {
            session ? (
                <div className='flex items-center'>
                    <Link href={'/account'}>
                        {session?.user?.email}
                    </Link>
                    <button
                    onClick={() => signOut()}
                    >
                        LogOut
                    </button>
                </div>
            ) : (
                <div className='flex items-center'>
                    <Link href={'/login'}>Create Account</Link>
                </div>
            )
        }
    </div>
  )
}

export default AuthLinks