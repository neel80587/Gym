import React from "react";
import "../membership/membership.css";
import Footer from "../footer/Footer";
import CLICK from '../../assets/logos/click.png'

const Pricing = () => {
  return (
    <section id="membership">
      <div className="membership-container">
          <h1>
            It's your time to <span>strike!</span>
          </h1>
          <h2 className="plans-h2">Membership plans</h2>

        <div className="membership-cards">
          <div className="membership-card">
            <p className="price">₹600</p>
            <p className="per_month">one month</p>
            <ul>
              <li> - 10 entries</li>
              <li> - Ladies zone</li>
              <li> - Access to boxing gym</li>
            </ul>
            <div className="btn-basic">JOIN</div>
          </div>

          <div className="membership-card-strike">
            <p className="price">₹1800</p>
            <p className="per_month">Half Year</p>
            <ul>
              <li> - Unlimited access</li>
              <li> - Ladies zone</li>
              <li> - Access to boxing gym</li>
              <li> - Group lessons</li>
              <li> - Free drinks</li>
              <li> - Strike merchandise</li>
            </ul>
            <div className="btn-strike">JOIN</div>
          </div>

          <div className="membership-card">
            <p className="price">₹4000</p>
            <p className="per_month">Yearly</p>
            <ul>
              <li> - 20 entries</li>
              <li> - Ladies zone</li>
              <li> - Access to boxing gym</li>
              <li> - Group lessons</li>
              <li> - Free drinks</li>
            </ul>
            <div className="btn-pro">JOIN</div>
          </div>

        </div>
          <h2 className="voucher-h2">Still not sure?</h2>
          <div className="btn-voucher">Get 1 free entry<img src={CLICK} alt="click" className="voucher-click" /></div>
      </div>
      <Footer />
    </section>
  );
};

export default Pricing;
