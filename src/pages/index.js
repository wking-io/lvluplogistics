import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Video } from 'cloudinary-react';
import { validate } from 'email-validator';
import VisuallyHidden from '@reach/visually-hidden';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { InstagramIcon, QuoteIcon } from '../components/icons';
import { Image } from '../components/images';
import { Field, Textarea } from '../components/form';

const verify = ({ name, email, message }) => validate(email) && [ message, name ].every((field) => field.length > 0);

const IndexPage = () => {
  const [ name, updateName ] = useState('');
  const [ email, updateEmail ] = useState('');
  const [ message, updateMessage ] = useState('');
  const isValid = verify({ email, message, name });
  return (
    <Layout label="Home">
      <SEO />
      <Video
        className="object-cover top-0 w-full h-screen fixed"
        style={{ zIndex: '-1' }}
        cloudName="taxx-wiz"
        publicId="lvl_hero"
        loop="true"
        autoplay="true"
        muted="true"
        secure="true"
      />
      <section className="flex hero">
        <div className="flex-1 lg:aspect-16:9">
          <div className="video-overlay-dark h-full lg:aspect-content flex flex-col justify-end lg:flex-row lg:items-end lg:justify-between p-8 lg:py-0 lg:pl-24 lg:pr-16">
            <div className="flex flex-col justify-end lg:justify-start w-full lg:w-5/6 flex-1 pb-16 lg:pb-48">
              <h2 className="text-white text-3xl md:text-4xl xl:text-6xl font-bold tracking-tight leading-tight">
                A Company Who Gets It Right The First Time
              </h2>
              <div className="mt-16 flex flex-col md:flex-row items-start md:items-center">
                <Link
                  className="px-8 py-3 md:py-4 bg-primary hover:bg-primary-dark text-base md:text-lg font-bold uppercase text-white tracking-tight"
                  to="/#contact"
                >
                  Partner With Us
                </Link>
                <Link
                  className="mt-8 md:ml-8 md:mt-0 underline hover:no-underline text-base md:text-lg font-bold text-white tracking-tight"
                  to="/#contact"
                >
                  Want to learn more? Contact us now
                </Link>
              </div>
            </div>
            <ul className="flex flex-row lg:flex-col items-center justify-start lg:justify-end pb-6 lg:pb-16">
              <li className="h-4">
                <a className="text-white hover:text-instagram" href="https://www.instagram.com/lvluplogistics/">
                  <InstagramIcon className="h-full w-auto" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:block w-16 bg-white" />
      </section>
      <section className="py-32 bg-white">
        <div className="w-5/6 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse justify-between md:items-center">
            <Image
              image="trusted"
              className="w-full md:w-2/5 h-auto flex-shrink-0 md:ml-16"
              imgStyle={{ width: '100%', height: 'auto' }}
            />
            <div className="flex-1 mt-8 md:mt-0">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Trusted Delivery</h3>
              <p className="text-grey-500 leading-relaxed">
                We thrive under pressure! Whether a dedicated lane or same day delivery, you can be confident in our
                fleet of trucks to meet all of your scheduled or emergency needs while delivering your products.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between md:items-center mt-12">
            <Image
              image="dedicated"
              className="w-full md:w-2/5 h-auto flex-shrink-0 md:mr-16"
              imgStyle={{ width: '100%', height: 'auto' }}
            />
            <div className="flex-1 mt-8 md:mt-0">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Dedicated Resource</h3>
              <p className="text-grey-500 leading-relaxed">
                Need someone you can count on? Our skilled team of operation managers can assign your daily, weekly, or
                monthly routes to dedicated trucks in our fleet. We also use our team of degreed engineers and analysts
                to determine the most cost efficient and safest way to move your product.
              </p>
            </div>
          </div>
          <div className="md:text-center mt-16">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Join A Winning Team</h3>
            <p className="text-grey-500 leading-relaxed">
              At LVL UP we believe in continuous improvement. Uniting with us is partnering with a company:
            </p>
          </div>
          <div className="flex-1 mt-8 md:mt-0">
            <ul className="bullet-wrapper mt-6 text-sm">
              <li className="bullet">Owned by Degreed Engineers</li>
              <li className="bullet">Six Sigma Black Belt Certified</li>
              <li className="bullet">Project Management Certified</li>
              <li className="bullet">Finance Professionals</li>
              <li className="bullet">DBE Certified</li>
              <li className="bullet">SBA 8(a) Certified</li>
              <li className="bullet">Registered Minority Owned Business</li>
              <li className="bullet">Access to over 30 years experience</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center mt-16">
          <Link
            to="/#contact"
            className="inline-block px-16 py-4 bg-primary hover:bg-primary-dark text-lg font-bold uppercase text-white tracking-tight"
          >
            Partner With Us
          </Link>
        </div>
      </section>
      <section id="about" className="bg-white pb-48">
        <div className="w-5/6 max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold tracking-tight mb-4">About us</h3>
          <p className="text-grey-500 leading-relaxed">
            LVL UP Logistics is a company headquartered in Birmingham, AL. Our #1 commitment to our customer is to move
            their fright in a timely and cost efficient way throughout the southeast region of the United States.
          </p>
          <Image image="about" className="hidden md:block mt-16 w-full h-64" />
          <ul className="flex flex-col md:flex-row md:-mx-4 mt-6 md:mt-12">
            <li className="product-detail">
              <p className="text-grey-500 leading-relaxed md:mt-4">
                Currently, there is a shortage of trucks/drivers across the country. LVL UP has helped reduce that
                shortage by providing a fleet trucks, and reliable drivers that allow companies to ship goods in a fast,
                safe, and reliable fashion.
              </p>
            </li>
            <li className="product-detail mt-4 md:mt-0">
              <p className="text-grey-500 leading-relaxed mt-4">
                "Leaders Win Through Logistics." We understand how much goes into the day to day operation of running
                your business. Our goal at LVL UP is to simplify the logistics branch of your operations, so that you
                can focus on other items to help take your business to the next level.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section id="testimonials" className="bg-white">
        <h3 className="relative z-10 flex flex-col items-center text-2xl sm:text-3xl md:text-5xl tracking-tight leading-none font-bold mx-auto -mt-12 w-11/12 sm:w-full">
          <span className="bg-white p-4 pb-1 md:py-1 md:px-2">Don't take our word.</span>
          <span className="bg-white p-4 pt-0 md:py-1 md:px-2">
            Hear from <span className="text-primary">happy customers</span>.
          </span>
        </h3>
        <div className="relative testimonial pt-16 pb-8">
          <ul className="relative z-20 flex flex-wrap -mt-8 pb-8 md:pb-12 w-5/6 max-w-5xl mx-auto grid">
            <li className="grid-item">
              <blockquote class="flex flex-col items-start h-full">
                <QuoteIcon className="text-grey-300 h-12 pb-1 w-auto" />
                <p className="text-grey-700 leading-relaxed mt-6 flex-1">
                  LVL UP has proved to be a very reliable carrier. Always on time, and always willing to go the extra
                  mile to get the delivery done.
                </p>
                <div className="h-px bg-grey-300 w-24 mt-4" />
                <p class="flex items-center justify-between mt-4 w-full">
                  <cite className="not-italic text-lg font-bold block">Timothy Choquette, Avery Logistics</cite>
                </p>
              </blockquote>
            </li>
            <li className="grid-item">
              <blockquote class="flex flex-col items-start h-full">
                <QuoteIcon className="text-grey-300 h-12 pb-1 w-auto" />
                <p className="text-grey-700 leading-relaxed mt-6 flex-1">
                  Michael Banks is a driver for LVL UP who performs beyond expectations every time. It is always a{' '}
                  <strong>pleasure</strong> to work with LVL UP and their entire team.
                </p>
                <div className="h-px bg-grey-300 w-24 mt-4" />
                <p class="flex items-center justify-between mt-4 w-full">
                  <cite className="not-italic text-lg font-bold block">Perry Langston, Playon Products</cite>
                </p>
              </blockquote>
            </li>
          </ul>
        </div>
        {/* <div className="flex items-center justify-center mt-32">
          <Link
            to="/hiring"
            className="inline-block px-16 py-4 bg-primary hover:bg-primary-dark text-lg font-bold uppercase text-white tracking-tight"
          >
            Read More Testimonials
          </Link>
        </div> */}
      </section>
      <section className="final">
        <div className="w-5/6 pt-40 pb-8 max-w-5xl mx-auto text-center flex flex-col items-center justify-center">
          <h3 className="text-3xl md:text-4xl lg:text-5xl text-center text-white font-bold tracking-tight leading-tight">
            Now that you know what we are about. Let us help you get your freight where it belongs.
          </h3>
          <Link
            className="inline-block px-16 py-4 bg-grey-900 hover:bg-black text-base lg:text-lg font-bold uppercase text-white tracking-tight mt-12"
            to="/#contact"
          >
            Let's Partner Up
          </Link>
          <Link
            className="inline-block px-8 py-4 underline hover:no-underline text-white tracking-tight mt-20"
            to="/#contact"
          >
            Reach Out With Questions
          </Link>
        </div>
      </section>

      <section id="contact" className="bg-white py-24 md:py-32">
        <div className="w-5/6 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between -mx-8">
            <div className="flex-1 mx-8 flex flex-col items-center text-center">
              <Image image="dbe" className="w-full h-32" imgStyle={{ objectFit: 'contain' }} />
              <p className="uppercase font-bold mt-6">Disadvantaged Business Enterprise</p>
            </div>
            <div className="flex-1 mt-12 md:mt-0 mx-8 flex flex-col items-center text-center">
              <Image image="sba" className="w-full h-32" imgStyle={{ objectFit: 'contain' }} />
              <p className="uppercase font-bold mt-6">SBA 8a Certified</p>
            </div>
            <div className="flex-1 mt-12 md:mt-0 mx-8 flex flex-col items-center text-center">
              <Image image="aldot" className="w-full h-32" imgStyle={{ objectFit: 'contain' }} />
              <p className="uppercase font-bold mt-6">Minority-Owned Business in the State of Alabama</p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="bg-white pb-24 md:pb-32">
        <div className="w-5/6 max-w-6xl mx-auto flex flex-col lg:flex-row">
          <div className="flex-1 flex flex-col lg:pr-16">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-none">Contact Us</h3>
            <div className="flex flex-row flex-wrap justify-between lg:justify-start mt-6 -ml-6">
              <p className="ml-6 mt-2">
                <strong className="mr-4">Satellite Office:</strong>
                770-301-4683
              </p>
              <p className="ml-6 mt-2">
                <strong className="mr-4">Mobile:</strong>
                334-750-4362
              </p>
              <p className="ml-6 mt-2">
                <strong className="mr-4">Email:</strong>
                contact@lvluplogistics.com
              </p>
            </div>
            <form
              name="contact"
              method="POST"
              action="/contact-thank-you"
              netlify-honeypot="bot-field"
              data-netlify="true"
              data-track
              data-event-category="Contact"
              data-event-action="Submitted Message"
              data-event-label="Contact Form"
              className="flex flex-col flex-1 mt-2"
            >
              <input type="hidden" name="form-name" value="contact" />
              <VisuallyHidden>
                <label>
                  Don’t fill this out if you're human: <input name="bot-field" />
                </label>
              </VisuallyHidden>
              <Field
                name="name"
                label="Full Name"
                placeholder="Write name here..."
                value={name}
                update={updateName}
                dark
              />
              <Field
                name="email"
                label="Email Address"
                placeholder="Write email address here..."
                value={email}
                update={updateEmail}
                dark
              />
              <Textarea name="message" label="Message" value={message} update={updateMessage} dark />
              <input
                type="submit"
                className=" py-4 btn btn--primary-dark mt-8 w-full"
                value="Send Message"
                disabled={!isValid}
              />
            </form>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3331.75530164286!2d-86.78827448480257!3d33.377453880794924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8889226126fdae91%3A0x1af1f2a8c5a758c8!2s2257%20Ridgemont%20Dr%2C%20Birmingham%2C%20AL%2035244!5e0!3m2!1sen!2sus!4v1586750076766!5m2!1sen!2sus"
              width="562"
              height="600"
              frameborder="0"
              style={{ border: 0, width: '100%', height: '100%' }}
              allowfullscreen=""
              ariaHidden="false"
              tabindex="0"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
