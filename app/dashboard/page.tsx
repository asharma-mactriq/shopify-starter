import { getProductDetails } from "../../utils/shopifyClient";

async function Dashboard() {
  const data = await getProductDetails();

  console.log(data);
  return (
    <div>
      <h2>This is dashboard</h2>
    </div>
  );
}

export default Dashboard;
