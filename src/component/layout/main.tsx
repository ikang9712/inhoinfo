import { useRouter } from 'next/router';
import Header from '../home/Header';
const Main = ({ children }: { children: any }) => {
  const router = useRouter();
  return (
    <div className={router.pathname == '/' ? 'layout' : 'layout work'}>
      <Header />
      {children}
      <style jsx global>
        {`
          body {
            background: #f2f2f2;
          }
        `}
      </style>
    </div>
  );
};
export default Main;
