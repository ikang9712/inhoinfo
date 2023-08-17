export interface LoadingContextProps {
  loading: boolean;
  setLoading: (loaded: boolean) => void;
}

export interface HeaderContextProps {
  activated: boolean;
  activateBodyLock: boolean;
  setActivated: (activated: boolean) => void;
  setActivateBodyLock: (bodylock: boolean) => void;
}

interface SliderProps {
  src: string;
}

export interface ImageSliderProps {
  slides: SliderProps[];
}
