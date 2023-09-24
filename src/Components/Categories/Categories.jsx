import PropTypes from "prop-types"
import Category from "./Category";
const Categories = ({ categories }) => {
    console.log(categories);
    return (
        <div className="my-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    categories?.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>

        </div>
    );
};
Categories.propTypes = {
    categories: PropTypes.array
}
export default Categories;