import { createContext } from 'react';

const LoadingContext = createContext({
  loading: false,
  setLoading: (loaded: boolean) => {},
});

export default LoadingContext;
