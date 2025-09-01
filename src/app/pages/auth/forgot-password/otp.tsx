import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";

import { useId } from "react";

export default function OTP() {
  const id = useId();

  return (
    <div>
      <h1 className="text-4xl font-bold pb-4">OTP Coed</h1>
      <div className="bg-red-300 p-10">
        <div className="space-y-2">
          <Label
            className="text-center"
            htmlFor={id}
          >
            Enter The OTP You Have Received
          </Label>
          <InputOTP
            id={id}
            maxLength={4}
          >
            <InputOTPGroup className="gap-2 *:data-[active=true]:ring-0 *:data-[slot=input-otp-slot]:rounded-none *:data-[slot=input-otp-slot]:border-0 *:data-[slot=input-otp-slot]:border-b-2 *:data-[slot=input-otp-slot]:shadow-none *:dark:data-[slot=input-otp-slot]:bg-transparent">
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>

          <Button
            icon={false}
            className="w-full"
          >
            Confirm
          </Button>

          <div>
            <p>didn’t receive verification code?</p>
          </div>
          <Button variant={"link"}>Resend Code</Button>
        </div>
      </div>
    </div>
  );
}
