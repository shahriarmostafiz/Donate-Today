import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { getDonation } from '../../localStorage/localstorage';
import { useEffect, useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

const Statistics = () => {
    const allDonations = getDonation()
    const [donations, setDonations] = useState(0)
    useEffect(() => {
        setDonations(allDonations?.length)
    }, [allDonations])

    const data = {
        labels: ['Donated', 'Not Dondated'],
        datasets: [
            {
                label: 'Categories',
                data: [donations, 12 - donations],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',

                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',

                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className=' w-full p-4  h-[80vh] my-12 md:my-16 flex justify-center items-center'>
            <div className=' w-[300px] md:w-[500px]'>
                <Pie data={data} />;
            </div>
        </div>
    );
};

export default Statistics;
// import { PureComponent, useEffect, useState } from 'react';
// // import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
// import { getDonation } from '../../localStorage/localstorage';

// // const Statistics = () => {
// //     const allDonations = getDonation()
// //     const [donations, setDonations] = useState(0)
// //     useEffect(() => {
// //         setDonations(allDonations?.length)
// //     }, [allDonations])
// //     console.log(allDonations);
// //     const data = [
// //         { name: 'Your Donations', value: donations },
// //         { name: 'Total Donations', value: 12 - donations },

// //     ]
// //     const COLORS = ['#0088FE', '#00C49F'];
// //     // const RADIAN = Math.PI / 180;
// //     // const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
// //     //     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
// //     //     const x = cx + radius * Math.cos(-midAngle * RADIAN);
// //     //     const y = cy + radius * Math.sin(-midAngle * RADIAN);

// //     //     return (
// //     //         <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
// //     //             {`${(percent * 100).toFixed(0)}%`}
// //     //         </text>
// //     //     );
// //     // };
// //     return (
// //         <div>
// //             <PieChart width={400} height={400}>
// //                 <Pie
// //                     data={data}

// //                     labelLine={false}
// //                     // label={renderCustomizedLabel}
// //                     outerRadius={80}
// //                     fill="#8884d8"
// //                     dataKey="value"
// //                 >
// //                     {data.map((entry, index) => (
// //                         <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
// //                     ))}
// //                 </Pie>
// //             </PieChart>
// //         </div>
// //     );
// // };

// // export default Statistics;
// import React from "react";
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
// function Statistics() {
//     const allDonations = getDonation()
//     const [donations, setDonations] = useState(0)
//     useEffect(() => {
//         setDonations(allDonations?.length)
//     }, [allDonations])
//     console.log(allDonations);
//     const data = [
//         { name: 'Your Donations', value: donations },
//         { name: 'Total Donations', value: 12 - donations },

//     ]


//     return (
//         <div>
//             <div width="100%" height="100%">
//                 <PieChart width={400} height={400}>
//                     <Pie
//                         data={data}
//                         dataKey="value"
//                         cx="50%"
//                         cy="50%"
//                         outerRadius={60}
//                         fill="#8884d8"
//                     />
//                     {/* <Pie
//                         data={data02}
//                         dataKey="value"
//                         cx="50%"
//                         cy="50%"
//                         innerRadius={70}
//                         outerRadius={90}
//                         fill="#82ca9d"
//                         label
//                     /> */}
//                 </PieChart>
//             </div>
//         </div>
//     );
// }
// export default Statistics;
