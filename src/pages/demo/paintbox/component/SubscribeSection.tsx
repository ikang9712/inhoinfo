import { IconContainer } from '@src/component/common/IconContainer';

const SubscribeSection = () => {
  return (
    <div className="subscribe-section">
      <div className="title">join our conversation</div>
      <div className="content">
        Be the first to hear about new product launches and enjoy 20% off your
        first polish order.
      </div>
      <form>
        <div className="subscribe-input">
          <input name="EMAIL" placeholder="Enter your email"></input>
          <button type="submit">
            <span>
              <IconContainer className="arrow-icon" iconName="arrow-right" />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};
export default SubscribeSection;
