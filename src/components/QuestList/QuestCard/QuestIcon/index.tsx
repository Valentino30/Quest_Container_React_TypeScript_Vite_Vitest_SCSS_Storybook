import "./index.scss";
import { ReactNode } from "react";
import { getRandomPastelColor } from "../../../../utils/quest";

type QuestIconProps = {
  icon: ReactNode;
};

export default function QuestIcon({ icon }: QuestIconProps) {
  return (
    <div
      className="quest__icon"
      style={{ backgroundColor: getRandomPastelColor() }}
    >
      {icon}
    </div>
  );
}
