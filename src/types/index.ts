export interface HeaderContextProps {
  activated: boolean;
  activateBodyLock: boolean;
  setActivated: (_activated: boolean) => void;
  setActivateBodyLock: (_bodylock: boolean) => void;
}

interface SliderProps {
  src: string;
}

export interface ImageSliderProps {
  slides: SliderProps[];
}
