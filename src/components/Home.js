import React from 'react';
import Menu from './global/Menu';
// import '../styles/search-form.scss';
import Footer from './global/Footer';
import city1 from '../assets/images/city1.jpg';
import city2 from '../assets/images/city2.jpg';
import city3 from '../assets/images/city3.jpg';
import city4 from '../assets/images/city4.jpg';
import avatarMan from '../assets/images/avatar-man.png';
import avatarWoman from '../assets/images/avatar-woman.png';

const Home = () => (
    <div>
      <header>
        <Menu />
      </header>

      <section className="main">
        <div className="main-text">
          <div className="main-shadow">
            <div className="container">
              <h1>Book | Pay | Travel</h1>
              <p>
                No more queues on jammed streets and bus stations for bus tickets.
                <br />
                {' '}
                Book a bus ticket from your couch or when you are on the move.
              </p>
            </div>
          </div>
        </div>

        <div className="main-body">
          <div className="container">
            <div className="container">
              <div className="main-content">
                <div className="container">
                  <h2>I would like to travel...</h2>
                  <form action="" id="search-form">
                      <div className="formgroup" id="origin-form">
                        <input type="text" id="origin" name="origin" placeholder="From" autoComplete="off" />
                      </div>
                      <div className="formgroup" id="destination-form">
                        <input type="text" id="destination" name="destination" placeholder="To" autoComplete="off" />
                      </div>
                      <div className="formgroup">
                        <input type="submit" value="Search" />
                      </div>
                  </form>
                </div>
              </div>
            </div>

            <h3 id="trips-section">
              <img src="https://img.icons8.com/cute-clipart/64/000000/bus.png" alt="" />
              {' '}
              Scheduled departures...
            </h3>
            <div className="container trips-list">
              <div id="trips-group">
                <div className="container one-trip">
                  <div className="bus-icon">
                    <i className="fa fa-bus" />
                  </div>
                  <div className="trip-details">
                    <h3>
                      Ouagadougou
                      <span className="no-bold">to</span>
                      {' '}
                      Kigali
                    </h3>
                    <p>
                      <span className="trip-cat">Date: </span>
                      Sunday, 24th of July
                    </p>
                    <p>
                      <span className="trip-cat">Date: </span>
                      <b>5:00pm</b>
                    </p>
                    <p>
                      <b>24</b>
                      {' '}
                      seats available
                    </p>
                  </div>
                  <div className="trip-more">
                    <p><b>$100</b></p>
                    <a href="one-trip.html"><button type="button" name="button">More</button></a>
                  </div>
                </div>
                <hr />
                <div className="container one-trip">
                  <div className="bus-icon">
                    <i className="fa fa-bus" />
                  </div>
                  <div className="trip-details">
                    <h3>
                      Ouagadougou
                      <span className="no-bold">to</span>
                      {' '}
                      Kigali
                    </h3>
                    <p>
                      <span className="trip-cat">Date: </span>
                      Sunday, 24th of July
                    </p>
                    <p>
                      <span className="trip-cat">Departure Time: </span>
                      <b>5:00pm</b>
                    </p>
                    <p>
                      <b>24</b>
                      {' '}
                      seats available
                    </p>
                  </div>
                  <div className="trip-more">
                    <p><b>$100</b></p>
                    <button type="button" name="button">More</button>
                  </div>
                </div>
                <hr />
              </div>
            </div>

            <div className="destinations">
              <h2>Top Destinations</h2>
                <div className="card">
                  <p>Nairobi</p>
                  <img src={city1} alt="" />
                </div>
                <div className="card">
                  <p>Kampala</p>
                  <img src={city2} alt="" />
                </div>
                <div className="card">
                  <p>Arusha</p>
                  <img src={city3} alt="" />
                </div>
                <div className="card">
                  <p>Kigali</p>
                  <img src={city4} alt="" />
                </div>
            </div>

            <div className="our-services">
              <h2>Our Services</h2>
              <em><p>This is what makes us stand from others</p></em>
              {' '}
              <br />
              <div className="service">
                <i className="fas fa-umbrella" />
                <h3>Insurance</h3>
                <p>Customers would be reimbursed for hospitalization expenses due to injury suffered during the bus travel.</p>
                <br />
              </div>
              <div className="service">
                <i className="fas fa-restroom" />
                <h3>WC</h3>
                <p>Still have a few minutes until you reach your stop? No need to be nervous! There is a toilet on board of all our buses.</p>
                <br />
              </div>
              <div className="service">
                <i className="fas fa-pizza-slice" />
                <h3>Snack</h3>
                <p>Enjoy your trip while you savour a delicious fresh snack cooked by our catering services.</p>
                <br />
              </div>
              <div className="service">
                <i className="fas fa-ban" />
                <h3>Cancellation</h3>
                <p>If you no longer wish to travel, you can cancel your ticket directly from the "My bookings" section.</p>
                <br />
              </div>
            </div>

            <div className="testimonials">
              <h2>Testimonials</h2>
              <em><p>Read what satisfied customers say about us</p></em>
              <div className="card-test">
                <div className="content">
                  <p>Thanks to WayFarer, organizing transportation during travelling in Africa has never been easier. Thumbs up for that.</p>
                    <div className="image">
                      <img src={avatarMan} alt="" />
                    </div>
                    <div className="details">
                      <h2>
                        Raphael Katana
                        {' '}
                        <br />
                        <span>MUSICIAN</span>
                      </h2>
                    </div>
                </div>
              </div>
                <div className="card-test">
                  <div className="content">
                    <p>The website is very easy to use and very helpful while buying bus tickets in Rwanda. I recommend it to everyone.</p>
                      <div className="image">
                        <img src={avatarWoman} alt="" />
                      </div>
                      <div className="details">
                        <h2>
                          Sharon Wayne
                          {' '}
                          <br />
                          <span>HR MANAGER</span>
                        </h2>
                      </div>
                  </div>
                </div>
                  <div className="card-test">
                    <div className="content">
                      <p>The website is very functional. You can buy bus tickets in advance so it’s helpful while organizing the trip from abroad.</p>
                        <div className="image">
                          <img src={avatarWoman} alt="" />
                        </div>
                        <div className="details">
                          <h2>
                            Dean Winchester
                            {' '}
                            <br />
                            <span>FRONT-END ENGINEER</span>
                          </h2>
                        </div>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </div>
);

export default Home;
