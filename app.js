import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img className='logo'
                    src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=large' alt='Food ordering Logo'
                />
            </div>
            <div className='navbar'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>      
    )
}
const restaurantList = [
    {
        resName: "Biryani House",
        cuisine: "North Indian, Biryani",
        imageUrl: "https://ministryofcurry.com/wp-content/uploads/2024/06/chicken-biryani.jpg"
    },
    {
        resName: "Dragon Wok",
        cuisine: "Chinese, Asian",
        imageUrl: "https://example.com/chinese-food.jpg"
    },
    {
        resName: "Pizza Paradise",
        cuisine: "Italian, Pizza",
        imageUrl: "https://example.com/pizza.jpg"
    },
    {
        resName: "Sushi Master",
        cuisine: "Japanese, Sushi",
        imageUrl: "https://example.com/sushi.jpg"
    },
    {
        resName: "Taco Fiesta",
        cuisine: "Mexican, Tex-Mex",
        imageUrl: "https://example.com/tacos.jpg"
    },
    {
        resName: "Mediterranean Delight",
        cuisine: "Mediterranean, Greek",
        imageUrl: "https://example.com/mediterranean.jpg"
    },
    {
        resName: "Burger Junction",
        cuisine: "American, Fast Food",
        imageUrl: "https://example.com/burger.jpg"
    },
    {
        resName: "Thai Spice",
        cuisine: "Thai, Asian Fusion",
        imageUrl: "https://example.com/thai-food.jpg"
    },
    {
        resName: "Curry Leaf",
        cuisine: "South Indian, Kerala",
        imageUrl: "https://example.com/south-indian.jpg"
    },
    {
        resName: "Kebab Corner",
        cuisine: "Turkish, Middle Eastern",
        imageUrl: "https://example.com/kebab.jpg"
    }
];

export default restaurantList;

const RestaurantCard = ({resName, cuisine}) => {
    return (
        <div className='restaurant-card'>
            <div className='restaurant-logo'>
                <img className='resturant-img' src='https://ministryofcurry.com/wp-content/uploads/2024/06/chicken-biryani.jpg' alt='Restaurant Logo' />
            </div>
            <h2>{resName}</h2>
            <h3>{cuisine}</h3>
            
        </div>
    )
}

const Body = () => {
    return (
        <div className='body'>
            <div className='search-bar'>
                <input type='text' placeholder='Search for restaurants...' />
            </div>
            <div className='restaurant-list'>
                {restaurantList.map((restaurant, index) => {
                    return <RestaurantCard key={index} resName={restaurant.resName} cuisine={restaurant.cuisine} />
                })}
            </div>
        </div>
    )
}

const AppLayout = () => {
    return ( 
        <div className='app-layout'>
            <Header />
            <Body />
        </div>
    )}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);