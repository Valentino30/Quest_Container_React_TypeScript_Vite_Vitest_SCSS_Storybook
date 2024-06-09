import "./index.scss";
import { getButtonNameByQuestType } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

type QuestCardButtonProps = {
  questType: string;
};

export default function QuestCardButton({ questType }: QuestCardButtonProps) {
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
