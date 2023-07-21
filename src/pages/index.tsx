import { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <Link href={'/'}>home</Link>
      <Link href={'/work'}>work</Link>
      <Link href={'/demo'}>demo</Link>
    </div>
  );
};

export default Home;
