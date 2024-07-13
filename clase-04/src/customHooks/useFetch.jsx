import { useEffect, useState } from "react";

const useFetch= (url) => {
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(() => {
        fetch(url)
            .then(response =>{
                console.log(response);
                if(!response.ok){
                    throw new Error(`HTTP error status: ${response.status}`)
                }
                return response.json();
            })
            .then(data =>{
                console.log(data)
                setData(data);
                setLoading(false);
            })
            .catch(error=>{
                setError(error);
                setLoading(false);
            })
    },[url]);

    return {data, loading, error}
};

export default useFetch;