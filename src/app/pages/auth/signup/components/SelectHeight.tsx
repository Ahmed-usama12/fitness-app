import { NumberCarouselSelector } from "@/components/layout/number-selector";
import { useRegisterContext } from "@/lib/context/RegisterContext";
import { Button } from "@/components/ui/button";

export default function SelectHeight() {
  // Context
  const { formData, setFormData, setStep } = useRegisterContext();

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
    <div className="flex flex-col items-center p-6 text-white">
      {/* Headline */}
      <div className="font-baloo mb-6 flex flex-col items-center">
        <h1 className="text-5xl font-black">what is your height?</h1>
        <h4 className="text-xl font-light">This helps us create Your personalized plan</h4>
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
        className="bg-main w-full max-w-sm rounded-full"
        disabled={formData.height < 50}
        icon={false}
      >
        Next
      </Button>
    </div>
  );
}
