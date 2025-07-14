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

const RestaurantCard = () => {
    return (
        <div className='restaurant-card'>
            <div className='restaurant-logo'>
                <img className='resturant-img' src='https://ministryofcurry.com/wp-content/uploads/2024/06/chicken-biryani.jpg' alt='Restaurant Logo' />
            </div>
            <h2>Melbourne Foods</h2>
            <p>Rating: 4.5 stars</p>
            <p>Cuisine: Fast Food</p>
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
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
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