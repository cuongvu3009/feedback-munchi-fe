import "./feedback.css";

import AwesomeSVG from "../../utils/emoji-svg/AwesomeSVG";
import BadSVG from "../../utils/emoji-svg/BadSVG";
import Button from "../../components/shared/Button";
import GoodSVG from "../../utils/emoji-svg/GoodSVG";
import Logo from "../../components/shared/Logo";
import OkeySVG from "../../utils/emoji-svg/OkeySVG";
import RatingService from "../../components/feedback/RatingService";
import TerribleSVG from "../../utils/emoji-svg/TerribleSVG";
import Title from "../../components/shared/Title";
import TradeMark from "../../components/shared/TradeMark";
import { useNavigate } from "react-router-dom";

const FeedbackService: React.FC = () => {
  const navigate = useNavigate();

  function handleClick(e: any): void {
    e.preventDefault();
    navigate("/order-feedback");
  }

  return (
    <div className="feedback mobile">
      <Title />

      <div className="feedback-wrapper">
        <Logo />
        <div className="feedback-container">
          <div className="feedback-description">
            <h3>How was your experience?</h3>
            <p>Your feedback helps us improve our service.</p>
          </div>
        </div>
      </div>
      <RatingService />

      <div className="navigation">
        <Button onClick={handleClick} version="full" btnText="Next" />
        <TradeMark />
      </div>
    </div>
  );
};

export default FeedbackService;
