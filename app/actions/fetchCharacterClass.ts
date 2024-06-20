"use server";
import fs from "fs";
import path from "path";

type CharacterClass = {
  name: string;
  lore: string;
  characters: { name: string; description: string }[];
};

const fetchCharacterClass = (): CharacterClass | null => {
  const filePath = path.join(process.cwd(), "bard.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const characterClass = JSON.parse(fileContents);
  console.log(characterClass);
  return characterClass as CharacterClass;
};

export default fetchCharacterClass;
