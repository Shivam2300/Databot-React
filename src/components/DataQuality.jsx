import React from 'react'
import {Chart as Chartjs} from 'chart.js/auto'
import {Doughnut} from 'react-chartjs-2';

const DataQuality = () => {

    const options = {
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: {
                usePointStyle: true, 
                pointStyle: 'circle',
                boxWidth: 7, 
                boxHeight: 7, 
                padding:7
            },
          },
          tooltip: {
            callbacks: {
                label: (tooltipItem) => {
                const dataset = tooltipItem.dataset.data;
                const currentValue = dataset[tooltipItem.dataIndex];
                const total = dataset.reduce((acc, value) => acc + value, 0);
                const percentage = ((currentValue / total) * 100).toFixed(2);
                return `${percentage}%`;
                },
                title: () => '', 
            afterLabel: () => '', 
            },
            displayColors: false,
    },
        },
        hoverOffset: 12,
      };

      const centerTextPlugin = {
        id: 'centerText',
        beforeDraw(chart) {
          const { ctx, chartArea: { width, height } } = chart; 
          ctx.save();
      
          const text = 'Total Table '; 
        const bText='88';
          

          const fontSize = 10; 
          ctx.font = `${fontSize}px Poppins`; 
          ctx.fillStyle = '#000'; 
          ctx.textAlign = 'center'; 
          ctx.textBaseline = 'middle'; 
      
          const textX = width / 2; 
          const textY = height / 2; 
          ctx.fillText(text, textX, textY); 

          ctx.font = `bold ${16}px sans-serif`; 
          const boldTextY = height / 2 + fontSize + 4; 
          ctx.fillText(bText, textX, boldTextY);
      
          ctx.restore();
        },
      };
      
      Chartjs.register(centerTextPlugin);

  return (
    <div className='data-quality'>
        <h1>Data Quality</h1>
        <div className='data-quality-score'>
            <img src="images/Group 14.png" />
        </div>
        <div className='data-quality-table-data'>
            <div className='table-health'>
                <h1>Table Health</h1>
                <div className='table-health-chart'>
                    <Doughnut
                        data={{
                            labels:['Failed','Success','Skipped'],
                            datasets:[{ 
                                data:[30.3,52.1,17.6],
                                backgroundColor: ['#1548b6','#3bba2a','#d7f348'],
                                borderWidth: 5, 
                                borderColor: '#ffffff',
                                hoverBorderColor: 'transparent',
                                borderRadius: 5,
                            }]
                        }}
                        options={options}
                     />
                </div>
            </div>
            <div className='table-results'>
                <h1>Table Results Breakdown</h1>
                    <div className='table-health-chart'>
                    <Doughnut
                        data={{
                            labels:['Broken','Unknown','Aborted'],
                            datasets:[{
                                data:[30.3,52.1,17.6],
                                backgroundColor: ['#e75346','#35df38','#478fe3'],  
                                borderWidth: 5, 
                                borderColor: '#ffffff', 
                                hoverBorderColor: 'transparent',
                                borderRadius: 5,
                            }]
                        }}
                        options={options}
                     />
                    </div>
                </div>
            <div className='monitored-tables'>
                <h1>Monitored Tables</h1>
                <div className='table-health-chart'>
                    <Doughnut
                        data={{
                            labels:['Monitored','Unmonitored'],
                            datasets:[{
                                data:[59.8, 40.2],
                                backgroundColor: ['#2d23b3','#49494c'],  
                                borderWidth: 5, 
                                borderColor: '#ffffff', 
                                hoverBorderColor: 'transparent',
                                borderRadius: 5,
                            }]
                        }}
                        options={options}
                     />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DataQuality;
