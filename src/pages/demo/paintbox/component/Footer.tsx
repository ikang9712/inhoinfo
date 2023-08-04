const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-col">
          <div className="title"> support</div>
          <ul>
            <li className="content">
              <a> f.a.q.</a>
            </li>
            <li className="content">
              <a> privacy policy</a>
            </li>
            <li className="content">
              <a> terms and conditions</a>
            </li>
            <li className="content">
              <a> accessibility</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="title"> follow us</div>
          <ul>
            <li className="content">
              <a> instagram</a>
            </li>
            <li className="content">
              <a> pinterest</a>
            </li>
            <li className="content">
              <a> facebook</a>
            </li>
            <li className="content">
              <a> newsletter</a>
            </li>
          </ul>
        </div>
        <div className="footer-col" style={{ borderRight: 'none' }}>
          <div className="title"> paintbox</div>
          <ul>
            <li className="content">
              <a> our studio</a>
            </li>
            <li className="content">
              <a> gift cards</a>
            </li>
            <li className="content">
              <a> careers</a>
            </li>
            <li className="content">
              <a> press</a>
            </li>
            <li className="content">
              <a> contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
