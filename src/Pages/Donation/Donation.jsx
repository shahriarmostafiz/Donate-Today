import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Donation = ({ donation }) => {
    const { id, title, category_name, text_btn_color, card_picture, card_bg_color, price } = donation

    return (
        <div
            style={{ backgroundColor: `${card_bg_color}`, borderRadius: '8px', display: 'flex' }}>

            <div>
                <img src={card_picture} alt="" />
            </div>
            <div>
                <div className=' text-lg space-y-3 p-4'>
                    <div className="px-4 flex py-2 w-fit rounded  font-bold " style={{ backgroundColor: `${card_bg_color}`, color: `${text_btn_color}` }}>{category_name}</div>
                    <h1 className=' font-medium text-2xl'>{title}</h1>
                    <h1 style={{ color: `${text_btn_color}`, fontWeight: '700' }} > $ {price}</h1>
                    <Link to={`/details/${id}`} > <button
                        style={{ backgroundColor: `${text_btn_color}`, fontWeight: '600', color: 'white', padding: '8px 16px', borderRadius: '8px' }}>
                        View Details</button ></Link>

                </div>

            </div>
        </div>
    );
};
Donation.propTypes = {
    donation: PropTypes.object
}

export default Donation;