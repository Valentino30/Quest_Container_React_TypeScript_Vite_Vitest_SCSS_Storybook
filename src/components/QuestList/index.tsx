import "./index.scss";
import QuestCard from "../QuestCard";
import { Quest } from "../../types/quest";

interface QuestListProps {
  quests: Quest[];
}

export default function QuestList({ quests }: QuestListProps) {
  return (
    <div className="quests">
      <h1 className="quests__title">Quests</h1>
      <div className="quests__list">
        {quests.map((quest) => (
          <QuestCard quest={quest} />
        ))}
      </div>
    </div>
  );
}
