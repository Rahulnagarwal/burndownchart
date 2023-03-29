
import Highcharts from 'highcharts';
import { useEffect, useRef } from 'react';

// eslint-disable-next-line react/prop-types
const BurndownChart = ({ plannnedTime, spendTime, tasktitle }) => {
    const chartContainer = useRef(null);
    useEffect(() => {
        if (chartContainer.current) {
            Highcharts.chart(chartContainer.current, {
                title: {
                    text: 'Burndown Chart',
                    x: -20,
                },
                colors: ['blue', 'red'],
                plotOptions: {
                    line: {
                        lineWidth: 3,
                    },
                    tooltip: {
                        hideDelay: 200,
                    },
                    series: {
                        point: {
                            events: {
                                click(e) {
                                    console.log('a', e?.point?.category);
                                },
                            }
                        }
                    }
                },
                subtitle: {
                    text: 'User A',
                    x: -20,
                },
                xAxis: {
                    categories: [...tasktitle],
                },
                yAxis: {
                    title: {
                        text: 'Time in minutes',
                    },
                    plotLines: [
                        {
                            value: 0,
                            width: 1,
                        },
                    ],
                },
                tooltip: {
                    valueSuffix: ' min',
                    crosshairs: true,
                    shared: true,
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0,
                },
                series: [
                    {
                        name: 'Ideal Burn',
                        color: 'rgba(255,0,0,0.25)',
                        lineWidth: 2,
                        data: [...plannnedTime],
                    },
                    {
                        name: 'Actual Burn',
                        color: 'rgba(0,120,200,0.75)',
                        marker: {
                            radius: 6,
                        },
                        data: [...spendTime],
                    },
                ],
            });
        }
    }, [chartContainer, plannnedTime, spendTime, tasktitle]);
    return <div ref={chartContainer} />;
};

export default BurndownChart;
