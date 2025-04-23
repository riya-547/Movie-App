import { Link } from "react-router-dom" ;

import axios from "../../utils/axios";
import  { useEffect, useState, useCallback } from "react";
import noimage from "/noimage.png"


const Topnav = () => {
const [query, setquery] = useState("");
 const [searches, setsearches] = useState([]);

const GetSearches =useCallback( async () => {
    try{
  const { data } = await axios.get(`/search/multi?query=${query}`);
  
  setsearches(data.results);
    } catch (error) {
  console.log("Error: ", error);
    }
  }, [query]);
  
  useEffect(() => {
    GetSearches();
  }, [GetSearches]);
  

  return (
    <div className="w-[70%] h-[10vh] relative flex mx-auto items-center">
<i className="text-zinc-400 text-3xl ri-search-line"></i>
<input onChange={(e) => setquery(e.target.value)}
value={query}
className=" w-[50%] mx-10 p-5 text-xl outline-none border-none text-white" type="text"
 placeholder="Search anything"/>
{
query.length > 0 && (
    <i onClick={()=>setquery("")}
     className="text-zinc-400 text-3xl ri-close-fill"></i>)
     }
<div className="z-[100] absolute w-[55%] max-h-[50vh] bg-zinc-200 top-[100%] left-[8%] rounded overflow-auto">
{
searches.map((s, i) => (
  <Link 
  to={`/${s.media_type}/details/${s.id}`}
key={i} 
     className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 inline-block  w-[100%] p-10 flex justify-start items-center border-b-2 border-zinc-100">
<img 
      className="w-[13vh] h-[15vh] object-cover rounded shadow-lg "
src={
  s.backdrop_path || 
  s.profile_path ? `https://image.tmdb.org/t/p/original/${
           s.backdrop_path || s.profile_path
          }`: noimage
        }
 alt="" />
<span className="ml-30 absolute ">
  {s.name || 
             s.title ||
                        s.original_name 
                                       || s.original_title
 }
 </span>
</Link> 
))}
</div>
</div>
);
};
export default Topnav;