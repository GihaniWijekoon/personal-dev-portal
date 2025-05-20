import { useEffect, useState } from 'react';

const FunFact = () => {
  const [fact, setFact] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const fetchFact = () => {
    setLoading(true);
    fetch("https://uselessfacts.jsph.pl/random.json?language=en")
      .then(res => res.json())
      .then(data => {
        setFact(data.text);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching fact:", error);
        setFact("Did you know? Developers who take breaks are often more productive than those who don't.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
      <div className="md:w-3/4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Random Fun Fact</h2>
        <p className="text-gray-700">
          {loading ? "Loading..." : fact}
        </p>
      </div>
      <button
        onClick={fetchFact}
        className="mt-4 md:mt-0 bg-purple-600 text-white font-medium px-4 py-2 rounded hover:bg-purple-700 transition"
        disabled={loading}
      >
        {loading ? "Loading..." : "New Fact"}
      </button>
    </div>
  );
};

export default FunFact;