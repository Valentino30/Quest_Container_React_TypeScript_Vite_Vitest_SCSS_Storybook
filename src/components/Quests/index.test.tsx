import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import Quests from ".";
import { Quest } from "../../types/quest";
import { SAMPLE_QUEST_DESCRIPTION } from "../../constants/quest";

vi.mock("../../utils", () => ({
  getButtonByQuestType: vi.fn((type) => `${type}`),
  getTitleByQuestType: vi.fn((type) => `${type}`),
}));

const mockQuest: Quest[] = [
  {
    type: "type1",
    title: "Quest 1",
    description: "Description 1",
    company: {
      logo_url: "https://via.placeholder.com/150",
    },
  },
];

const mockEmptyQuest: Quest[] = [
  {
    type: "type2",
    title: "",
    description: "",
    company: null,
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
    expect(screen.getByRole("button", { name: "type1" })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "type1" })).toHaveAttribute(
      "src",
      "https://via.placeholder.com/150"
    );
  });

  it("renders correctly with an empty quest", () => {
    render(<Quests quests={mockEmptyQuest} />);
    expect(screen.getByRole("heading", { name: "Quests" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "type2" })).toBeInTheDocument();
    expect(screen.getByText(SAMPLE_QUEST_DESCRIPTION)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "type2" })).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "type2" })).toBeInTheDocument();
  });
});
