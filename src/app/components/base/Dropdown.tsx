import React, { useState } from 'react'
import { GoogleLogout } from 'react-google-login';
import { TProfile } from '../../../services/types/profile';

export default function DropdownProfile({
  imageUrl,
  email,
  name,
  givenName,
  clientId
}: TProfile) {
  const [isShow, setIsShow] = useState<boolean>(false)
  const logOut = () => {
    localStorage.clear();
    window.location.reload()
  };
  return (
    <div className="flex relative" id="profile-logedin">
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        id="dropdown-profile"
        onClick={() => setIsShow(!isShow)}
      >Hi, {givenName} <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
      {isShow && (
        <div
          className="z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
          id="dropdownInformation"
          style={{position: 'absolute', inset: '0px auto auto 0px', margin: '0px', transform: 'translate(-56px, 44px)'}}
        >
          <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
            <div>{name}</div>
            <div className="font-medium truncate">{email}</div>
          </div>
          <div className="py-1">
            <div className="flex justify-center py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
              <GoogleLogout clientId={clientId} buttonText="Log out" icon={false} style={{boxShadow: 'none'}} onLogoutSuccess={logOut} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
