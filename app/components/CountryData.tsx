import Link from "next/link";
//countryData component to handle country list
export default function CountryData(){
//function to list countries
const getCountries = () => {
    return['canada','france','brazil','japan','nigeria'];
};
 return(
    <ul >
        {getCountries().map((country) =>(
         <li className="hover:text-black" key={country}>
         <Link href={`/country/${country}`}>
         {country.charAt(0).toUpperCase() + country.slice(1)}
         </Link>
         </li>
         
        ))}
    </ul>
 );
}