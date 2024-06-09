import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import Quests from ".";
import { Quest } from "../../types/quest";
import QuestCardImage from "../QuestCardImage";
import logoPlaceholder from "../../assets/placeholders/logo.png";

vi.mock("../../utils", () => ({
  getTitleByQuestType: vi.fn(() => "Quest 1"),
  getButtonByQuestType: vi.fn(() => <button>Button 1</button>),
  getImageByQuest: vi.fn(() => (
    <QuestCardImage placeholder={logoPlaceholder} />
  )),
}));

const mockQuest: Quest[] = [
  {
    id: "1",
    title: "Quest 1",
    description: "Description 1",
    user_id: "1",
    type: "Type 1",
    status: "todo",
    experience_points: 0,
    due_date: "2024-05-22T06:35:55.734652Z",
    company: {
      id: "1",
      name: "Company 1",
      logo_url: "https://via.placeholder.com/150",
      linkedin_url: "https://www.linkedin.com",
    },
    contact: {},
    job: {
      id: "1",
      title: "Job 1",
    },
    created_at: "2024-05-22T06:35:55.736528Z",
  },
];

describe("Quests component", () => {
  it("renders correctly with a given quest", () => {
    render(<Quests quests={mockQuest} />);
    expect(screen.getByRole("heading", { name: "Quests" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Quest 1" })
    ).toBeInTheDocument();
    expect(screen.getByText("Description 1")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Button 1" })
    ).toBeInTheDocument();
  });
});
