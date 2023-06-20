import React from 'react';
import './newsletter.css';

import { Container, Row, Col } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';

const Newsletter = () => {
  return (
    <>
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className='newsletter__content'>
                        <h2>Subscribe now to get useful traveling information.</h2>
                        <div className='newsletter__input'>
                            <input type='email' placeholder='Enter your email' />
                            <button className='btn newsletter_btn'>Subscribe</button>
                        </div>
                        <p>If you're a frequent traveler or someone who loves to explore new destinations, subscribing to our travel newsletter is a great way to stay up-to-date with the latest travel trends and get useful information about your favorite destinations. By subscribing, you'll receive regular updates on travel news, tips and tricks, exclusive deals, and much more.
<br/>
<br/>
Our team of experienced travelers and industry experts curate the content of our newsletter to ensure that it's both informative and engaging. From packing hacks to destination guides, we cover a wide range of topics that are relevant to all types of travelers. Plus, we'll keep you in the loop about the latest travel restrictions, visa requirements, and other important information that could affect your trip.
<br/>
<br/>
And the best part? It's completely free! All you have to do is enter your email address and hit subscribe. You'll receive our newsletter directly in your inbox, and you can unsubscribe at any time if you no longer wish to receive it. So what are you waiting for? Subscribe now to start receiving all the latest and greatest travel information straight to your inbox!</p>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className='newsletter__img'>
                        <img src={maleTourist} alt='' />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  );
};

export default Newsletter;