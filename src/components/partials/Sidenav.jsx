import { Link } from "react-router-dom";



const Sidenav = () => {


  return (
    
    <div className="w-[20%] h-full border-r-1 border-zinc-400 px-7 py-3">
      <h1 className="text-2xl text-white font-bold px-10">
      <i className="text-[#6556CD] ri-tv-2-fill mr-2"></i>
         <span className="text-2xl ">SCSDB</span>
      </h1>


<nav className="flex flex-col text-zinc-400 text-xl gap-1">
<h1 className="text-white font-semibold text-xl mt-5 mb-2 ">
  New Feeds
  </h1>
  <Link 
  to="/trending"
  className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
  <i className="ri-fire-fill"></i> Trending
  </Link>
  <Link
   to="/popular"
  
  className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
  <i className="ri-bard-fill"></i> Popular
  </Link>
  <Link
     to="/movie"
  className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
  <i className="ri-movie-2-fill"></i> Movies
  </Link>
  <Link 
  to="/tv"
  className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
  <i className="ri-tv-2-line"></i> Tv Shows
  </Link>
  <Link 
  to="/person"
  className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
  <i className="ri-team-fill"></i> People
  </Link>
</nav>

 <hr className="text-white mt-3"  />

<nav className="flex flex-col text-zinc-400 text-xl gap-1">
<h1 className="text-white font-semibold text-xl mt-5 mb-2">
  Website Information
  </h1>
  <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
  <i className="ri-information-2-line"></i> About SCSDB
  </Link>
  <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5">
  <i className="ri-phone-line"></i> Contact Us
  </Link>
  
  
</nav>
    </div>
    
  );
};

export default Sidenav