
export default function handler(req, res) {
  const data = {
    programSpend: [
      { name: "T&O Catalyst", value: 183000000 },
      { name: "T&O Keystone", value: 69860000 },
      { name: "T&O Phoenix Programme", value: 48250000 },
    ],
    costCategories: [
      { name: "Manday Costs", value: 120000000 },
      { name: "Fixed Bid Contracts", value: 80000000 },
      { name: "Infrastructure", value: 50000000 },
    ],
    regions: [
      { name: "Global", value: 150000000 },
      { name: "Asia", value: 100000000 },
    ],
  };
  res.status(200).json(data);
}
