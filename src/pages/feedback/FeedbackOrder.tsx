import "./feedback.css";

import Button from "../../components/shared/Button";
import Logo from "../../components/shared/Logo";
import RatingOrder from "../../components/feedback/RatingOrder";
import Title from "../../components/shared/Title";
import TradeMark from "../../components/shared/TradeMark";
import axios from "axios";
import { constantAPI } from "../../utils/constantAPI";
import { useNavigate } from "react-router-dom";

const FeedbackOrder: React.FC = () => {
  const navigate = useNavigate();

  async function handleClick(e: any): Promise<void> {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${constantAPI}/feedback`,
        {
          businessSlug: "sushiDaily",
          emoji_service: localStorage.getItem("emojiService"),
          comment_service: localStorage.getItem("commentService"),
          tags_service: localStorage.getItem("serviceTags"),
          emoji_order: localStorage.getItem("emojiOrder"),
          comment_order: localStorage.getItem("commentOrder"),
          tags_order: localStorage.getItem("orderTags"),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);
    } catch (error) {
      console.error("There was an error sending the data", error);
    }

    const keysToRemove = [
      "emojiService",
      "commentService",
      "serviceTags",
      "emojiOrder",
      "commentOrder",
      "orderTags",
    ];
    keysToRemove.forEach((key) => localStorage.removeItem(key));

    navigate("/feedbacksent");
  }

  return (
    <div className="feedback mobile">
      <Title />

      <div className="feedback-wrapper">
        <Logo />
        <div className="feedback-container">
          <div className="feedback-description">
            <h3>How was your order?</h3>
            <p>Your feedback helps us improve our products.</p>
          </div>
        </div>
      </div>
      <RatingOrder />

      <div className="navigation">
        <Button
          onClick={handleClick}
          version="full"
          btnText="Submit feedback"
        />
        <TradeMark />
      </div>
    </div>
  );
};

export default FeedbackOrder;
