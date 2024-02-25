import { DonutChart} from '@tremor/react';
import style from './style.module.css';

interface Props{
  applications:any []
}
const data1 =  [
  {
      "name": "Application Sent",
      "total": 980
  },
  {
      "name": "Interviews",
      "total": 456
  },
  {
      "name": "Rejected",
      "total": 390
  }
]

export function DonutsChart({applications}:Props) {
  console.log(applications);
  return (
    <>
      <div className="flex items-center justify-center space-x-6">
        <DonutChart
          data={applications}
          category="total"
          index="name"
          colors={['blue','indigo','cyan']}
          className={style.container}
        />
      </div>
    </>
  );
}