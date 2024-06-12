import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { getButtonNameByQuestType } from "../../../../utils/quest";

type QuestButtonProps = {
  questType: string;
};

export default function QuestButton({ questType }: QuestButtonProps) {
  return (
    <button className="quest__button">
      {getButtonNameByQuestType(questType)}
      <FontAwesomeIcon
        className="quest__button__icon"
        icon={faArrowUpRightFromSquare}
      />
    </button>
  );
}
