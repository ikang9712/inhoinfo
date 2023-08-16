import { useRouter } from 'next/router';

const WorkFooter = ({
  src,
  footerName,
}: {
  src: string;
  footerName: string;
}) => {
  const router = useRouter();
  return (
    <div className="next-project">
      <p> next project</p>
      <a
        onClick={() => {
          router.push(src);
        }}
      >
        <h1> {footerName}</h1>
      </a>
    </div>
  );
};

export default WorkFooter;
