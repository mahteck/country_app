import Link from 'next/link';
import Navbar from './components/Navbar'
export default function Home() {

  return (
    <div> 
      <Navbar/>
      <h1 className="flex justify-center items-center text-center text-2xl font-bold text-black m-2">Welcome To My Country App</h1>
      <h1 className="flex justify-center items-center m-2"><b>This Is Build By Next.js</b></h1>
      <h1 className="flex justify-center items-center text-black"><b>Click here for Country List</b></h1><br />
     <div className="flex justify-center items-center">
     <button className="bg-black border-yellow-300 border-2 p-1 rounded-md hover:text-red-500">
      <Link className="font-bold" href="./country">show Country list</Link></button>
     </div> 

    </div>
  );
}
 
