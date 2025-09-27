import { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useRegisterContext } from "@/lib/context/RegisterContext";
import useGetLevels from "../hooks/use-getLevels";
import useRegister from "../hooks/useSignup";
import { useRegistrationSchema } from "@/lib/schema/auth.schema";
import type { Level } from "@/lib/types/levels";
import { toast } from "sonner";
import { useTranslations } from "use-intl";

export default function SelectLevel() {
  // Context
  const { formData, setFormData } = useRegisterContext();

  // Translation
  const t = useTranslations();

  // Hooks
  const [selectedLevelId, setSelectedLevelId] = useState<string>("");

  // Get Levels
  const {
    data: levels,
    fetchLevels,
    isPending: isLevelsLoading,
    error: levelsError,
  } = useGetLevels();

  // Register Hook
  const { RegisterSubmit, isPending: isRegistering } = useRegister();

  const registrationSchema = useRegistrationSchema();

  useEffect(() => {
    fetchLevels();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Functions
  const handleNext = () => {
    if (!selectedLevelId || !levels) return;

    const selectedIndex = levels.findIndex((lvl) => lvl._id === selectedLevelId);
    if (selectedIndex === -1) return;

    const selectedLevelValue = `level${selectedIndex + 1}`;

    const updatedFormData = {
      ...formData,
      activityLevel: selectedLevelValue,
    };

    const parsed = registrationSchema.safeParse(updatedFormData);
    if (!parsed.success) {
      toast.error(t("register-fail"));
      return;
    }

    setFormData(updatedFormData);

    RegisterSubmit(parsed.data);
  };

  if (isLevelsLoading) {
    // i will make skeleton
    return <p className="py-6 text-center">Loading levels...</p>;
  }

  if (levelsError) {
    return toast.error(` Error fetching levels: ${levelsError.message}`);
  }

  return (
    <div className="flex flex-col items-center">
      {/* Headline */}
      <div className="mb-2 flex flex-col items-center py-4">
        <h1 className="font-baloo w-96 text-center text-4xl font-bold">
          your regular physical activity level?
        </h1>
        <h4 className="font-baloo py-2 text-lg font-extralight">
          This helps us create your personalized plan
        </h4>
      </div>

      {/* Levels */}
      <RadioGroup value={selectedLevelId} onValueChange={setSelectedLevelId} className="my-4">
        {levels?.slice(0, 5).map((level: Level, index: number) => {
          const isSelected = selectedLevelId === level._id;
          return (
            <div
              key={level._id}
              onClick={() => setSelectedLevelId(level._id)}
              className={`mb-2 flex w-80 cursor-pointer items-center justify-between rounded-2xl border-2 p-2 px-3.5 ${
                isSelected ? "border-main text-main" : "border-white text-white"
              }`}
            >
              <span className={isSelected ? "text-main" : "text-white"}>{level.name}</span>
              <RadioGroupItem value={level._id} id={`level-${index}`} className="cursor-pointer" />
            </div>
          );
        })}
      </RadioGroup>

      {/* Register Button */}
      <Button
        type="button"
        className="w-96"
        onClick={handleNext}
        disabled={!selectedLevelId || isRegistering}
        icon={false}
      >
        {isRegistering ? "Registering..." : "Next"}
      </Button>
    </div>
  );
}
