import React from "react";
import Navbar from '../components/Navbar'
export default function About(){
    return( 
     <div>
        <Navbar/>
       <h1 className="flex justify-center item-center text-2xl font-bold text-center m-1">About Us</h1>
       <p className="flex justify-center item-center m-2 text-black font-bold text-center"> My name is Shoaib,I am Web Developer Specializing in
        building responsive and functional websites.I specialize in front-end technologies such as HTML, CSS, JavaScript, TypeScript, 
       and have a strong interest in UX/UI design. I'm always eager to learn new technologies 
       and improve my skills to stay up-to-date with industry trends. 
       you can find me via email gmail and other at LinkedIn.
       </p>
     </div>

    );
}