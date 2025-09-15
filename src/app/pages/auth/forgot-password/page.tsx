import { useStepResetPass } from "@/context/step-reset-pass/hooks";
import ForgotPassword from "./components/forgot-password";
import OTP from "./components/otp";
import NewPassword from "./components/new-password";

export default function RestPassword() {
  const { step } = useStepResetPass();

  return step === "one" ? <ForgotPassword /> : step === "two" ? <OTP /> : <NewPassword />;
}
