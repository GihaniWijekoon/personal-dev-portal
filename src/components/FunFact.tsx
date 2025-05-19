import { useEffect, useState } from 'react';

const FunFact = () => {
  const [fact, setFact] = useState<string>("");

  const fetchFact = () => {
    fetch("https://uselessfacts.jsph.pl/random.json?language=en")
      .then(res => res.json())
      .then(data => setFact(data.text));
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <div className="bg-green-100 text-green-800 p-4 rounded-lg shadow max-w-md mx-auto text-center">
      <h2 className="text-xl font-semibold">Fun Fact</h2>
      <p className="mt-2">{fact}</p>
      <button
        onClick={fetchFact}
        className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        New Fact
      </button>
    </div>
  );
};

export default FunFact;
