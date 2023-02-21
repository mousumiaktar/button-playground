import './App.css';

function App() {
  return (
    <div>
      <div className='flex justify-center items-center h-screen'>
        <div className={`h-[50px] w-[50px] rounded-full bg-green-700`}>
        </div>
      </div>

      <div>
        <button className='bg-green-700 text-white mr-2'>top</button>
        <button  className='bg-green-700 text-white mr-2'>bottom</button>
        <button className='bg-green-700 text-white mr-2'>left</button>
        <button className='bg-green-700 text-white mr-2'>right</button>
      </div>
    </div>
  );
}

export default App;
