import { Quest } from "../../types/quest";
import mockQuestsData from "../../data/quests.json"

export const fetchMockQuests = (): Promise<Quest[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockQuestsData.quests);
    }, 1000);
  });
};
