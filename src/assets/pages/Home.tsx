import BarChart from "../../components/Chart.tsx";
import Card from "../../components/Card.tsx";
import Layout from "../../components/Layout.tsx";

const Home = () => {
  return (
    <>
      <Layout>
        <div className="flex-1 grid grid-cols-4 gap-4">
          <Card title={"Income"} amount={12600} />
          <Card title={"Expenses"} amount={3500} />
          <div className="col-span-3">
            <BarChart />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home;