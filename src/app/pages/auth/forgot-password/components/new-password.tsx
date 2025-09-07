import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { newPassword } from "@/lib/api/auth.api";
import { useNewPasswordSchema, type NewPasswordFields } from "@/lib/schema/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type DefaultValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useTranslations } from "use-intl";

export default function NewPassword() {
  // Navigation
  const navigate = useNavigate();

  // Translations
  const t = useTranslations();

  // Schema
  const schema = useNewPasswordSchema();

  // Form
  const form = useForm<NewPasswordFields>({
    defaultValues: {} as DefaultValues<NewPasswordFields>,
    resolver: zodResolver(schema),
  });

  // Submit
  const onSubmit = async (values: NewPasswordFields) => {
    const restPasss = await newPassword(values);

    if ("message" in restPasss) setTimeout(() => navigate("/auth/login"), 2000);
  };

  return (
    <div>
      <h1 className="mb-2 px-4 py-2 text-5xl font-extrabold">{t("create-new-password")}</h1>
      <div className="rounded-[50px] border p-10">
        <Form {...form}>
          <p className="pb-4 text-center text-2xl">{t("make-sure-to-create-a-strong-password")}</p>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <>
                  <FormItem className="mx-auto flex w-3/4 flex-col items-center justify-center">
                    {/* Label */}
                    <FormLabel htmlFor={"email"} className="sr-only text-center text-2xl">
                      {t("enter-your-email")}
                    </FormLabel>

                    {/* Input */}
                    <FormControl>
                      <Input id={"email"} type="email" placeholder={t("email")} {...field} />
                    </FormControl>

                    {/* Error message */}
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <>
                  <FormItem className="mx-auto flex w-3/4 flex-col items-center justify-center">
                    {/* Label */}
                    <FormLabel htmlFor={"New Password"} className="sr-only text-center text-2xl">
                      {t("enter-your-new-password")}
                    </FormLabel>

                    {/* Input */}
                    <FormControl>
                      <PasswordInput
                        id={"New Password"}
                        placeholder={t("new-password")}
                        {...field}
                      />
                    </FormControl>

                    {/* Error message */}
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />

            {/* Actions */}
            <Button type="submit" icon={false} className="w-full">
              {t("change-password")}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
