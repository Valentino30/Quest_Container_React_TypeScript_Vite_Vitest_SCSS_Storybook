import "./index.scss";
import { Quest } from "../../types/quest";
import { SAMPLE_QUEST_DESCRIPTION } from "../../constants/quest";
import { getButtonByQuestType, getImageByQuest, getTitleByQuestType } from "../../utils";

interface QuestCardProps {
  quest: Quest;
}

export default function QuestCard({ quest }: QuestCardProps) {
  return (
    <div key={quest.id} className="quest">
      {getImageByQuest(quest)}
      <div className="quest__details">
        <h3 className="quest__details__title">
          {quest.title || getTitleByQuestType(quest.type)}
        </h3>
        <p className="quest__details__description">
          {quest.description || SAMPLE_QUEST_DESCRIPTION}
        </p>
      </div>
      {getButtonByQuestType(quest.type)}
    </div>
  );
}
