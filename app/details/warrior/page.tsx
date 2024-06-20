"use client";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import fetchCharacterClass from "../../actions/fetchCharacterClass";
import editCharacterClass from "../../actions/editLore";
import { Button } from "../../../components/ui/button";

export default function WarriorPage() {
  const [warriorData, setWarriorData] = useState<any | null>(null);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [newLore, setNewLore] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacterClass("warrior");
      setWarriorData(data);
      setNewLore(data?.lore || "");
    };

    fetchData();
  }, []);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setNewLore(warriorData?.lore || "");
  };

  const handleSaveEdit = async () => {
    const updatedData = await editCharacterClass("warrior", newLore);

    if (updatedData) {
      setWarriorData(updatedData);
      setEditMode(false);
    }
  };

  if (!warriorData) {
    return <div>No data available</div>;
  }

  return (
    <main className="p-4">
      <h1>{warriorData.name}</h1>
      <Card className="bg-white bg-opacity-80 shadow-lg rounded-lg">
        <CardHeader>
          <CardTitle>Lore</CardTitle>
        </CardHeader>
        <CardContent>
          {editMode ? (
            <>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md"
                value={newLore}
                onChange={(e) => setNewLore(e.target.value)}
              />
              <div className="flex mt-2">
                <Button
                  className="px-4 py-2 mr-2 bg-gray-700 text-white rounded-md shadow-sm hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={handleSaveEdit}
                >
                  Save
                </Button>
                <Button
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  onClick={handleCancelEdit}
                >
                  Cancel
                </Button>
              </div>
            </>
          ) : (
            <>
              <p>{warriorData.lore}</p>
              <Button
                className="mt-2 px-4 py-2 bg-gray-800 text-gray-100 rounded-md shadow-sm hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
                onClick={handleEditClick}
              >
                Edit Lore
              </Button>
            </>
          )}
        </CardContent>
      </Card>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {warriorData.subclasses.map((subclass: any, index: number) => (
          <Card
            key={index}
            className="bg-white bg-opacity-80 shadow-lg rounded-lg"
          >
            <CardHeader>
              <CardTitle>{subclass.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-justify">{subclass.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
