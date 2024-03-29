import HeaderContext from '@src/context/header.context';
import { HeaderContextProps } from '@src/types';
import { useState } from 'react';

const HeaderProvider = ({ children }: any) => {
  const [activated, setActivated] = useState(false);
  const [bodylock, setBodylock] = useState(false);

  const setActivation = (activated: boolean) => {
    setActivated(activated);
  };

  const headerState: HeaderContextProps = {
    activated: activated,
    activateBodyLock: bodylock,
    setActivateBodyLock: setBodylock,
    setActivated: setActivation,
  };

  return (
    <HeaderContext.Provider value={headerState}>
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderProvider;
