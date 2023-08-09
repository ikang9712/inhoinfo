import { createContext } from 'react';

const HeaderContext = createContext({
  activated: false,

  setActivated: (activated: boolean) => {},
});

export default HeaderContext;
