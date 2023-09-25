import { getDonation } from '../../localStorage/localstorage';
import { useEffect, useState } from 'react';
import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const Statistics = () => {
    const allDonations = getDonation()
    const [donations, setDonations] = useState(0)
    useEffect(() => {
        setDonations(allDonations?.length)
    }, [allDonations])

    const data1 = parseFloat(((donations * 100) / 12).toFixed(1))
    const data2 = 100 - data1
    const size = {
        width: 500,
        height: 500,
    };

    return (
        <div className='lg:flex justify-center'>
            <div className="flex justify-center items-center  h-[500px] mt-12 mb-5">

                <PieChart


                    series={[
                        {
                            arcLabel: (item) => ` ${item.value}%`,
                            arcLabelMinAngle: 45,
                            data: [{ value: data1, label: 'Your Donation', color: "blue" },
                            { value: data2, label: 'Total ', color: 'red' },],
                        },
                    ]}
                    sx={{
                        [`& .${pieArcLabelClasses.root}`]: {
                            fill: 'White',
                            fontWeight: '800',

                        },
                    }
                    }

                    legend={{ hidden: true }}
                    {...size}
                />
            </div>
            <div className="flex lg:flex-col justify-center gap-4 ">
                <div className='flex gap-4 items-center'>
                    <p>Your Donation </p>
                    <div className='bg-blue-600 px-6 h-3  rounded-md'> </div>
                </div>
                <div className='flex gap-4 items-center'>
                    <p>Total Donation </p>
                    <div className='bg-red-600 px-6 h-3 rounded-md'> </div>
                </div>


            </div >
        </div>
    );
};

export default Statistics;


