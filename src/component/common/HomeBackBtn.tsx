import { useRouter } from 'next/router';
import { IconContainer } from './IconContainer';

const HomeBackButton = () => {
  const router = useRouter();
  return (
    <div
      className="work-back-button"
      onClick={() => {
        router.back();
      }}
    >
      <IconContainer className="" iconName="hi-arrow-left" />
    </div>
  );
};

export default HomeBackButton;
