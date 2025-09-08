import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useRegisterContext } from "@/lib/context/RegisterContext";
import { useTranslations } from "use-intl";

export default function SelectGoal() {
  // Context
  const { formData, setFormData, setStep } = useRegisterContext();

  // Hooks
  const [selectedGoal, setSelectedGoal] = useState<string>("");

  // Translaion
  const t = useTranslations();

  // Goals
  const goals = [
    t("gain-weight"),
    t("lose-weight"),
    t("get-fitter"),
    t("gain-more-flexible"),
    t("learn-basic"),
  ];

  // Functions
  const handleNext = () => {
    if (!selectedGoal) return;
    setFormData({ ...formData, goal: selectedGoal });
    setStep(7);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Headline */}
      <div className="flex flex-col items-center py-4 mb-2">
        <h1 className="font-bold font-baloo text-4xl">{t("goal-title")}</h1>
        <h4 className="font-baloo font-extralight text-lg py-2">
          {t("kyc-steps-headline")}
        </h4>
      </div>

      {/* Goals */}
      <RadioGroup
        value={selectedGoal}
        onValueChange={setSelectedGoal}
        className="my-4"
      >
        {goals.map((goal, index) => {
          const isSelected = selectedGoal === goal;
          return (
            <div
              key={index}
              onClick={() => setSelectedGoal(goal)}
              className={`w-80 p-2 px-3.5 rounded-2xl flex justify-between items-center mb-2 cursor-pointer border-2 
                ${
                  isSelected
                    ? "border-main text-main"
                    : "border-white text-white"
                }`}
            >
              <span className={isSelected ? "text-main" : "text-white"}>
                {goal}
              </span>
              <RadioGroupItem
                value={goal}
                id={`goal-${index}`}
                className="cursor-pointer"
              />
            </div>
          );
        })}
      </RadioGroup>

      {/* Button */}
      <Button
        type="button"
        className="w-96"
        onClick={handleNext}
        disabled={!selectedGoal}
        icon={false}
      >
        {t("next-btn")}
      </Button>
    </div>
  );
}
