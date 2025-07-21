import Navigation from './navigation';
import '../assets/Home.css';
import img from '../assets/images/Malcom2.png';
import fire from '../assets/images/fire.gif';
import ball from '../assets/images/fireball.gif';
import debug from '../assets/images/Debug.gif';
import print from '../assets/images/fingerprint.gif';
import { useInView } from 'react-intersection-observer'

function Home() {
  const { ref:malcomref,inView:malcomview } = useInView();
  const { ref:com,inView:comView } = useInView();
  const {ref:balli,inView:inball} = useInView();

  

  return (
    <div className="Home">
      <Navigation className="m-11"/>
      {/* <img src={img} className='mx-auto mt-2 w-3/4 h-2/4 sm:w-3/4 sm:h-2/4 md:w-3/4 md:h-3/4' alt="AK"></img> */}
      <h1 ref={malcomref} className={`font-Dharma md:mt-0 mt-28 tracking-wide md:text-[17rem] xl:text-[20rem] text-9xl text-[#f2cefc] font-extrabold text-center ${malcomview ? 'animate-fadeInLeft' : ''}`}>
  MALCOM
</h1>
      <h2 ref={com} className={`font-Dharma  text-7xl -top-6  md:text-9xl relative md:-top-10 tracking-widest text-[#f2cefc] font-extrabold text-center ${comView ? 'animate-fadeInRight':''} `}>COMPANY</h2>
      <div ref={balli} className={`flex items-center justify-around mt-10 ${inball?'animate-fadeInUp delay-150':''}` }>
        <img src={fire} className={`w-14  border-2 rounded-xl `}></img>
        <img src={ball}  className={`w-14  border-2 rounded-xl `}></img>
        <img src={debug} className={`w-14  border-2 rounded-xl`}></img>
        <img src={print}  className={`w-14 border-2 rounded-xl`}></img>
      </div>

    </div>

    
  );
}

export default Home;
