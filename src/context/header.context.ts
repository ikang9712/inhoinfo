import { createContext } from 'react';

const HeaderContext = createContext({
  activated: false,
  activateBodyLock: false,
  setActivated: (activated: boolean) => {},
  setActivateBodyLock: (bodyLock: boolean) => {},
});

export default HeaderContext;
