import { useRouter } from 'next/router';

const Custom404 = () => {
  const router = useRouter();
  return (
    <div className="page-not-found-container">
      <a
        onClick={() => {
          router.push('/');
        }}
      >
        <h1> 404</h1>
      </a>
    </div>
  );
};

export default Custom404;
