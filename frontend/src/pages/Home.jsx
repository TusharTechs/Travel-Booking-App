import React from 'react';
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import worldImg from '../assets/images/world.png';
import heroVideo from '../assets/images/hero-video.mp4';
import experienceImg from '../assets/images/experience.png';

import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return (
    <>
    {/* ==========hero section start================== */}
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className='hero__content'>
                        <div className='hero__subtitle d-flex align-items-center'>
                            <Subtitle subtitle={'Know Before You Go'} />
                            <img src={worldImg} alt='' />
                        </div>
                        <h1>Traveling opens the door to creating
                            <span classname='highlight'> memories</span>
                        </h1>
                        <p>Traveling is a great way to explore new places, try new things, and create unforgettable memories. But before you embark on your journey, it's important to be prepared. That's why we've created our 'Know Before You Go' guide. Our guide provides you with all the essential information you need to know before you set off, including visa requirements, local customs, safety tips, and more. We want to make sure that you have a safe and enjoyable trip, and our guide is designed to help you do just that. With our 'Know Before You Go' guide, you can travel with confidence and peace of mind, knowing that you're well-informed and prepared for whatever comes your way.</p>
                    </div>
                </Col>

                <Col lg='2'>
                    <div className='hero__img-box'>
                        <img src={heroImg} alt='' />
                    </div>
                </Col>
                <Col lg='2'>
                    <div className='hero__img-box hero__video-box mt-4'>
                        <video src={heroVideo} controls/>
                    </div>
                </Col>
                <Col lg='2'>
                    <div className='hero__img-box mt-5'>
                        <img src={heroImg02} alt='' />
                    </div>
                </Col>
                <SearchBar />
            </Row>
        </Container>
    </section>

    {/* ==========hero section end================== */}

    <section>
        <Container>
            <Row>
                <Col lg='3'>
                    <h5 className='services__subtitle'>What we serve</h5>
                    <h2 className='services__title'>We offer out best services</h2>
                </Col>
                <ServiceList />
            </Row>
        </Container>
    </section>

    {/* ===========featured tour section starts================== */}

    <section>
        <Container>
            <Row>
                <Col lg='12' className='mb-5'>
                    <Subtitle subtitle={'Explore'} />
                    <h2 className='featured__tour-title'>Our featured tours</h2>
                </Col>
                <FeaturedTourList />
            </Row>
        </Container>
    </section>

    {/* ===========featured tour section ends================== */}
    {/* ============experience section starts================== */}

    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className='experience__content'>
                        <Subtitle subtitle={'Experience'} />
                        <h2>With our all experience <br /> we will serve you</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <br />
                        Quas aliquam, hic tempora inventore suscipit unde.
                        </p>
                    </div>
                    <div className='counter__wrapper d-flex align-items-center gap-5'>
                        <div className='counter__box'>
                            <span>12k+</span>
                            <h6>Successful Trip</h6>
                        </div>
                        <div className='counter__box'>
                            <span>2k+</span>
                            <h6>Regular clients</h6>
                        </div>
                        <div className='counter__box'>
                            <span>15+</span>
                            <h6>Years of experience</h6>
                        </div>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className='experience__img'>
                        <img src={experienceImg} alt='' />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>

    {/* ============experience section ends================== */}

    {/* =============gallery section starts================== */}

    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <Subtitle subtitle={'Gallery'}/>
                    <h2 className='gallery__title'>Visit our customers tour gallery</h2>
                </Col>
                <Col lg='12'>
                    <MasonryImagesGallery />
                </Col>
            </Row>
        </Container>
    </section>

    {/* =============gallery section ends================== */}

    {/* ==============testimonial section start=============== */}

    <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <Subtitle subtitle={'Fans Love'} />
                    <h2 className='testimonial__title'>What our fans say about us</h2>
                </Col>
                <Col lg='12'>
                    <Testimonials />
                </Col>
            </Row>
        </Container>
    </section>

    {/* ==============testimonial section ends=============== */}

    <Newsletter />
    </>
  )
};

export default Home;