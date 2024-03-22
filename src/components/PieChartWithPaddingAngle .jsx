import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Group A', value: 600 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 750 },
  { name: 'Group E', value: 600 },
];

const COLORS = ['#BEF3C0', '#AC94F1', '#FFF0CA', '#F9CF64', '#F38FBF'];

const PieChartWithPaddingAngle = () => {
  return (
    <PieChart width={600} height={600} >
      <Pie
        data={data}
        cx={300}
        cy={300}
        innerRadius={90}
        outerRadius={150}
        fill="#8884d8"
        paddingAngle={0}
        dataKey="value"
        className='border border-green-400'
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default PieChartWithPaddingAngle;