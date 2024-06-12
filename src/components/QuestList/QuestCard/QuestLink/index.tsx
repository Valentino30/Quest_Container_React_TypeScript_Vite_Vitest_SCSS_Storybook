import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function QuestLink() {
  return (
    <a className="quest__link">
      <FontAwesomeIcon size="xl" icon={faArrowUpRightFromSquare} />
    </a>
  );
}
