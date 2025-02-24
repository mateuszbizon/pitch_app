import { auth, signIn, signOut } from '@/auth'
import Link from 'next/link'
import React from 'react'

async function Navbar() {
    const session = await auth()

  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
        <nav className='flex justify-between items-center'>
            <Link href={"/"}>
                <span className='text-black text-xl'><span className='text-red-500'>YC</span>Directory</span>
            </Link>
            <div className='flex items-center gap-5 text-black'>
                {session && session.user ? (
                    <>
                        <Link href={"/startup/create"}>
                            Create
                        </Link>
                        <form action={async () => {
                            "use server"

                            await signOut({ redirectTo: "/" })
                        }}>
                            <button type='submit'>
                                Logout
                            </button>
                        </form>
                        <Link href={`/user/${session.user.id}`}>
                            {session.user.name}
                        </Link>
                    </>
                ) : (
                    <form action={async () => {
                        "use server"

                        await signIn("github")
                    }}>
                        <button type='submit'>
                            Login
                        </button>
                    </form>
                )}
            </div>
        </nav>
    </header>
  )
}

export default Navbar