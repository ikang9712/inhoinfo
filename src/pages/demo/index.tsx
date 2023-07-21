import { NextPage } from 'next';
import Link from 'next/link';

const Demo: NextPage = () => {
  return (
    <div>
      <h1> this page is demo page.</h1>
      <Link href={'/demo/bestHorror'}>bestHorror</Link>
      <Link href={'/demo/paintBox'}>paintBox</Link>
      <Link href={'/demo/10x19'}>10x19</Link>
    </div>
  );
};

export default Demo;
