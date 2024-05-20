import './App.css';
import Weather from './components/Weather';

function App() {
  return (
    <div className='app text-center mx-auto mt-[50px] mb-0 w-[90%] max-w-[700px] h-[470px] rounded-[20px] px-[20px] py-[15px] bg-green-500'>
      <Weather />
    </div>
  );
}

export default App;
