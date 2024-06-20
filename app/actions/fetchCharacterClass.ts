"use server";
import fs from "fs";
import path from "path";

type CharacterClass = {
  name: string;
  lore: string;
  characters: { name: string; description: string }[];
};

//This actions loads the corresponding subclass.json file
const fetchCharacterClass = (componentName: string): CharacterClass | null => {
  const fileName = `${componentName.toLowerCase()}.json`;
  const filePath = path.join(process.cwd(), fileName);

  const fileContents = fs.readFileSync(filePath, "utf-8");
  const characterClass = JSON.parse(fileContents) as CharacterClass;
  return characterClass;
};

export default fetchCharacterClass;
