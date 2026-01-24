"use client"
import { signOut, useSession } from "next-auth/react"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from 'react';

const AuthButtons = () => {
    const router = useRouter()
    const session= useSession()
    return (
        <div>
            {
                session.status === "authenticated" ? (<>
                <button className="btn btn-primary" 
                onClick={()=>{
                    signOut({redirect: false})
                    router.push("/")
                    }}>Log Out</button>
                </>) : (<>
                <Link href={"/login"}>
                <button className="btn bg-black text-white">Login</button>
                </Link>
                </>)
            }
        </div>
    );
};

export default AuthButtons;