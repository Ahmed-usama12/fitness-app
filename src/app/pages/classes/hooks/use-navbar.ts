import { getMusclesGroup } from "@/lib/api/workouts.api";
import { useQuery } from "@tanstack/react-query";
import { useLocale, useTranslations } from "use-intl";
import { musclesGroupContext } from "../context/muscle-group.context";
import { useContext } from "react";

export default function useNavbar() {
  const { muscleGroupId, setMuscleGroupId } = useContext(musclesGroupContext);

  const t = useTranslations("workouts-section");
  const locale = useLocale();

  const { data } = useQuery<APIResponse<MusclesGroup>>({
    queryKey: ["musclesGroup"],
    queryFn: async () => {
      const response = await getMusclesGroup(locale);
      if (!("error" in response)) setMuscleGroupId(response.musclesGroup[0]._id);
      return response;
    },
  });
  let groups: MuscleGroup[] = [];
  if (data && !("error" in data)) groups = data?.musclesGroup;

  return { t, locale, groups, muscleGroupId, setMuscleGroupId };
}
