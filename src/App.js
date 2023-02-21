import { useState } from 'react';
import './App.css';

function App() {
  const [topButton, setTopButton] = useState(false)
  const [bottomButton, setBottomButton] = useState(false)
  const [leftButton, setLeftBottom] = useState(false)
  const [rightButton, setRightBottom] = useState(false)

  const handleTop = () => {
    setTopButton(true);
    setBottomButton(false);
    setLeftBottom(false);
    setRightBottom(false);
  }
  const handleBottom = () => {
    setBottomButton(true);
    setTopButton(false);
    setLeftBottom(false);
    setRightBottom(false);
  }
  const handleLeft = () => {
    setLeftBottom(true);
    setBottomButton(false);
    setTopButton(false);
    setRightBottom(false);
  }
  const handleRight = () => {
    setRightBottom(true);
    setBottomButton(false);
    setTopButton(false);
    setLeftBottom(false);
  }

  return (
    <div className='container mx-auto'>
      <div className='flex justify-center items-center h-screen'>
        <div className={`h-[50px] w-[50px] rounded-full bg-red-700 relative  ${topButton && "mb-[150px] duration-100"} ${bottomButton && "mt-[150px] duration-100"} ${leftButton && "mr-[150px] duration-100"} ${rightButton && "ml-[150px] duration-100"}`}>
        </div>
        <button onClick={handleTop} className='bg-green-700 px-3 rounded-md text-white absolute mb-[350px] mr-[10px]'>top</button>
        <button onClick={handleBottom} className='bg-green-700 px-1 rounded-md text-white absolute mt-[350px] mr-[10px]'>bottom</button>
        <button onClick={handleLeft} className='bg-green-700 px-4 rounded-md text-white absolute ml-[-350px]'>left</button>
        <button onClick={handleRight} className='bg-green-700 px-3 rounded-md text-white absolute ml-[350px]'>right</button>
      </div>

    </div>
  );
}

export default App;
