import React from 'react';
import Slider from 'react-slick';
import ava1 from '../../assets/images/ava-1.jpg';
import ava2 from '../../assets/images/ava-2.jpg';
import ava3 from '../../assets/images/ava-3.jpg';

const Testimonials = () => {

    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    }



  return (
    <>
    <Slider {...settings}>
        <div className='testimonial py-4 px-3'>
            <p>"I've been using this travel booking app for a while now, and I have to say I'm really impressed. The app is so easy to use, and the selection of flights and hotels is fantastic. The best part, though, is the customer support - they are always available to help, and they really go above and beyond to make sure you're happy with your booking."</p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava1} className='w-25 h-25 rounded-2' alt='' />
                <div>
                <h6 className='mb-0 mt-3'>John D.</h6>
                <p>Customer</p>
                </div>
            </div>
        </div>
        <div className='testimonial py-4 px-3'>
            <p>"I'm not someone who enjoys planning trips, but this app has made it so much easier. I love how you can search for flights and hotels all in one place, and the prices are always competitive. Plus, the app is really user-friendly - even someone like me who isn't tech-savvy can use it!"</p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava2} className='w-25 h-25 rounded-2' alt='' />
                <div>
                <h6 className='mb-0 mt-3'>Sarah T.</h6>
                <p>Customer</p>
                </div>
            </div>
        </div>
        <div className='testimonial py-4 px-3'>
            <p>"I recently had to change my travel plans last minute, and I was really worried about how it would affect my bookings. But the team at this travel booking app were so helpful and accommodating - they helped me make the changes I needed and ensured I still got the best possible deal. I can't recommend them enough!"</p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava3} className='w-25 h-25 rounded-2' alt='' />
                <div>
                <h6 className='mb-0 mt-3'>David M.</h6>
                <p>Customer</p>
                </div>
            </div>
        </div>
        <div className='testimonial py-4 px-3'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id atque dignissimos delectus necessitatibus repudiandae, dolore iusto quia sequi molestias pariatur deserunt eveniet, laudantium excepturi dolorum cupiditate ipsa facere, earum culpa.</p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava1} className='w-25 h-25 rounded-2' alt='' />
                <div>
                <h6 className='mb-0 mt-3'>John Doe</h6>
                <p>Customer</p>
                </div>
            </div>
        </div>
        <div className='testimonial py-4 px-3'>
            <p>"I've used other travel booking apps before, but this one is by far the best. The selection of flights and hotels is amazing, and the prices are always really competitive. Plus, the app is really well-designed and easy to navigate. I'm a fan for life!"</p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava2} className='w-25 h-25 rounded-2' alt='' />
                <div>
                <h6 className='mb-0 mt-3'>Lia Franklin</h6>
                <p>Customer</p>
                </div>
            </div>
        </div>
    </Slider>
    </>
  );
};

export default Testimonials;