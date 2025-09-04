import { useStepResetPass } from "@/context/step-reset-pass/hooks";
import ForgotPassword from "./components/forgot-password";
import OTP from "./components/otp";

export default function RestPassword() {
  const { step } = useStepResetPass();

  return step === "one" ? <ForgotPassword /> : <OTP />;
}
