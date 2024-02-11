import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useUser() {
  const [user, setUser] = useState();
  const router = useRouter();
  useEffect(() => {
    fetch(`/api/users/me`).then((response) =>
      response.json().then((data) => {
        if (!data.ok) {
          return router.replace("/enter"); // push의 경우 브라우저가 history를 남김, replace는 history를 남기지 않음
        }
        setUser(data.profile);
      })
    );
  }, [router]);

  return user;
}
