import React, { ReactNode } from 'react';
import { useAuth } from './AccountProvider';
import RedirectingToLogin from './RedirectingToLogin';

type AuthenticatedContextProps = {
  children: ReactNode;
};

function AuthenticatedContext({ children }: AuthenticatedContextProps) {
  const user = useAuth();

  return user ? children : <RedirectingToLogin />;
}

export default AuthenticatedContext;
