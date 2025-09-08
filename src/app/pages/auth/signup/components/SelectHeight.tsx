import { NumberCarouselSelector } from "@/components/layout/number-selector";
import { useRegisterContext } from "@/lib/context/RegisterContext";
import { Button } from "@/components/ui/button";
import { useTranslations } from "use-intl";

export default function SelectHeight() {
  // Context
  const { formData, setFormData, setStep } = useRegisterContext();

  // Translaion
  const t = useTranslations();

  // save height value in the context
  const handleHeightChange = (height: number) => {
    setFormData({ ...formData, height });
  };
  // Functions
  const handleNext = () => {
    if (formData.height < 50) {
      // toast.error("Please select your height!");
      return;
    }
    setStep(5);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-amber-950 text-white">
      {/* Headline */}
      <div className="font-baloo flex flex-col items-center mb-6">
        <h1 className="font-black text-5xl">what is your height?</h1>
        <h4 className="font-light text-xl">
          This helps us create Your personalized plan
        </h4>
      </div>
      {/* Carousel */}
      <NumberCarouselSelector
        title="Select Your Height"
        defaultValue={formData.height || 170}
        min={50}
        max={250}
        step={1}
        unit="cm"
        onChange={handleHeightChange}
        className="mb-6"
      />
      {/* Next Button */}
      <Button
        onClick={handleNext}
        className="w-full max-w-sm bg-main rounded-full"
        disabled={formData.height < 50}
        icon={false}
      >
        Next
      </Button>
    </div>
  );
}
