import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { saveTheDonation } from "../../localStorage/localstorage";

const Details = () => {
    const { id } = useParams()
    const idInt = parseInt(id)
    const [detailsOf, setDetailsOf] = useState([])
    const allCategories = useLoaderData()
    useEffect(() => {
        const thisCategory = allCategories.find(category => category.id === idInt)
        setDetailsOf(thisCategory)
    }, [allCategories, idInt])
    const { title, category_bg_color, text_btn_color, details_picture, description, price } = detailsOf
    const handleDonate = () => {
        saveTheDonation(detailsOf)
    }
    return (
        <div className="max-w-7xl mx-auto">
            <div className="relative">
                <img src={details_picture} className="w-full" alt="" />
                <div className="absolute w-full h-20 bottom-0 flex items-center px-8"
                    style={{ backgroundColor: `${category_bg_color}` }}>
                    <button
                        onClick={handleDonate}
                        className="btn text-white font-medium border-none"
                        style={{ backgroundColor: `${text_btn_color}` }}
                    >Donate $ {price}</button>
                </div>
            </div>
            <h1 className="text-3xl font-medium">{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default Details;