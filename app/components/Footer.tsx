
import { FaLinkedin ,FaG } from "react-icons/fa6";

export default function Footer() {
    return (
      <footer className="bg-black border-2 border-yellow-300 text-yellow font-bold p-1 w-full fixed bottom-0  ">
        <div className="flex justify-center items-center ">
          <p>&copy; 2024 My Country App. All rights reserved.</p> 
          <a href="https://www.linkedin.com/in/beena-anum-2b2963254" target="_blank">
          <FaLinkedin size={24} className="hover:text-blue-700 p-1"/> 
          </a> 
          <a href="https://beenaanum@gmail.com" target="_blank">
          <FaG size={24} className="hover:text-blue-700 p-1"/></a>

        </div>
      </footer>
    );
  }
  
