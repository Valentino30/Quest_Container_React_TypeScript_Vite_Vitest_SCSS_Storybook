export const getTitleByQuestType = (questType: string): string => {
  // Replace underscores or hyphens with spaces
  let result = questType.replace(/[_-]/g, " ");
  // Capitalize the first letter of each word
  result = result.replace(/\b\w/g, (char) => char.toUpperCase());
  return result;
};

export const getButtonByQuestType = (questType: string): string => {
  // Split the string at underscores or hyphens
  const words = questType.split(/[_-]/);
  // Capitalize the first word
  return words[0].charAt(0).toUpperCase() + words[0].slice(1);
};
