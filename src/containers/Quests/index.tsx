import { useEffect, useState } from "react";

import { Quest } from "../../types/quest";
import Quests from "../../components/Quests";
import { fetchMockQuests } from "../../api/quest";

const QuestsContainer: React.FC = () => {
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

  return <Quests quests={quests} />;
};

export default QuestsContainer;
