import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";

import "./index.scss";
import { Quest } from "../../types/quest";
import { SAMPLE_QUEST_DESCRIPTION } from "../../constants";
import { getButtonByQuestType, getTitleByQuestType } from "../../utils";
import companyLogoPlaceholder from "../../assets/placeholders/company_logo.png";

interface QuestsProps {
  quests: Quest[];
}

const Quests: React.FC<QuestsProps> = ({ quests }) => {
  return (
    <div className="quests">
      <h1 className="quests__title">Quests</h1>
      <div className="quests__list">
        {quests.map((quest, index) => (
          <div key={index} className="quest">
            <div className="quest__icon">
              <img
                alt={quest.type}
                src={quest.company?.logo_url || companyLogoPlaceholder}
                onError={(e) => (e.currentTarget.src = companyLogoPlaceholder)}
              />
            </div>
            <div className="quest__details">
              <h3 className="quest__title">
                {quest.title || getTitleByQuestType(quest.type)}
              </h3>
              <p className="quest__description">
                {quest.description || SAMPLE_QUEST_DESCRIPTION}
              </p>
            </div>
            <button className="quest__button">
              {getButtonByQuestType(quest.type)}
              <FontAwesomeIcon
                className="quest__button__icon"
                icon={faArrowUpRightFromSquare}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quests;
