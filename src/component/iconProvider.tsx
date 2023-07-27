import { IconContext } from 'react-icons';
import { BsArrowRight } from 'react-icons/bs';

const getIconFromName = (iconName: string) => {
  switch (iconName) {
    case 'arrow-right':
      return <BsArrowRight />;
  }
};

export const IconContextProvider = ({
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
