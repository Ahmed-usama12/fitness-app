import { NumberCarouselSelector } from "@/components/layout/number-selector";
import { useRegisterContext } from "@/lib/context/RegisterContext";
import { Button } from "@/components/ui/button";

export default function SelectWeight() {
  // Context
  const { formData, setFormData, setStep } = useRegisterContext();
  // save weight in the context
  const handleWeightChange = (weight: number) => {
    setFormData({ ...formData, weight });
  };
  // Function
  const handleNext = () => {
    if (formData.weight < 20) {
      // toast.error("Please select your weight!");
      return;
    }
    setStep(6);
  };

  return (
    <div className="flex flex-col items-center p-6 text-white">
      {/* Headline */}
      <div className="font-baloo mb-6 flex flex-col items-center">
        <h1 className="text-5xl font-black">what Is Your Weight?</h1>
        <h4 className="text-xl font-light">This helps us create Your personalized plan</h4>
      </div>
      {/* Carousel */}
      <NumberCarouselSelector
        title="Select Your Weight"
        defaultValue={formData.weight || 70}
        min={20}
        max={200}
        step={1}
        unit="kg"
        onChange={handleWeightChange}
        className="mb-6"
      />
      {/* Next Button */}
      <Button
        onClick={handleNext}
        className="bg-main w-full max-w-sm rounded-full"
        disabled={formData.weight < 20}
        icon={false}
      >
        Next
      </Button>
    </div>
  );
}
