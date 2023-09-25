// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { Pie } from 'react-chartjs-2';
// import { getDonation } from '../../localStorage/localstorage';
// import { useEffect, useState } from 'react';

// ChartJS.register(ArcElement, Tooltip, Legend);

// const Statistics = () => {
//     const allDonations = getDonation()
//     const [donations, setDonations] = useState(0)
//     useEffect(() => {
//         setDonations(allDonations?.length)
//     }, [allDonations])

//     const data = {
//         labels: ['Donated', 'Not Dondated'],
//         datasets: [
//             {
//                 label: 'Categories',
//                 data: [(donations * 100) / 12, ((12 - donations) * 100) / 12],
//                 backgroundColor: [
//                     'rgba(255, 99, 132, 0.8)',
//                     'rgba(54, 162, 235, 0.8)',

//                 ],
//                 borderColor: [
//                     'rgba(255, 99, 132, 1)',
//                     'rgba(54, 162, 235, 1)',

//                 ],
//                 borderWidth: 1,
//             },
//         ],
//     };

//     return (
//         <div className=' w-full p-4  h-[80vh] my-12 md:my-16 flex justify-center items-center'>
//             <div className=' w-[300px] md:w-[500px]'>
//                 <Pie data={data} />;
//             </div>
//         </div>
//     );
// };

// export default Statistics;
import { getDonation } from '../../localStorage/localstorage';
import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';


const Statistics = () => {
    const allDonations = getDonation()
    const [donations, setDonations] = useState(0)
    useEffect(() => {
        setDonations(allDonations?.length)
    }, [allDonations])

    const data1 = parseFloat(((donations * 100) / 12).toFixed(1))
    const data2 = parseFloat((((12 - donations) * 100) / 12).toFixed(1))

    const data = [
        { name: 'Your Donation', value: data1 },
        { name: 'Total Donation', value: data2 },
        // { name: 'Group C', value: 300 },
        // { name: 'Group D', value: 200 },
        // { name: 'Group E', value: 278 },
        // { name: 'Group F', value: 189 },
    ];

    // const data02 = [
    //     { name: 'Group A', value: 2400 },
    //     { name: 'Group B', value: 4567 },
    //     { name: 'Group C', value: 1398 },
    //     { name: 'Group D', value: 9800 },
    //     { name: 'Group E', value: 3908 },
    //     { name: 'Group F', value: 4800 },
    // ];
    const COLORS = ['#194EC9', '#9D1023']

    return (
        <>
            <div className="flex justify-center items-center h-[500px]">
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"

                        label="true"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>


            </div>
            <div className="flex justify-center gap-4">
                <div className='flex gap-4'>

                    <p>Your Donation %</p> <div className='bg-[#194EC9] px-8 py-1'> </div>
                </div>
                <div className='flex gap-4'>

                    <p>Total Donation %</p>
                    <div className='bg-[#9D1023] px-8 py-1'> </div>
                </div>


            </div >
        </>
    );
};

export default Statistics;


