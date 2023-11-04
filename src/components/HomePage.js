import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'; // Import the Header component
import { Carousel } from 'react-responsive-carousel'; // Import Carousel component
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './HomePage.css'; // Import your existing CSS

// ...

function HomePage() {
  return (
    <div>
      {/* Include the Header component */}
      <Header />

      <section className="banner">
        {/* Image Slider */}
        <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={5000}>
          <div>
            <img src="https://sportsmonkie.com/wp-content/uploads/2023/04/most-popular-sports-in-the-world.jpeg" alt="Sports Club Banner 1" />
          </div>
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Youth-soccer-indiana.jpg/1200px-Youth-soccer-indiana.jpg" alt="Sports Club Banner 2" />
          </div>
          <div>
            <img src="https://img.olympics.com/images/image/private/t_s_w960/t_s_16_9_g_auto/f_auto/primary/j7awlsyq4brhrp6oqv4o" alt="Sports Club Banner 3" />
          </div>
        </Carousel>
      </section>

      <section className="content">
        <h1>Welcome to the Sports Club</h1>

        {/* Club Information */}
        <p>
          The Sports Club is dedicated to promoting physical fitness and well-being
          through a variety of sports and activities. Join us to stay active and
          connected with fellow sports enthusiasts.
        </p>

        {/* Upcoming Events */}
        <div className="upcoming-events">
          <h2>Upcoming Events</h2>
          <ul>
            <li>
              <strong>Event 1:</strong> July 15, 2023, 3:00 PM - Sports Stadium
            </li>
            <li>
              <strong>Event 2:</strong> August 5, 2023, 9:00 AM - Tennis Courts
            </li>
          </ul>
        </div>

        {/* Membership Benefits */}
        <div className="membership-benefits">
          <h2>Membership Benefits</h2>
          <ul>
            <li>Access to top-notch facilities</li>
            <li>Discounts on sports gear</li>
            <li>Exclusive access to club events</li>
          </ul>
          <Link to="/membership">Join Now</Link>
        </div>
      </section>

      {/* Featured Sports or Activities */}
      <section className="featured-sports">
        <h2>Featured Sports</h2>
        <div className="sports-list">
          {/* Sports Cards */}
          <div className="sport-card">
            <img src="https://media1.popsugar-assets.com/files/thumbor/fp3zUJSt45csQKwp0DYuBbKnUNc=/fit-in/792x528/top/filters:format_auto():upscale()/2023/06/05/662/n/1922729/tmp_6k4jWZ_6b29bc45bdf7cc7c_GettyImages-1481560323.jpg" alt="Sport 1" />
            <h3>Soccer</h3>
            <p>Join our soccer leagues and tournaments.</p>
          </div>
          <div className="sport-card">
            <img src="https://www.decathlon.com/cdn/shop/articles/Screen_Shot_2018-02-12_at_9.38.09_PM_2000x.png?v=1518500318" alt="Sport 2" />
            <h3>Tennis</h3>
            <p>Play tennis on our world-class courts.</p>
          </div>
          {/* Add more sport cards as needed */}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
