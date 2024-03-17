import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

export default function useUser() {
  const { data, error } = useSWR(`/api/users/me`);
  const router = useRouter();
  useEffect(() => {
    if (data && !data.ok) {
      router.replace("/enter"); // push의 경우 브라우저가 history를 남김, replace는 history를 남기지 않음
    }
  }, [data, router]);

  return { user: data?.profile, isLoading: !data && !error };
}
