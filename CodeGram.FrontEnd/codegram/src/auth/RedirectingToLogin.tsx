import { useMsal } from '@azure/msal-react';
import React, { useEffect } from 'react';
import { InteractionStatus } from '@azure/msal-browser';

function RedirectingToLogin() {
  const { instance, inProgress } = useMsal();

  useEffect(() => {
    if (inProgress === InteractionStatus.None) {
      instance.loginRedirect({ prompt: 'login', scopes: [] });
    }
  }, [instance, inProgress]);

  return <p>Redirect to loading...</p>;
}

export default RedirectingToLogin;
