import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-4">
      <h1>Catálogo de Personajes</h1>
      <Card>
        <CardHeader>
          <CardTitle>Test</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-row gap-2">
          <Link
            href="/details"
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Go to details
          </Link>
          <Button className="flex p-4">Test</Button>
          <Button variant="secondary">Another test</Button>
        </CardContent>
      </Card>
    </main>
  );
}
