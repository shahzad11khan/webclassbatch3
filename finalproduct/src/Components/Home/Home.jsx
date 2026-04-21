import React, { useEffect, useState } from 'react'
import { Baseurl } from '../../Constants/Base_Url'

const Home = () => {
const [apiData, setApiData] = useState([]);
const [count, setCount] = useState(0);
// console.
// log(apiData);
const handleClick = ()=>{
  // console.log("clicked");
  setCount(count+1);
}
  const getApiData = async ()=>{
    console.log("api called..!")
  const response = await fetch(Baseurl);

   const data = await response.json();
   setApiData(data);
   
   
  }
  // getApiData();
  useEffect(()=>{
    getApiData();
    // console.log("useEffect called");
  },[])
  return (
   <div className='flex w-full bg-red-300'>
    <button onClick={handleClick}>Click</button>
  <table class="border-collapse border border-gray-400 mx-auto">
  <thead>
    <tr>
      <th class="border border-gray-300 ...">Name</th>
      <th class="border border-gray-300 ...">Email</th>
      <th class="border border-gray-300 ...">Action</th>
    </tr>
  </thead>
  <tbody>
    {apiData?.map((signleElement)=>{
      return(
        <tr>
      <td class="border border-gray-300 ...">{signleElement?.name}</td>
      <td class="border border-gray-300 ...">{signleElement?.email}</td>
      <td class="border border-gray-300 ...">edit/delete</td>
    </tr>
      )
    })}
    
   
  </tbody>
</table></div>
  )
}

export default Home
