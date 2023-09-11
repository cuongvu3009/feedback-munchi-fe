import React, { useEffect, useState } from "react";

import AwesomeSVG from "../../utils/emoji-svg/AwesomeSVG";
import BadSVG from "../../utils/emoji-svg/BadSVG";
import Emoji from "../shared/Emoji";
import FeedbackComment from "./FeedbackComment";
import GoodSVG from "../../utils/emoji-svg/GoodSVG";
import OkeySVG from "../../utils/emoji-svg/OkeySVG";
import TagsService from "./TagsService";
import TerribleSVG from "../../utils/emoji-svg/TerribleSVG";
import { ratingOptions } from "../../utils/ratingOptions";

const RatingService: React.FC = () => {
  const [emojiService, setEmojiService] = useState<string | null>(
    localStorage.getItem("emojiService") || null
  );

  useEffect(() => {
    if (emojiService !== null) {
      setEmojiService(emojiService);
      localStorage.setItem("emojiService", emojiService);
    }
  }, [emojiService]);

  return (
    <>
      <ul className="rating">
        {ratingOptions.map((option, index) => (
          <li key={`rating-${index + 1}`}>
            <input
              type="radio"
              id={option.value}
              name="rating"
              value={option.value}
              onChange={(e) => {
                setEmojiService(e.target.value);
                localStorage.setItem("emojiService", e.target.value);
              }}
              checked={emojiService === option.value}
              disabled={emojiService !== null}
            />
            <label
              htmlFor={option.value}
              className={
                emojiService === option.value
                  ? "selected-button"
                  : "unselected-button"
              }
            >
              <Emoji symbol={option.symbol} label={option.label} size={35} />
            </label>
          </li>
        ))}
      </ul>

      {emojiService !== null && (
        <>
          <TagsService emojiService={emojiService} />
          <FeedbackComment storageKey="commentService" />
        </>
      )}
    </>
  );
};

export default RatingService;
