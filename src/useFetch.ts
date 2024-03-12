import { useEffect, useState } from "react";

export default function (url: string) {
  const [data, setData] = useState({
    location: "",
    temperature: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response is not OK");
        }

        const { results } = await response.json();
        const [{ name, TD }] = results;

        setData({
          location: name,
          temperature: TD,
        });
      } catch (error) {
        const message = (error as Error).message;
        setErrors(() => message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {
    data,
    loading,
    errors,
  };
}
