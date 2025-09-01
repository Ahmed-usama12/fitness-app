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
      <h1 className="text-5xl font-extrabold px-4 py-2 mb-2 text-center">
        OTP Code
      </h1>
      <div className="p-10 rounded-[50px] border">
        <div className="space-y-6 flex flex-col justify-center items-center">
          <Label
            className="text-center text-2xl"
            htmlFor={id}
          >
            Enter The OTP You Have Received
          </Label>
          <InputOTP
            id={id}
            maxLength={4}
          >
            <InputOTPGroup className="gap-6">
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

          <div className="flex flex-col items-center ">
            <p>didn’t receive verification code?</p>
            <Button
              className="text-main underline p-0"
              variant={"link"}
              size={"sm"}
              icon={false}
            >
              Resend Code
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
