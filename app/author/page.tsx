import { notFound } from "next/navigation";

export default function Page() {
  //Here we are simulating a condition to trigger the not-found.tsx
  const condition = true;
  if (condition) {
    notFound();
  }

  return <h1>We should not see this in the browser :P</h1>;
}
