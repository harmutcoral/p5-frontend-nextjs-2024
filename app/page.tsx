import Link from "next/link";
import data from "../characters.json";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export default function HomePage() {
  const characterClasses = data.characterClasses;

  return (
    <main className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Character Classes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {characterClasses.map((characterClass, index) => (
              <Link
                key={index}
                href={`/details/${characterClass.name.toLowerCase()}`}
              >
                <div className="flex flex-col items-center space-y-2 cursor-pointer">
                  <span className="text-blue-500 hover:underline p-4">
                    {characterClass.name}
                  </span>
                  <img
                    src={characterClass.image}
                    alt={characterClass.name}
                    className="w-32 h-100 object-contain"
                  />
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-4 flex space-x-2">
            <Button className="flex p-4">Test</Button>
            <Button variant="secondary">Another test</Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
