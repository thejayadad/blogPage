'use client'
import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useAppContext } from '@/lib/context';

const AccountPage = (req) => {
    const { user, setUser } = useAppContext();
    const { data: session, status } = useSession();
    console.log(req)
    useEffect(() => {
        if (status === 'authenticated' && session?.user) {
          setUser(session.user);
        }
      }, [status, session, setUser]);

    if(status !== 'authenticated'){
        return <p className='text-center'>UnAuthenicated</p>
    }

      if(status === 'loading'){
        return <h2 className='text-center'>Loading...</h2>
      }
  return (
    <div>AccountPage

{user && (
        <div>
          <p>Welcome, {user.name}!</p>
          {/* Display other user information as needed */}
        </div>
      )}
    </div>
  )
}

export default AccountPage