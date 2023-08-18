import { createContext } from 'react';

const HeaderContext = createContext({
  activated: false,
  activateBodyLock: false,
  setActivated: (_activated: boolean) => {},
  setActivateBodyLock: (_bodyLock: boolean) => {},
});

export default HeaderContext;
