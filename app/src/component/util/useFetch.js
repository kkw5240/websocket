import { useState, useEffect } from "react";

function useFetch(url, options) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      window
        .fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setError(error);
          setLoading(false);
        });
    }, []);
  
    return { loading, data, error };
  }
  
  export default useFetch;