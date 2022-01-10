import React, { createContext, ReactNode, useContext, useMemo } from 'react';
import { useMsal } from '@azure/msal-react';
import { AccountInfo } from '@azure/msal-browser';

const AccountContext = createContext<AccountInfo | null>(null);
export const useAuth = () => useContext(AccountContext);

type AccountProviderProps = {
  children: ReactNode;
};

function AccountProvider({ children }: AccountProviderProps) {
  const { accounts, instance } = useMsal();

  if (accounts[0]) {
    instance.setActiveAccount(accounts[0]);
  }

  return (
    <AccountContext.Provider value={useMemo(() => accounts[0] || null, [accounts])}>
      {children}
    </AccountContext.Provider>
  );
}

export default AccountProvider;
