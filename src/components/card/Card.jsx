import { useState } from 'react';

const Card = () => {
  const [card1Style, setCard1Style] = useState({});
  const [card2Style, setCard2Style] = useState({});
  const [card3Style, setCard3Style] = useState({});
  const [card4Style, setCard4Style] = useState({});
  const [textStyle, setTextStyle] = useState({});

  const handleMouseEnter = () => {
    setTextStyle({
      filter: 'blur(8px)',
      transition: 'filter 0.3s ease'
    });
    setCard1Style({
      transform: 'translateY(-100px) rotate(-4deg)',
      transition: 'transform 0.3s ease',
    });
    setCard2Style({
      transform: 'translateY(-75px) rotate(-1deg)',
      transition: 'transform 0.3s ease',
    });
    setCard3Style({
      transform: 'translateY(-55px) rotate(-2deg)',
      transition: 'transform 0.3s ease',
    });
    setCard4Style({
      transform: 'translateY(-30px) rotate(2deg)',
      transition: 'transform 0.3s ease',
    });
  };

  const handleMouseLeave = () => {
    setTextStyle({
      filter: 'none',
      transition: 'filter 0.3s ease'
    });
    setCard1Style({
      transform: 'translateY(0)',
      transition: 'transform 0.3s ease',
    });
    setCard2Style({
      transform: 'translateY(0)',
      transition: 'transform 0.3s ease',
    });
    setCard3Style({
      transform: 'translateY(0)',
      transition: 'transform 0.3s ease',
    });
    setCard4Style({
      transform: 'translateY(0)',
      transition: 'transform 0.3s ease',
    });
  };

  return (
    <div 
      className="border-2 shadow-xl overflow-hidden border-[#171717] h-80 w-80 text-white rounded-[14px] bg-[#10110e] flex flex-col"
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-24 w-full text-3xl flex justify-center items-center mt-3 text-[#60635a]" style={textStyle}>TESTIMONIALS</div>
      <div className="container w-full h-full flex flex-col justify-center items-center mb-2">
        <div className="card1 border-2 border-[#262626] rounded-[10px] flex justify-between items-center w-5/6 h-1/4 bg-[#141414] relative top-24" style={card1Style}>
          <span className='rounded-full m-2.5 h-8 w-8 bg-[#60635a]'></span>
          <div className='w-4/6 h-8 m-4 text-xl text-[#dedede]'>Cristiano</div>
        </div>
        <div className="card2 border-2 border-[#262626] rounded-[10px] flex justify-between items-center w-5/6 h-1/4 bg-[#141414] relative top-16" style={card2Style}>
        <span className='rounded-full m-2.5 h-8 w-8 bg-[#60635a]'></span>
          <div className='w-4/6 h-8 m-4 text-xl text-[#dedede]'>Jane</div>
        </div>
        <div className="card3 border-2 border-[#262626] rounded-[10px] flex justify-between items-center w-5/6 h-1/4 bg-[#141414] relative top-8" style={card3Style}>
        <span className='rounded-full m-2.5 h-8 w-8 bg-[#60635a]'></span>
          <div className='w-4/6 h-8 m-4 text-xl text-[#dedede]'>Christopher</div>
        </div>
        <div className="card4 border-2 border-[#262626] rounded-[10px] flex justify-between items-center w-5/6 h-1/4 bg-[#141414] relative top-0" style={card4Style}>
        <span className='rounded-full m-2.5 h-8 w-8 bg-[#60635a]'></span>
          <div className='w-4/6 h-8 m-4 text-xl text-[#dedede]'>Jeremy</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
