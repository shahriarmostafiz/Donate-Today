import { useEffect, useState } from "react";
import { getDonation } from "../../localStorage/localstorage";
import Donation from "./Donation";

const Donations = () => {
    const donations = getDonation()
    const [length, setLength] = useState(0)
    const [display, setDisplay] = useState(4)
    const [btn, setbtn] = useState(true)
    useEffect(() => {
        setLength(donations.length)
    }, [donations])

    const handleShowAll = () => {
        setDisplay(donations.length)
        setbtn(!btn)
    }
    // console.log(donations);
    return (
        <div>

            <div className="grid md:grid-cols-2 p-4 gap-4 mx-auto max-w-7xl my-20">
                {
                    donations?.slice(0, display).map(donation => <Donation key={donation.id} donation={donation}></Donation>)
                }
            </div>

            {

                length > 4 && <div className="text-center">
                    <button
                        onClick={handleShowAll} className={btn ? ` btn btn-success btn-outline ` : 'hidden'}>ShowAll</button>
                </div>
            }
        </div>
    );
};

export default Donations;