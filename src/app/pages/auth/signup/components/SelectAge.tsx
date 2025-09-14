import { NumberCarouselSelector } from "@/components/layout/number-selector";
import { useRegisterContext } from "@/lib/context/RegisterContext";
import { Button } from "@/components/ui/button";

export default function SelectAge() {
  // context
  const { formData, setFormData, setStep } = useRegisterContext();

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
    <div className="flex flex-col items-center p-6 text-white">
      {/* Headline */}
      <div className="font-baloo mb-6 flex flex-col items-center">
        <h1 className="text-5xl font-black">How Old Are You?</h1>
        <h4 className="text-xl font-light">This helps us create Your personalized plan</h4>
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
        className="font-baloo bg-main w-full rounded-full"
        disabled={formData.age < 18}
        icon={false}
        type="submit"
      >
        Next
      </Button>
    </div>
  );
}
