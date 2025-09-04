import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useStepResetPass } from "@/context/step-reset-pass/hooks";
import { sendCode } from "@/lib/api/auth.api";

import { useVerifyCodeSchema, type VerifyCodeFields } from "@/lib/schema/auth.schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { DotIcon } from "lucide-react";

import { useId } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "use-intl";

export default function OTP() {
  // Id Hooks
  const id = useId();

  // Context
  const { setStep } = useStepResetPass();

  // Translations
  const t = useTranslations();

  // Schema
  const schema = useVerifyCodeSchema();

  // Form
  const form = useForm<VerifyCodeFields>({
    defaultValues: { resetCode: "" },
    resolver: zodResolver(schema),
  });

  // Submit
  const onSubmit = async (values: VerifyCodeFields) => {
    const verifyCode = await sendCode(values);

    if ("status" in verifyCode) setTimeout(() => setStep("three"), 2000);
  };

  return (
    <div>
      {/* Titile */}
      <h1 className="mb-2 px-4 py-2 text-center text-5xl font-extrabold">{t("otp-code")}</h1>
      <div className="rounded-[50px] border p-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="resetCode"
              render={({ field }) => (
                <FormItem className="flex w-full flex-col items-center justify-center">
                  {/* Label */}
                  <FormLabel htmlFor={id} className="text-center text-2xl">
                    {t("enter-the-otp-you-have-received")}
                  </FormLabel>

                  {/* Input */}
                  <FormControl>
                    <InputOTP id={id} maxLength={6} {...field}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                      </InputOTPGroup>
                      <div role="separator" className="text-muted-foreground">
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

            <Button icon={false} className="w-full">
              {t("confirm")}
            </Button>
          </form>
        </Form>

        <div className="flex flex-col items-center">
          <p>{t("didnt-receive-verification-code")}</p>
          <Button className="text-main p-0 underline" variant={"link"} size={"sm"} icon={false}>
            Resend Code
          </Button>
        </div>
      </div>
    </div>
  );
}
