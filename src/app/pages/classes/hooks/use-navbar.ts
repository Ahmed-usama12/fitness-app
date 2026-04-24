import { getMusclesGroup } from "@/lib/api/workouts.api";
import { useQuery } from "@tanstack/react-query";
import { useLocale, useTranslations } from "use-intl";
import { musclesGroupContext } from "../context/muscle-group.context";
import { useContext, useEffect } from "react";

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
      return response;
    },
  });

  // Set default selected group when data is loaded
  useEffect(() => {
    if (data && !("error" in data) && data.musclesGroup?.length > 0 && !muscleGroupId) {
      setMuscleGroupId(data.musclesGroup[0]._id);
    }
  }, [data, muscleGroupId, setMuscleGroupId]);

  //  muscles group
  let groups: MuscleGroup[] = [];

  // if muscle groups fetched correct without errors assign it to groups
  if (data && !("error" in data)) groups = data?.musclesGroup;

  return { t, locale, groups, muscleGroupId, setMuscleGroupId };
}
