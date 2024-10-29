import Link from "next/link";
import React from "react";
export default function Page(){
    return(
        <nav className="flex justify-center item-center bg-black border-2 border-yellow-300 p-1 font-bold">
        <Link className="hover:text-red-500" href="/">Home</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
        <Link className="hover:text-red-600" href="/about">About</Link>&nbsp;|&nbsp;&nbsp;
        <Link className="hover:text-red-600" href="/contact">Contact</Link>&nbsp;|&nbsp;&nbsp;
        <Link className="hover:text-red-600" href="/country">Country</Link>
        </nav>
        
    );
}
