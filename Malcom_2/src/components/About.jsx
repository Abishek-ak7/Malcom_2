import { useState, useEffect } from 'react';
import keyboard from '../assets/images/SVG (1).png';

function About() {
  const content =
    `  To revolutionize access to CyberSecurity solutions and knowledge, empowering every individual to unleash their digital resilience fully. Through collaboration, innovation, and a steadfast dedication to inclusivity, we aspire to fortify a more secure and inspiring digital world.`;

  const [visibleText, setVisibleText] = useState(Array(content.length).fill(false));

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setVisibleText(prevVisibleText => {
        const newVisibleText = [...prevVisibleText];
        newVisibleText[index] = true;
        return newVisibleText;
      });
      index++;
      if (index === content.length) clearInterval(intervalId);
    }, 100);

    return () => clearInterval(intervalId);
  }, [content.length]);

  return (
    <div className='md:mt-10 bg-black md:pt-10 '>
      <div className="flex flex-col  justify-center">
        <div className="md:w-screen lg:w-full w-full  md: max-w-8xl md:h-1/2 md:pt-16 px-16 md:mx-auto  ">
          <p className="font-Arial font-semibold lg:text-4xl md:text-2xl leading-relaxed text-justify lg:ml-20 sm:text-2xl  xl:text-4xl ">
            {content.split('').map((letter, index) => (
              <span
                key={index}
                style={{
                  transition: 'color 1.5s', // Use transition instead of animation
                  color: visibleText[index] ? 'rgb(255,255,255)' : 'rgb(207, 159, 255)',
                }}
              >
                {letter}
              </span>
            ))}
          </p>
        </div>
        <div className=''>
          <img src={keyboard} className='mx-auto md:p-10 sm:py-10 w-3/4' alt="keyboard" />
        </div>
      </div>
    </div>
  );
}

export default About;
