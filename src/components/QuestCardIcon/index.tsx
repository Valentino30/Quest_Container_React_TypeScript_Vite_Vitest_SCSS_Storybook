import "./index.scss";
import { ReactNode } from "react";
import { getRandomPastelColor } from "../../utils";

type QuestCardIconProps = {
  icon: ReactNode;
};

export default function QuestCardIcon({ icon }: QuestCardIconProps) {
  return (
    <div
      className="quest__icon"
      style={{ backgroundColor: getRandomPastelColor() }}
    >
      {icon}
    </div>
  );
}
