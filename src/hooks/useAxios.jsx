import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (url, search = null) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async (url) => {
      try {
        const response = await axios.get(`${url}${search}`);
        setData(response.data);
        setLoading(false);
        setError("");
      } catch (err) {
        setLoading(false);
        setData([]);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getData(url);
  }, [url, search]);

  return { data, loading, error };
};

export default useAxios;
