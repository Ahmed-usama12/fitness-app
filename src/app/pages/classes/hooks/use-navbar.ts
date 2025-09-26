import { getMusclesGroup } from "@/lib/api/workouts.api";
import { useQuery } from "@tanstack/react-query";
import { useLocale, useTranslations } from "use-intl";
import { useContext } from "react";
import { musclesGroupContext } from "../context/muscle-group.context";

export default function useNavbar() {
  // muscle group context
  const { muscleGroupId, setMuscleGroupId } = useContext(musclesGroupContext);

  // translation
  const t = useTranslations("workouts-section");

  // current local
  const locale = useLocale();

  // get muscle group
  const { data } = useQuery<APIResponse<MusclesGroup>>({
    queryKey: ["musclesGroup"],

    // fetch group
    queryFn: async () => {
      const response = await getMusclesGroup(locale);

      if (!("error" in response)) setMuscleGroupId(response.musclesGroup[0]._id);
      return response;
    },
  });

  //  muscles group
  let groups: MuscleGroup[] = [];

  // if muscle groups fetched correct without errors assign it to groups
  if (data && !("error" in data)) groups = data?.musclesGroup;

  return { t, locale, groups, muscleGroupId, setMuscleGroupId };
}