import { useMutation } from "@tanstack/react-query";
import { getLevels } from "../api/get-levels.api";
import type { Level } from "@/lib/types/levels";

export default function useGetLevels() {
  const { error, mutate, data, isPending } = useMutation({
    mutationFn: async () => await getLevels(),

    onSuccess(data: Level[]) {
      console.log("Levels fetched successfully:", data);
    },

    onError(error: Error) {
      console.log(error?.message);
    },
  });

  const fetchLevels = () => {
    mutate();
  };

  return { error, data, fetchLevels, isPending };
}
