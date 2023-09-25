import PropTypes from "prop-types"
import Category from "./Category";
import { useEffect, useState } from "react";
const Categories = ({ categories, searchData }) => {
    const [ourCategory, setOurCategory] = useState(categories)
    useEffect(() => {
        const codeWords = ["blood", "cancer", "children", "africa", "earthquake", "flood", "poverty", "volunteering", "food", "fashion", "health", "education"]
        if (codeWords.includes(searchData.toLowerCase())) {
            const thisCategory = categories.filter(category => category.category_name.toLowerCase() === searchData.toLowerCase())
            setOurCategory(thisCategory)
        }

    }, [categories, searchData])

    // console.log(categories);
    return (
        <div className="my-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 md:p-0">
                {
                    searchData ?
                        ourCategory?.map(category => <Category key={category.id} category={category}></Category>)
                        :
                        categories?.map(category => <Category key={category.id} category={category}></Category>)

                }
            </div>

        </div>
    );
};
Categories.propTypes = {
    categories: PropTypes.array,
    searchData: PropTypes.string
}
export default Categories;