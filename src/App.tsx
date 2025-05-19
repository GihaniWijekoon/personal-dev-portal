import AboutMe from './components/AboutMe';
import Clock from './components/Clock';
import FunFact from './components/FunFact';

function App() {
  return (
    <div className="min-h-screen p-6 bg-blue-50 flex flex-col items-center gap-6">
      <h1 className="text-4xl font-bold text-blue-700">👩‍💻 Gihani's Dev Portal</h1>
      <AboutMe />
      <Clock />
      <FunFact />
    </div>
  );
}

export default App;
