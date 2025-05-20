import { useState, useEffect } from 'react';
import Clock from './components/Clock';
import FunFact from './components/FunFact';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

type GitHubUser = {
  avatar_url: string;
  html_url: string;
};

function App() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/GihaniWijekoon")
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching GitHub data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-xl font-medium">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <NavBar />

      {/* Clock positioned at top right */}
      <div className="container mx-auto px-4 relative">
        <div className="absolute right-3 top-5 w-48">
          <Clock />
        </div>
      </div>
      
      {/* About Me Section */}
      <AboutMe user={user} />
      
      {/* Fun Fact Section */}
      <div className="container mx-auto px-4">
        <div className="bg-white p-6 rounded-lg shadow-md ">
          <FunFact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;