import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  return (
    <div className="flex items-center flex-col gap-5 justify-center h-screen bg-black">
      <div className="flex items-center justify-center gap-3">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl text-white">Vite + React Boilerplate</h1>
    </div>
  );
}

export default App;
