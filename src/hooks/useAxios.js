import { useEffect, useState } from 'react'
import axios from 'axios';
const useAxios = () => {
    
    const [response,setResponse]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState("");

    useEffect(()=>{
        axios.get("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies")
        .then((res)=>setResponse(res.data))
        .catch(err=>setError(err))
        .finally(()=>setLoading(false))
    },[])


  return {response,error,loading}
    
  
}

export default useAxios