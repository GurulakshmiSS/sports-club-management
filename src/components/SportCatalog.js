import React from 'react';
import Header from './Header';
import './SportsCatalog.css'; 

const SportsCatalog = () => {
  // Mock data for sports products (replace with your actual data)
  const sportsProducts = [
    {
      id: 1,
      name: 'Soccer Ball',
      description: 'Official size and weight soccer ball',
      price: 20.99,
      image: 'https://images.unsplash.com/photo-1532306486637-1d593e9e0415?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29jY2VyJTIwZ2FtZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    },
    {
      id: 2,
      name: 'Basketball',
      description: 'Indoor/outdoor basketball with excellent grip',
      price: 19.99,
      image: 'https://media.istockphoto.com/id/499331469/photo/female-high-school-basketball-team-playing-game.jpg?s=612x612&w=0&k=20&c=JujSgWGCVK8a30N0qJbn77JW5Z6iLb__0v4iIivPMS8=',
    },
    {
      id: 3,
      name: 'Tennis Racket',
      description: 'Professional-grade tennis racket for power and control',
      price: 79.99,
      image: 'https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_sm/f_auto/primary/ufqgtgmmdvwrcqavdrhw',
    },
    {
      id: 4,
      name: 'Handball',
      description: 'Official handball for competitive play',
      price: 15.99,
      image: 'https://img.olympics.com/images/image/private/t_s_w960/t_s_16_9_g_auto/f_auto/primary/j7awlsyq4brhrp6oqv4o',
    },
    {
      id: 5,
      name: 'Cricket Bat',
      description: 'High-quality cricket bat for batsmen',
      price: 49.99,
      image: 'https://imgnew.outlookindia.com/public/uploads/articles/2016/2/12/EnglaqndNZ_201300326.jpg',
    },
    {
      id: 6,
      name: 'Football',
      description: 'Regulation size and weight football for practice',
      price: 18.99,
      image: 'https://images.indianexpress.com/2018/07/football-reuters-fb.jpg?w=389',
    },
    {
      id: 7,
      name: 'Volleyball',
      description: 'Premium volleyball for indoor and outdoor games',
      price: 22.99,
      image: 'https://www.kreedon.com/wp-content/uploads/2021/07/3-best-volleyball-games.jpg',
    },
    {
      id: 8,
      name: 'Hockey Stick',
      description: 'Durable hockey stick for field hockey enthusiasts',
      price: 29.99,
      image: 'https://cdn.britannica.com/15/201015-050-E24FA163/Field-hockey-match-Poland-Spain-2017.jpg',
    },
  ];

  return (
    <div >
      <div>
          <Header/>
      </div>
    <div className="sports-catalog">
      <h2>SPORTS CATALOG</h2>
      <div className="product-list">
        {sportsProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default SportsCatalog;
