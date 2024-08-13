import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Scrollbar, A11y, EffectCube } from 'swiper/modules';
import radial from '../assets/images/gradient-radial.png';
import '../App.css'

const CustomerReviewsSection = () => {

  return (
    <div className="Swipe" id='review'>
      <section className="relative py-16 text-center text-white">
        <div className="absolute inset-x-0 top-10 flex justify-center">
          <div>
            <button className="bg-gray-700 bg-opacity-40 text-purple-500 px-16 py-2 rounded-full text-sm tracking-widest">
              CUSTOMER REVIEWS
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center mt-12 relative"> {/* Adjusted margin */}
          <h2 className="text-3xl font-semibold "  >Hear it from our Customers</h2>
          <img className="w-3/6 h-1/6 -mt-20  p-5 relative" src={radial} alt="Radial Gradient" /> 

          </div>
          <div className=' md:-top-36 relative  mt-20 md:mt-28 lg:mt-16 '>
          <Swiper
     modules={[Navigation, Scrollbar, A11y, EffectCube]}
     spaceBetween={50}
     slidesPerView={1}
     effect="cube"
     speed={1000} 
     navigation
     scrollbar={{ draggable: true }}

    >
      <SwiperSlide className=''> 
                
                <p className='p-5 lg:w-1/3 mx-auto border-2 border-purple-800 md:text-lg w-3/4 md:mt-10'>

                  <h2 className='flex items-center justify-center pb-3 underline'>Bug Bounty</h2>
                    Malicious hackers don't always follow a predefined security methodology like penetration 
                    testers, and Unlike automated tools which  only scratch the surface.  
                  <br />
                    We connect with the brightest cybersecurity researchers on earth and beat cybercriminals by 
                    staying on top of the evolving threat landscape.
  
                </p>
                
</SwiperSlide>
      <SwiperSlide className=''>                
                <p className=' p-8 lg:w-1/3 mx-auto  border-2 border-purple-800 md:text-lg w-3/4 md:mt-10'>
                  <h2 className='flex items-center justify-center pb-3 underline'>Hacker-Friendly Hardware Devices Service</h2>
                    Discover our selection of user-friendly hardware devices designed to inspire innovation and 
                    experimentation in cybersecurity. 
                <br />
                    Our products feature open hardware designs, accessible interfaces, and flexible licensing, 
                    fostering creativity for security researchers and hobbyists alike.
                  
                </p>
</SwiperSlide>
      <SwiperSlide className=''>                
              <p className=' p-8 lg:w-1/3 mx-auto  border-2 border-purple-800 md:text-lg w-3/4 md:mt-10 '>
                <h2 className='flex items-center justify-center pb-3 underline'>Crowdsourcing</h2>
                  Utilize our crowdsourcing platform to harness the collective intelligence of diverse contributors, enabling rapid problem-solving and innovation across various domains. 
              </p>
</SwiperSlide>
    </Swiper>
          </div>
      </section>
    </div>
  );
};

export default CustomerReviewsSection;
