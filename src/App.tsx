import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex p-4">
        <Sidebar />
        <div className="flex-1 grid grid-cols-2 gap-2 justify-items-center w-full">
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;