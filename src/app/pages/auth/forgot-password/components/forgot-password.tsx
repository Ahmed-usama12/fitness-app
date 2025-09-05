import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForgotPasswordSchema, type ForgotPasswordFields } from "@/lib/schema/auth.schema";

import { useId } from "react";
import { useForm, type DefaultValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { forgotPassword } from "@/lib/api/auth.api";
import { useStepResetPass } from "@/context/step-reset-pass/hooks";
import { useTranslations } from "use-intl";

export default function ForgotPassword() {
  // Id hook
  const id = useId();

  // Translations
  const t = useTranslations();

  // Context
  const { setStep } = useStepResetPass();

  // Schema
  const schema = useForgotPasswordSchema();

  // Form
  const form = useForm<ForgotPasswordFields>({
    defaultValues: {} as DefaultValues<ForgotPasswordFields>,
    resolver: zodResolver(schema),
  });

  // Submit
  const onSubmit = async (values: ForgotPasswordFields) => {
    const forgotPass = await forgotPassword(values);

    if ("message" in forgotPass) {
      localStorage.setItem("email", values.email);
      setTimeout(() => setStep("two"), 2000);
    }
  };

  return (
    <div>
      <h1 className="mb-2 px-4 py-2 text-5xl font-extrabold">{t("forgot-password")}</h1>
      <div className="rounded-[50px] border p-10">
        {/* Form */}
        <Form {...form}>
          {" "}
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex w-full flex-col items-center justify-center">
                  {/* Label */}
                  <FormLabel htmlFor={id} className="text-center text-2xl">
                    {t("enter-your-email")}
                  </FormLabel>

                  {/* Input */}
                  <FormControl>
                    <Input id={id} type="email" placeholder={t("email")} {...field} />
                  </FormControl>

                  {/* Error message */}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Actions */}
            <Button icon={false} className="w-full">
              {t("send-otp")}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
