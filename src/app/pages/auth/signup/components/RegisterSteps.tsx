import { useRegisterContext } from "@/lib/context/RegisterContext";
import RegisterForm from "./RegisterForm";
import SelectAge from "./SelectAge";
import SelectGender from "./SelectGender";
import SelectGoal from "./SelectGoal";
import SelectHeight from "./SelectHeight";
import SelectWeight from "./SelectWeight";
import SelectLevel from "./SelectLevel";

export default function RegisterSteps() {
  const { step } = useRegisterContext();

  // RenderSteps
  return (
    <div className="w-full mx-auto text-white p-6  bg-amber-950">
      {step === 1 && <RegisterForm />}
      {step === 2 && <SelectGender />}
      {step === 3 && <SelectAge />}
      {step === 4 && <SelectHeight />}
      {step === 5 && <SelectWeight />}
      {step === 6 && <SelectGoal />}
      {step === 7 && <SelectLevel />}
    </div>
  );
}
