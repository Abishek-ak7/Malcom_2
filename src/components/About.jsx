import { useState, useEffect } from 'react';
import keyboard from '../assets/images/SVG (2).png';

function About() {
  const content =
    `  CyberSentinels we specialize in using our expertise to protect companies from cyber threats in a friendly and approachable manner. Our  focus is on ethical hacking practices that ensure security without compromising integrity.`;

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
    <div className='md:mt-10 -mt-60 bg-black md:pt-10' id='about'>
      <div className="flex flex-col  justify-center">
        <div className="md:w-screen lg:w-full w-full  md: max-w-8xl md:h-1/2 md:pt-16 px-16 md:mx-auto  ">
          <p className="font-roboto font-semibold lg:text-4xl md:text-2xl leading-relaxed text-justify lg:ml-20 sm:text-2xl  xl:text-4xl xl:mt-7 xl:w-3/4 xl:mx-auto">
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
