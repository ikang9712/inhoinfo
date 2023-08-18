import { createContext } from 'react';

const LoadingContext = createContext({
  loading: false,
  setLoading: (_loaded: boolean) => {},
});

export default LoadingContext;
