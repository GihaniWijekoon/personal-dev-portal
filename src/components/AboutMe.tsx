import { useEffect, useState } from 'react';

type GitHubUser = {
  avatar_url: string;
  html_url: string;
};

const AboutMe = () => {
  const [user, setUser] = useState<GitHubUser | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/GihaniWijekoon")
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="bg-white p-4 rounded-xl shadow-md text-center max-w-md mx-auto">
      <img
        src={user.avatar_url}
        alt="GitHub avatar"
        className="w-24 h-24 rounded-full mx-auto mb-2"
      />
      <h2 className="text-xl font-semibold"> Gihani Wijekoon</h2>
      <p className="text-gray-600"> software engineer</p>
      <a
        href={user.html_url}
        target="_blank"
        className="text-blue-500 mt-2 inline-block underline"
      >
        View GitHub Profile
      </a>
    </div>
  );
};

export default AboutMe;
