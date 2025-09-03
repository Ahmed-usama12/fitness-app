import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { sendCode } from "@/lib/api/auth.api";

import {
  useVerifyCodeSchema,
  type VerifyCodeFields,
} from "@/lib/schema/auth.schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { DotIcon } from "lucide-react";

import { useId } from "react";
import { useForm } from "react-hook-form";

export default function OTP() {
  // Id Hooks
  const id = useId();

  // Schema
  const schema = useVerifyCodeSchema();

  // Form
  const form = useForm<VerifyCodeFields>({
    defaultValues: { resetCode: "" },
    resolver: zodResolver(schema),
  });

  // Submit
  const onSubmit = async (values: VerifyCodeFields) => {
    await sendCode(values);
  };

  return (
    <div>
      {/* Titile */}
      <h1 className="text-5xl font-extrabold px-4 py-2 mb-2 text-center">
        OTP Code
      </h1>
      <div className="p-10 rounded-[50px] border">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="resetCode"
              render={({ field }) => (
                <FormItem className="w-full flex flex-col justify-center items-center">
                  {/* Label */}
                  <FormLabel
                    htmlFor={id}
                    className="text-center text-2xl"
                  >
                    Enter The OTP You Have Received
                  </FormLabel>

                  {/* Input */}
                  <FormControl>
                    <InputOTP
                      id={id}
                      maxLength={6}
                      {...field}
                    >
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                      </InputOTPGroup>
                      <div
                        role="separator"
                        className="text-muted-foreground"
                      >
                        <DotIcon className="text-main" />
                      </div>
                      <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>

                  {/* Error message */}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Actions */}

            <Button
              icon={false}
              className="w-full"
            >
              Confirm
            </Button>
          </form>
        </Form>

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
  );
}
