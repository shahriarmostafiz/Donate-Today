import PropTypes from "prop-types"
import Category from "./Category";
import { useEffect, useState } from "react";
const Categories = ({ categories, searchData }) => {
    const [ourCategory, setOurCategory] = useState(categories)
    useEffect(() => {
        if (searchData.toLowerCase() === 'all') {
            setOurCategory(categories)
            searchData = ''
        }

        else if (searchData.toLowerCase() === 'education') {
            const eduCationCategory = categories.filter(category => category.category_name === 'Education')
            setOurCategory(eduCationCategory)
            searchData = ''
        }
        else if (searchData.toLowerCase() === 'health') {
            const healthCategory = categories.filter(category => category.category_name === 'Health')
            setOurCategory(healthCategory)
            searchData = ''
        }
        else if (searchData.toLowerCase() === 'food') {
            const foodCategory = categories.filter(category => category.category_name === 'Food')
            setOurCategory(foodCategory)
            searchData = ''
        }
        else if (searchData.toLowerCase() === 'clothing') {
            const clothingCategory = categories.filter(category => category.category_name === 'Fashion')
            setOurCategory(clothingCategory)
            searchData = ''
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