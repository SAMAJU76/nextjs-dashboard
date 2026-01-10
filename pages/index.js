
import { useEffect, useState } from 'react';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/dashboard')
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  if (!data) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">T&O Executive Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Spend by Program</h2>
          <BarChart data={data.programSpend} />
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Cost Category Distribution</h2>
          <PieChart data={data.costCategories} />
        </div>
        <div className="bg-white p-4 rounded shadow md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Spend by Region</h2>
          <BarChart data={data.regions} />
        </div>
      </div>
    </div>
  );
}
``

