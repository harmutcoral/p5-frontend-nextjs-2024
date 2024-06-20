import Link from "next/link";
import data from "../../characters.json";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

export default function HomePage() {
  const characterClasses = data.characterClasses;

  return (
    <main className="flex-1 p-4">
      <div className="mb-4">
        <Card className="bg-white bg-opacity-80 shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle>Choose your Fighter!</CardTitle>
          </CardHeader>
        </Card>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {characterClasses.map((characterClass, index) => (
          <Card
            key={index}
            className="bg-white bg-opacity-80 shadow-lg rounded-lg"
          >
            <Link href={`/details/${characterClass.name.toLowerCase()}`}>
              <div className="flex flex-col items-center space-y-2 cursor-pointer p-4">
                <CardHeader>
                  <CardTitle>{characterClass.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center">
                    <img
                      src={characterClass.image}
                      alt={characterClass.name}
                      className="w-32 h-64 object-contain"
                    />
                  </div>
                  <br />
                  <p className="mt-2 text-sm text-justify">
                    {characterClass.lore}
                  </p>
                </CardContent>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </main>
  );
}
