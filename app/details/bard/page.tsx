import data from "../../../characters.json";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

export default function BardPage() {
  const bardClass = data.characterClasses.find(
    (cls) => cls.name.toLowerCase() === "bard"
  );

  return (
    <main className="p-4">
      <h1>{bardClass?.name}</h1>
      <Card>
        <CardHeader>
          <CardTitle>Lore</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{bardClass?.lore}</p>
        </CardContent>
      </Card>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {bardClass?.characters.map((subclass, index) => (
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
