
import { PieChart, Pie, Cell, Legend } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 200 },
];

const COLORS = ['#BEF3C0', '#AC94F1', '#FFF0CA', '#F9CF64', '#F38FBF'];

const DonutChart = () => {
  const renderLegend = (props) => {
    // eslint-disable-next-line react/prop-types
    const { payload } = props;

    return (
      <Legend
        payload={payload}
        verticalAlign="bottom"
        height={36}
        iconType="circle"
      />
    );
  };

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        innerRadius={70}
        outerRadius={90}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      {renderLegend({ payload: data })}
    </PieChart>
  );
};

export default DonutChart;