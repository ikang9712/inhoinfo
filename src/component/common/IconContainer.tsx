import { IconContext } from 'react-icons';
import { AiOutlineGithub } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa6';
import { GoArrowLeft } from 'react-icons/go';
import { HiOutlineX } from 'react-icons/hi';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
const getIconFromName = (iconName: string) => {
  switch (iconName) {
    case 'arrow-right':
      return <BsArrowRight />;
    case 'hamburger':
      return <RxHamburgerMenu />;
    case 'cross':
      return <RxCross1 />;
    case 'caret-left':
      return <FaCaretLeft />;
    case 'caret-right':
      return <FaCaretRight />;
    case 'hi-outline-x':
      return <HiOutlineX />;
    case 'hi-arrow-left':
      return <GoArrowLeft />;
    case 'github':
      return <AiOutlineGithub />;
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
