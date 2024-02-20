import { DonutChart, Legend } from '@tremor/react';
import style from './style.module.css';

const sales:any = [
  {
    name: 'Application Sent',
    sales: 980,
  },
  {
    name: 'Interviews',
    sales: 456,
  },
  {
    name: 'Rejected',
    sales: 390,
  }
];

export function DonutsChart() {
  return (
    <>
      <div className="flex items-center justify-center space-x-6">
        <DonutChart
          data={sales}
          category="sales"
          index="name"
          colors={['blue','indigo','cyan']}
          className={style.container}
        />
      </div>
    </>
  );
}