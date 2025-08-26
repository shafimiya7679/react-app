import { Restaurant_Image_URL } from "../utils/constants";
const RestaurantCard = ({resName, cuisine, price, rating}) => {
    return (
        <div className='restaurant-card'>
            <div className='restaurant-logo'>
                <img className='resturant-img' src={Restaurant_Image_URL} alt='Restaurant Logo' />
            </div>
            <h2>{resName}</h2>
            <h3>{cuisine}</h3>
            <p>{"Price " + price}</p>
            <p>{"Rating " + rating}</p>
            
        </div>
    )
}

export default RestaurantCard;