import React from "react"
import "./contact.css"
import Footer from "../footer/Footer"
import LOCATION_CYAN from "../../assets/logos/location-cyan.png"
import PHONE_CYAN from "../../assets/logos/phone-cyan.png"
import EMAIL_CYAN from "../../assets/logos/email-cyan.png"
import CLOCK_CYAN from "../../assets/logos/clock-cyan.png"
import PRINCE from '../../assets/photos/princephoto.png'
import ADITYA from '../../assets/photos/adi.jpg'
import NEEL from '../../assets/photos/neelphoto.jpg'
import CLARA from '../../assets/photos/clara.png'
import LEO from '../../assets/photos/leo.png'
import MARIANA from '../../assets/photos/mariana.png'
import CHEVRON from '../../assets/logos/chevron-up.png'
import classNames from 'classnames';


const contactData = [
  {
    avatar: PRINCE,
    name: 'Prince',
    role: 'Developer',
    description: '',
    gender: 'male'
  },
  {
    avatar: ADITYA,
    name: 'Aditya',
    role: 'Developer',
    description: '',
    gender: 'female'
  },
  {
    avatar: NEEL,
    name: 'Neel',
    role: 'Developer',
    description: '',
    gender: 'male'
  },
  
]

const Contact = () => {
  return (
  <div className="container">
    <section id="contact">
      <h1 className="contact-title">Reach out to us!</h1>
      <div className="contact-container">
          <div className="contact-london">
            <h2>The Fit Club</h2>
            <ul>
              <li>
                <img src={LOCATION_CYAN} alt="" />
                Virar
              </li>
              <li>
                <img src={PHONE_CYAN} alt="" />
                +91 8828923949
              </li>
              <li>
                <img src={EMAIL_CYAN} alt="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWsmDNbKMLHWZxTKCGqdQqdCgGXnSQdRjjNgkBdpGsGssQZVMZxhPQHnkKBSTXHbqjfjmztjQ" />
                kiritav327@avzong.com
              </li>
              <li>
                <img src={CLOCK_CYAN} alt="" />
                MO - SU: 5:00 am- 10:00 pm
              </li>
            </ul>
          </div>

        <form action="" onSubmit="">
          <div className="contact-form-bg">
            <div className="contact-form">
              <div className="first-row">
                <div className="name">
                  <p className="input-text">Full name</p>
                  <input type="text" name="fullName" required />
                </div>

                <div className="email">
                  <p className="input-text">Email</p>
                  <input type="text" name="email" required />
               </div>
                <div className="message">
                </div>
              </div>
              <div className="second-row">
                <p className="input-text">Your message</p>
                  <textarea
                    clasname="message"
                    name="message"
                    id=""
                    rows='8'
                    required
                  ></textarea>
                </div>
              <button className="send-btn">
                  <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=DmwnWsmDNbKMLHWZxTKCGqdQqdCgGXnSQdRjjNgkBdpGsGssQZVMZxhPQHnkKBSTXHbqjfjmztjQ">Send</a> 
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>

    <section id="team">
      <h1 className="team-title">Meet the team</h1>
      <div className="team-container">
            {
          contactData.map(({avatar, name, role, description, gender}, index) => {

            const className_name = classNames({
              'john': name === 'John',
              'anya': name === 'Anya',
              'greg': name === 'Greg',
              'clara': name === 'Clara',
              'leo': name === 'Leo',
              'mariana': name === 'Mariana'
            });

            return (
                <div key={index} className={`team-card ${gender === 'male' ? 'male' : 'female'} ${className_name}`}>
                  <div class="img-box">
                    <img className="avatar" src={avatar} alt='avatar' />
                  </div>
                  <h3 className="role">{role}</h3>
                  <div class="content-box">
                  <img src={CHEVRON} className="chevron" alt="chevron"></img>
                    <h2 className="name">{name}</h2>
                    <div class="description-box">
                      <p className='description'>{description}</p>
                    </div>
                    <a href="">join</a>
                  </div>
                </div>
            )
          })
        }
      </div>
    </section>
    <Footer />
</div>
  );
};

export default Contact;
