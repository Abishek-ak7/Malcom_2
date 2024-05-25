import { useState, useEffect } from 'react';
import keyboard from '../assets/images/keyboardfx_preset_3.gif';

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
    <div className='mt-10 bg-black'>
      <div className="min-h-screen flex-col items-start justify-center">
        <div className="w-full max-w-6xl h-1/2 pt-16 px-16 mx-auto">
          <p className="font-Arial font-semibold text-4xl leading-relaxed text-justify">
            {content.split('').map((letter, index) => (
              <span
                key={index}
                style={{
                  transition: 'color 1.0s', // Use transition instead of animation
                  color: visibleText[index] ? 'rgb(255,255,255)' : 'rgb(207, 159, 255)',
                }}
              >
                {letter}
              </span>
            ))}
          </p>
        </div>
        <div className='p-10'>
          <img src={keyboard} className='mx-auto' alt="keyboard" />
        </div>
      </div>
    </div>
  );
}

export default About;
