import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import { useId } from "react";

export default function ForgotPassword() {
  const id = useId();

  return (
    <div>
      <h1 className="text-5xl font-extrabold px-4 py-2 mb-2">
        Forgot Password
      </h1>
      <div className="p-10 rounded-[50px] border">
        <div className="space-y-6 flex flex-col justify-center items-center">
          <Label
            className="text-center text-2xl"
            htmlFor={id}
          >
            Enter Your Email
          </Label>

          <Input
            id={id}
            type="email"
            placeholder="email"
            className="w-ful"
          />
          <Button
            icon={false}
            className="w-full"
          >
            Send OTP
          </Button>
        </div>
      </div>
    </div>
  );
}
