import { Quest } from "../../types/quest";
import companyLogoPlaceholder from "../../assets/placeholders/company_logo.png";

interface QuestsProps {
  quests: Quest[];
}

const Quests: React.FC<QuestsProps> = ({ quests }) => {
  return (
    <div>
      {quests.map((quest, index) => (
        <div key={index}>
          <div>
            <img
              alt={quest.type}
              src={quest.company?.logo_url || companyLogoPlaceholder}
            />
          </div>
          <div>
            <h3>{quest.type}</h3>
            <p>{quest.type}</p>
            {quest.company?.linkedin_url && quest.company.linkedin_url && (
              <a href={quest.company.linkedin_url}>{quest.type}</a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Quests;
