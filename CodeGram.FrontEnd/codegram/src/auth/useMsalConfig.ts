import { useMemo } from 'react';

export default function useMsalConfig() {
  const { domain, instance, clientId, signUpSignInPolicyId } = window._env_;

  const msalConfig = useMemo(() => {
    const authority = `${instance}/${domain}/${signUpSignInPolicyId}`;
    const knownAuthorities = [instance];
    const { origin } = window.location;

    return {
      auth: {
        clientId,
        authority,
        redirectUri: origin,
        postLogoutRedirectUri: origin,
        knownAuthorities,
      },
      cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: false,
      },
    };
  }, [clientId, domain, instance, signUpSignInPolicyId]);

  return msalConfig;
}
