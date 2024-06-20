"use client";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import fetchCharacterClass from "../../actions/fetchCharacterClass";

export default function WarriorPage() {
  const [warriorData, setWarriorData] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacterClass("warrior");
      setWarriorData(data);
    };

    fetchData();
  }, []);

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
          <p>{warriorData.lore}</p>
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
