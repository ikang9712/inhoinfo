import Header from '../home/Header';
const Main = ({ children }: { children: any }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
export default Main;
