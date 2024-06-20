"use server";
import fs from "fs";
import path from "path";

type CharacterClass = {
  name: string;
  lore: string;
  characters: { name: string; description: string }[];
};

//This action allows the user to edit the Lore description of each class.
const editCharacterClass = (
  componentName: string,
  newLore: string
): CharacterClass | null => {
  const fileName = `${componentName.toLowerCase()}.json`;
  const filePath = path.join(process.cwd(), fileName);

  const fileContents = fs.readFileSync(filePath, "utf-8");
  const characterClass = JSON.parse(fileContents) as CharacterClass;

  characterClass.lore = newLore;

  fs.writeFileSync(filePath, JSON.stringify(characterClass, null, 2));

  return characterClass;
};

export default editCharacterClass;
