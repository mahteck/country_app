import CountryData from '../components/CountryData';
import Navbar from '../components/Navbar'
export default function Country() {
  const countries = ['canada', 'france', 'brazil', 'japan', 'nigeria'];

  return (
    <div > 
      <Navbar/>
      <h1 className="flex justify-center items-center text-center text-2xl font-bold text-black">Here is Country List</h1>

      <h1 className="flex justify-center items-center font-bold"> <CountryData/></h1>
    </div>
  );
}