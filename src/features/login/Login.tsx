import React, { useEffect, useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { DropdownProfile } from '../../app/components/base';
import { TProfile } from '../../services/types/profile';

export function Login() {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || '';
  const [profile, setProfile] = useState<TProfile | null>(null)

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      });
    };
    gapi.load('client:auth2', initClient);
  })

  const onSuccess = (res: any) => {
    const {email, name, givenName, imageUrl} = res?.profileObj;
    window.localStorage.setItem('__me', JSON.stringify({email, name, givenName, imageUrl}));
    window.localStorage.setItem('__isLoggedIn', 'true');
    setProfile({email, name, givenName, imageUrl, clientId})
  };

  const onFailure = (err: any) => console.log(err);

  return (
    <div>
      {profile ? (
        <DropdownProfile {...profile} />
      ) : (
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      )}
    </div>
  )
}
