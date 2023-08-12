const WorkFooter = ({
  src,
  footerName,
}: {
  src: string;
  footerName: string;
}) => {
  return (
    <div className="next-project">
      <p> next project</p>
      <a href={src}>
        <h1> {footerName}</h1>
      </a>
    </div>
  );
};

export default WorkFooter;
