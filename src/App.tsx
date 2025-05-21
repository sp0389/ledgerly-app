import BarChart from "./components/Chart";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex p-4">
        <Sidebar />
        <div className="flex-1 grid grid-cols-4 gap-2">
          <Card />
          <Card />
          <Card />
          <div className="col-span-3">
            <BarChart />
          </div>
        </div>
      </div>
    </>
  );
}



export default App;