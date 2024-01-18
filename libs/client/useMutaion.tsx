import { useState } from "react";

interface UseMutationState {
  loading: boolean;
  data?: object;
  error?: object;
}

type UseMutationType = [(data: any) => void, UseMutationState];

function useMutation(url: string): UseMutationType {
  const [state, setState] = useState({
    loading: false,
    data: undefined,
    error: undefined,
  });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<undefined | any>(undefined);
  const [error, setError] = useState<undefined | any>(undefined);

  function mutaition(data: any) {
    setLoading(true);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) =>
        response
          .json()
          .catch(() => {})
          .then((json) => setData(json))
      )
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }

  return [mutaition, { loading, data, error }];
}

export default useMutation;
