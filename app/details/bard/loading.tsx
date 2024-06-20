import { Progress } from "../../../components/ui/progress";

export default function Loading() {
  const progress = 50;
  return (
    <main className="p-6 flex flex-wrap gap-2">
      Loading...
      <Progress value={progress} className=" h-[20px] rounded-full" />
    </main>
  );
}
