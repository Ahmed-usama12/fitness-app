import { NumberCarouselSelector } from "@/components/layout/number-selector";
import { useRegisterContext } from "@/lib/context/RegisterContext";
import { Button } from "@/components/ui/button";
import { useTranslations } from "use-intl";

export default function SelectAge() {
  // context
  const { formData, setFormData, setStep } = useRegisterContext();

  // Translation
  const t = useTranslations();

  // send age to context
  const handleAgeChange = (age: number) => {
    setFormData({ ...formData, age });
  };

  // Functions
  const handleNext = () => {
    if (formData.age < 18) {
      alert("Please select your age!");
      return;
    }
    setStep(4);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-amber-950 text-white">
      {/* Headline */}
      <div className="font-baloo flex flex-col items-center mb-6">
        <h1 className="font-black text-5xl">How Old Are You?</h1>
        <h4 className="font-light text-xl">
          This helps us create Your personalized plan
        </h4>
      </div>

      {/* Carousel */}
      <NumberCarouselSelector
        title="Years Old"
        defaultValue={formData.age || 18}
        min={18}
        max={100}
        step={1}
        onChange={handleAgeChange}
        className="mb-6"
      />

      {/* Next Button */}
      <Button
        onClick={handleNext}
        className="w-full font-baloo bg-main rounded-full "
        disabled={formData.age < 18}
        icon={false}
        type="submit"
      >
        Next
      </Button>
    </div>
  );
}
