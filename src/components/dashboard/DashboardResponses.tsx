import Button from "../shared/Button";
import React from "react";
import { data } from "./data";
import moment from "moment";
import styles from "./dashboardResponses.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DashboardResponses = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [feedbackLimit, setFeedbackLimit] = useState<number>(7);
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate("/dashboard/responses");
  };

  const getEmojiLabel = (emoji: string) => {
    switch (emoji) {
      case "terrible":
        return "Terrible 😠";
      case "bad":
        return "Bad 🙁";
      case "okey":
        return "Okey 🙂";
      case "good":
        return "Good 😄";
      case "awesome":
        return "Awesome 😍";
      default:
        return emoji;
    }
  };

  return (
    <div className={`${styles["dashboard-card"]}`}>
      <h3>Responses</h3>

      {data.slice(0, feedbackLimit).map((item) => {
        return (
          <div className={`${styles["flex-between"]}`} key={item.emoji_service}>
            <p>{getEmojiLabel(item.emoji_service)}</p>
            <p>{moment(item.createdAt).fromNow()}</p>
          </div>
        );
      })}

      {feedbackLimit >= 7 && (
        <Button
          btnText="See All"
          version="secondary"
          onClick={handleBtnClick}
        />
      )}
    </div>
  );
};

export default DashboardResponses;
