import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMugHot,
  faMessage,
  faBookmark,
  faDownload,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { Quest } from "../types/quest";
import QuestCardIcon from "../components/QuestCardIcon";
import QuestCardLink from "../components/QuestCardLink";
import QuestCardImage from "../components/QuestCardImage";
import QuestCardButton from "../components/QuestCardButton";
import logoPlaceholder from "../assets/placeholders/logo.png";
import headshotPlaceholder from "../assets/placeholders/headshot.png";

export const getTitleByQuestType = (questType: string): string => {
  // Replace underscores or hyphens with spaces
  let result = questType.replace(/[_-]/g, " ");
  // Capitalize the first letter of each word
  result = result.replace(/\b\w/g, (char) => char.toUpperCase());
  return result;
};

export const getButtonNameByQuestType = (questType: string): string => {
  // Split the string at underscores or hyphens
  const words = questType.split(/[_-]/);
  // Capitalize the first word
  return words[0].charAt(0).toUpperCase() + words[0].slice(1);
};

export const getImageByQuest = (quest: Quest): ReactNode => {
  switch (quest.type) {
    case "install_extension":
      return <QuestCardIcon icon={<FontAwesomeIcon size="xl" icon={faDownload} />} />;
    case "submit_application":
      return <QuestCardIcon icon={<FontAwesomeIcon size="xl" icon={faPaperPlane} />} />;
    case "resolve-comment":
      return <QuestCardIcon icon={<FontAwesomeIcon size="xl" icon={faMessage} />} />;
    case "save_first_company":
      return <QuestCardIcon icon={<FontAwesomeIcon size="xl" icon={faBookmark} />} />;
    case "add_contact":
      return (
        <QuestCardImage
          image={quest.company?.logo_url}
          placeholder={logoPlaceholder}
        />
      );
    case "send_first_email":
    case "send_follow_up_email":
    case "send_linkedin_message":
    case "send_linkedin_connection":
      return (
        <QuestCardImage
          image={quest.contact?.profile_image}
          placeholder={headshotPlaceholder}
        />
      );
    case "schedule_coffee_chat":
      return <QuestCardIcon icon={<FontAwesomeIcon size="xl" icon={faMugHot} />} />;
    default:
      return <QuestCardImage placeholder={logoPlaceholder} />;
  }
};

export const getButtonByQuestType = (questType: string): ReactNode => {
  switch (questType) {
    case "install_extension":
      return <QuestCardButton questType={questType} />;
    default:
      return <QuestCardLink />;
  }
};

export const getRandomPastelColor = (): string => {
  const randomValue = () => Math.floor(Math.random() * 127 + 127);
  const r = randomValue();
  const g = randomValue();
  const b = randomValue();
  return `rgb(${r}, ${g}, ${b})`;
};
