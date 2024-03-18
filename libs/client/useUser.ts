import { User } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

interface ProfileResponse {
  ok: boolean;
  profile: User;
}

export default function useUser() {
  const router = useRouter();
  const { data, error } = useSWR<ProfileResponse>(
    router.pathname !== "/enter" ? `/api/users/me` : null
  );
  console.log(error);
  useEffect(() => {
    if (router.pathname !== "/enter") {
      if (data && !data.ok) {
        router.replace("/enter"); // push의 경우 브라우저가 history를 남김, replace는 history를 남기지 않음
      }
    }
  }, [data, router]);

  return { user: data?.profile, isLoading: !data && !error };
}
