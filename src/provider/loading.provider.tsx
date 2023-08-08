import { LoadingContextProps } from '@src/types';
import { useState } from 'react';
import LoadingContext from '../context/loading.context';

const LoadingProvider = ({ children }: any) => {
  const [loading, setLoading] = useState(false);
  const setLoadingState = (loaded: boolean) => {
    setLoading(loaded);
  };

  const loadingState: LoadingContextProps = {
    loading,
    setLoading: setLoadingState,
  };

  return (
    <LoadingContext.Provider value={loadingState}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
