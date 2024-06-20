"use client";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import fetchCharacterClass from "../../actions/fetchCharacterClass";

export default function BardPage() {
  const [bardData, setBardData] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacterClass("bard");
      setBardData(data);
    };

    fetchData();
  }, []);

  if (!bardData) {
    return <div>No data available</div>;
  }

  return (
    <main className="p-4">
      <h1>{bardData.name}</h1>
      <Card>
        <CardHeader>
          <CardTitle>Lore</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{bardData.lore}</p>
        </CardContent>
      </Card>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {bardData.subclasses.map((subclass: any, index: number) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{subclass.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{subclass.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
