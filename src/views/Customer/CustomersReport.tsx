import React from 'react';
import { Card } from 'antd';

import ReactECharts from 'echarts-for-react';

const CustomersReport:React.FC = () => {
    const options = {
        grid: { top: 8, right: 8, bottom: 24, left: 36 },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'bar',
            smooth: true,
          },
        ],
        tooltip: {
          trigger: 'axis',
        },
      };
    
    return (
        <>
         <Card title="Customers Report">
             <div id="cr-linechart">
                <ReactECharts option={options} />
             </div>
        </Card>
        </>
    );
};

export default CustomersReport;