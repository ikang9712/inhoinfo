import { NextPage } from 'next';
import Link from 'next/link';

const Demo: NextPage = () => {
  return (
    <div>
      <h1> this page is demo page.</h1>
      <Link href={'/demo/besthorror'}>bestHorror</Link>
      <Link href={'/demo/paintbox'}>paintBox</Link>
      <Link href={'/demo/10x19'}>10x19</Link>
    </div>
  );
};

export default Demo;
