import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import {
  SAMPLE_QUEST_INSTALL,
  SAMPLE_QUEST_DESCRIPTION,
} from "../../constants/quest";
import Quests from ".";

describe("Quests component", () => {
  it("renders correctly with a given quest", () => {
    render(<Quests quests={[SAMPLE_QUEST_INSTALL]} />);
    expect(screen.getByRole("heading", { name: "Quests" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Install Extension" })
    ).toBeInTheDocument();
    expect(screen.getByText(SAMPLE_QUEST_DESCRIPTION)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Install" })).toBeInTheDocument();
  });
});
