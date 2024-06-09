import { useEffect, useState } from "react";

import { Quest } from "../../types/quest";
import { fetchMockQuests } from "../../api/quest";
import QuestList from "../../components/QuestList";

export default function QuestsContainer() {
  const [quests, setQuests] = useState<Quest[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuests = async () => {
      try {
        const response = await fetchMockQuests();
        setQuests(response);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchQuests();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <QuestList quests={quests} />;
}
