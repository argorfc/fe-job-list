import React from 'react'
import { Login } from '../features/login/Login'

export function Header() {
  return (
    <header className="flex flex-row justify-between px-4 py-3 bg-blue-500" id="section-header">
      <div className="flex flex-row gap-1 justify-start cursor-pointer" id="logo-jobs">
        <h2 className="font-extrabold text-white text-2xl">GitHub</h2>
        <span className="font-extralight text-white text-2xl">Jobs</span>
      </div>
      <Login />
    </header>
  )
}
