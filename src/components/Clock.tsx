import { useEffect, useState } from 'react';

const Clock = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    };

    updateClock(); // initial call
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg shadow text-center">
      <h2 className="text-xl font-semibold">Current Time</h2>
      <p className="text-2xl mt-1 font-mono">{time}</p>
    </div>
  );
};

export default Clock;
