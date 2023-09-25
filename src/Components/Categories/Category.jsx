import PropTypes from "prop-types"
import { NavLink } from "react-router-dom";

const Category = ({ category }) => {
    const { id, title, category_name, category_bg_color, text_btn_color, picture, card_bg_color } = category

    return (
        <div className="w-[312px] mx-auto "
            style={{ backgroundColor: `${category_bg_color}`, borderRadius: '8px', paddingBottom: '8px' }}>
            <NavLink to={`/details/${id}`}>
                <div>
                    <img src={picture} className="rounded-t-lg" alt="" />
                </div>
                <div className="px-4 flex py-2 w-fit rounded  font-bold my-4 mx-4" style={{ backgroundColor: `${card_bg_color}`, color: `${text_btn_color}` }}>{category_name}</div>
                <h1 style={{ color: `${text_btn_color}`, fontWeight: "600", marginLeft: "16px" }} >{title}</h1>
            </NavLink>
        </div>
    );
};
Category.propTypes = {
    category: PropTypes.object
}

export default Category;