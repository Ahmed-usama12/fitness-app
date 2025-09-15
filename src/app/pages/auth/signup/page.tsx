import { RegisterProvider } from "@/lib/context/RegisterContext";
import RegisterSteps from "./components/RegisterSteps";

export default function Register() {
  return (
    <RegisterProvider>
      <RegisterSteps />
    </RegisterProvider>
  );
}
