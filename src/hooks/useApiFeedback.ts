import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

interface useApiFeedbackProps {
  url: string;
  method: "get" | "post";
}

function useApiFeedback({ url, method }: useApiFeedbackProps) {
  const [feedbackData, setFeedbackData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [refreshIndex, setRefreshIndex] = useState(0);

  const refresh = () => {
    setRefreshIndex(refreshIndex + 1);
  };

  useEffect(() => {
    let source = axios.CancelToken.source();

    setLoading(true);

    const fetchData = async () => {
      try {
        const response: AxiosResponse = await axios({
          method,
          url,
          cancelToken: source.token,
        });

        if (!source.token.reason) {
          setFeedbackData(response.data);
          setLoading(false);
        }
      } catch (error) {
        if (!axios.isCancel(error)) {
          setLoading(false);
          // Handle error appropriately, e.g., set an error state
        }
      }
    };

    fetchData();

    return () => {
      source.cancel("Request canceled");
    };
  }, [url, refreshIndex, method]);

  return [feedbackData, loading, refresh];
}

export default useApiFeedback;
