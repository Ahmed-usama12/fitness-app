import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRegisterContext } from "@/lib/context/RegisterContext";
import { Mars, Venus } from "lucide-react";

export default function SelectGender() {
  // context
  const { formData, setFormData, setStep } = useRegisterContext();
  // Hooks
  const [selectedGender, setSelectedGender] = useState<"male" | "female" | null>(null);

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
      <div className="mb-2 flex flex-col items-center py-4">
        <h1 className="font-baloo text-4xl font-bold">TELL US ABOUT YOURSELF!</h1>
        <h4 className="font-baloo py-2 text-lg font-extralight">We Need To Know Your Gender</h4>
      </div>

      {/* Genders */}
      <div className="flex justify-center gap-6">
        {/* Male */}
        <button
          onClick={() => handleSelect("male")}
          type="button"
          className={`flex h-24 w-24 cursor-pointer flex-col items-center justify-center rounded-full border-2 text-black transition ${
            selectedGender === "male"
              ? "border-white bg-white text-black"
              : "border-white text-black hover:bg-white"
          }`}
        >
          <Mars className="mb-1 h-6 w-6" />
          <span className="text-sm">Male</span>
        </button>

        {/* Female */}
        <button
          onClick={() => handleSelect("female")}
          type="button"
          className={`flex h-24 w-24 cursor-pointer flex-col items-center justify-center rounded-full border-2 text-black transition ${
            selectedGender === "female"
              ? "border-white bg-white text-black"
              : "border-white text-black hover:bg-white"
          }`}
        >
          <Venus className="mb-1 h-6 w-6" />
          <span className="text-sm">Female</span>
        </button>
      </div>
      {/* Next Button */}
      <Button
        type="button"
        className="mt-5 w-80"
        onClick={handleNext}
        disabled={!selectedGender}
        icon={false}
      >
        Next
      </Button>
    </div>
  );
}
