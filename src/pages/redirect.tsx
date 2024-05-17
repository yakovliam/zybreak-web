import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const totalProgress = 100;
const startProgress = 10;
function Redirect() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const start = async () => {
      const numUpdates = random(2, 8);

      for (let i = 0; i < numUpdates; i++) {
        await sleep(random(0, 500));
        setValue(
          (old) => old + random(1, (totalProgress - startProgress) / numUpdates)
        );
      }

      await sleep(random(0, 250));
      setValue(totalProgress);
    };

    start();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full p-8">
      <div>
        <h1 className="text-3xl font-bold text-center">Doing some magic...</h1>
      </div>
      <div className="max-w-md w-full p-8">
        <Progress value={value} max={totalProgress} />
      </div>
    </div>
  );
}

export default Redirect;
