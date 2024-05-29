import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Scrollbar, A11y, EffectCube } from 'swiper/modules';
import radial from '../assets/images/gradient-radial.png';
import '../App.css'

const CustomerReviewsSection = () => {

  return (
    <div className="Swipe">
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
          <div className=' -top-28 relative'>
          <Swiper
     modules={[Navigation, Scrollbar, A11y, EffectCube]}
     spaceBetween={50}
     slidesPerView={1}
     effect="cube"
     speed={2000} 
     navigation
     scrollbar={{ draggable: true }}

    >
      <SwiperSlide className=''> 
                <p className='p-8 w-1/3 mx-auto  border-2 border-purple-800 text-lg'>
                  The U.S intelligence community has spent an enormous amount of resources on collection but the sheer
                  volume that returns is a huge problem. 
                  <br />
                    Scale's LLMs are the tool that will allow the IC to finally and fully exploit all of that intelligence
                    that has been collected.
  
                </p>
</SwiperSlide>
      <SwiperSlide>                
                <p className=' p-8 w-1/3 mx-auto  border-2 border-purple-800 text-lg '>
                  The U.S intelligence community has spent an enormous amount of resources on collection but the sheer
                  volume that returns is a huge problem. 
                 <br />
                    Scale's LLMs are the tool that will allow the IC to finally and fully exploit all of that intelligence
                    that has been collected.
                  
                </p>
</SwiperSlide>
      <SwiperSlide>                
                <p className=' p-8 w-1/3 mx-auto  border-2 border-purple-800 text-lg'>
                  The U.S intelligence community has spent an enormous amount of resources on collection but the sheer
                  volume that returns is a huge problem. 
                <br />
                    Scale's LLMs are the tool that will allow the IC to finally and fully exploit all of that intelligence
                    that has been collected.

                </p>
</SwiperSlide>
      <SwiperSlide> 
               <p className='p-8 w-1/3 mx-auto  border-2 border-purple-800 text-lg'>
                  The U.S intelligence community has spent an enormous amount of resources on collection but the sheer
                  volume that returns is a huge problem.
       <br />
                    Scale's LLMs are the tool that will allow the IC to finally and fully exploit all of that intelligence
                    that has been collected.
            
                </p>
</SwiperSlide>
    </Swiper>
          </div>
      </section>
    </div>
  );
};

export default CustomerReviewsSection;
