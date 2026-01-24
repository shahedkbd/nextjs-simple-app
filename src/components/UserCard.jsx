"use client"
import { useSession } from 'next-auth/react';
import React from 'react';

const UserCard = () => {
    const session = useSession()
    return (
        <div>
            <h2>user card</h2>
            <div>{JSON.stringify(session)}</div>
            
        </div>
    );
};

export default UserCard;