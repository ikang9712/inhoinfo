export interface HeaderProps {
  isActivated: boolean;
  handleActivation: (_isActivated: boolean) => void;
}

export interface ProductTileProps {
  imageSource: string;
  name: string;
  price: string;
}

export interface ShopSectionTwoProps {
  imageSource: string;
  category: string;
  title: string;
  buttonName: string;
}

export interface ShopSectionThreeProps {
  imageSource: string;
  time: string;
  title: string;
  buttonName: string;
  secondImage?: boolean;
}
