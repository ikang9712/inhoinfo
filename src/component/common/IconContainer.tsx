import { IconContext } from 'react-icons';
import { BsArrowRight } from 'react-icons/bs';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
const getIconFromName = (iconName: string) => {
  switch (iconName) {
    case 'arrow-right':
      return <BsArrowRight />;
    case 'hamburger':
      return <RxHamburgerMenu />;
    case 'cross':
      return <RxCross1 />;
  }
};

export const IconContainer = ({
  className,
  iconName,
}: {
  className: string;
  iconName: string;
}) => {
  const icon = getIconFromName(iconName);
  return (
    <IconContext.Provider value={{ className }}>{icon}</IconContext.Provider>
  );
};
