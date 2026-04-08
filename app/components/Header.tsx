"use client";
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link'
import { redirect } from 'next/navigation';

const Header = () => {
  const { logout, isAuthenticated } = useAuth()
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <a className="btn btn-ghost text-xl">daisyUI</a>

      <div className="flex-1">

      </div>

      <ul className='menu menu-horizontal px-1 '>
        <li>
          <Link href="/skills">Skills</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        {isAuthenticated && <li>
          <button onClick={() => logout()} className="btn btn-primary">Logout</button>
        </li>}
        <li>
          <Link href="/register">Register</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header