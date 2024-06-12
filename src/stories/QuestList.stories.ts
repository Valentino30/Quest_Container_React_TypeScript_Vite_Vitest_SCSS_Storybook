import type { Meta, StoryObj } from "@storybook/react";

import QuestList from "../components/QuestList";
import { SAMPLE_QUEST_INSTALL, SAMPLE_QUEST_SUBMIT } from "../constants/quest";

const meta = {
  title: "QuestList",
  component: QuestList,
} satisfies Meta<typeof QuestList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const QuestWithButton: Story = {
  args: {
    quests: new Array(3).fill(SAMPLE_QUEST_INSTALL),
  },
};

export const QuestWithLink: Story = {
  args: {
    quests: new Array(3).fill(SAMPLE_QUEST_SUBMIT),
  },
};
