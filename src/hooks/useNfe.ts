import type { INfe, INfeData } from "@/interfaces/nfe";
import { getCookie } from "@/libs/cookies";

type cnpjcpf = {
  cnpjcpf: string;
};

export const useNfe = async (): Promise<INfeData> => {
  "use server";
  const cookie = (await getCookie("Bearer")) || "";
  const iduser = (await getCookie("IdUser")) || "";
  const res: Response = await fetch(
    `${process.env.API_URL_REMOTE}/api/nfe/${iduser}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookie}`,
        "id-user": iduser,
      },
      cache: "no-cache",
    },
  );
  if (res.status === 200) {
    const data = await res.json().then(
      (data: INfeData) => {
        return data as INfeData;
      },
      () => Promise.resolve(),
    );
    return data as INfeData;
  }
  return null as unknown as INfeData;
};
