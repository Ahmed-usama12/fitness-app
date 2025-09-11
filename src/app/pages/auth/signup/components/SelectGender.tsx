import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRegisterContext } from "@/lib/context/RegisterContext";
import { Mars, Venus } from "lucide-react";
import { useTranslations } from "use-intl";

export default function SelectGender() {
  // Translaions
  const t = useTranslations();
  // context
  const { formData, setFormData, setStep } = useRegisterContext();
  // Hooks
  const [selectedGender, setSelectedGender] = useState<
    "male" | "female" | null
  >(null);

  // Functions
  const handleSelect = (gender: "male" | "female") => {
    setSelectedGender(gender);
  };

  const handleNext = () => {
    if (!selectedGender) return;
    setFormData({ ...formData, gender: selectedGender });
    setStep(3);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Headline */}
      <div className="flex flex-col items-center py-4 mb-2">
        <h1 className="font-bold font-baloo text-4xl">
          TELL US ABOUT YOURSELF!
        </h1>
        <h4 className="font-baloo font-extralight text-lg py-2">
          We Need To Know Your Gender
        </h4>
      </div>

      {/* Genders */}
      <div className="flex justify-center gap-6">
        {/* Male */}
        <button
          onClick={() => handleSelect("male")}
          type="button"
          className={`w-24 h-24 flex flex-col items-center justify-center rounded-full border-2 text-white cursor-pointer transition 
            ${
              selectedGender === "male"
                ? "bg-white text-black border-white"
                : "border-white text-black hover:bg-white hover:text-black"
            }`}
        >
          <Mars className="w-6 h-6 mb-1" />
          <span className="text-sm">Male</span>
        </button>

        {/* Female */}
        <button
          onClick={() => handleSelect("female")}
          type="button"
          className={`w-24 h-24 flex flex-col items-center justify-center rounded-full border-2 text-white cursor-pointer transition 
            ${
              selectedGender === "female"
                ? "bg-white text-black border-white"
                : "border-white text-black hover:bg-white hover:text-black"
            }`}
        >
          <Venus className="w-6 h-6 mb-1" />
          <span className="text-sm">Female</span>
        </button>
      </div>
      {/* Next Button */}
      <Button
        type="button"
        className="w-80 mt-5"
        onClick={handleNext}
        disabled={!selectedGender}
        icon={false}
      >
        Next
      </Button>
    </div>
  );
}
