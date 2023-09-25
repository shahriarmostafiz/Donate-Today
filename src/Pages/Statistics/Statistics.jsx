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
