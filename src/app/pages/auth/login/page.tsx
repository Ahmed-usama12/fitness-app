import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm, type DefaultValues } from "react-hook-form";
import { Link } from "react-router-dom";
import { Apple, Facebook, Instagram } from "lucide-react";
import { useLoginSchema, type LoginFields } from "@/lib/schema/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "use-intl";
import { useLogin } from "@/hooks/use-login";
import { PasswordInput } from "@/components/ui/password-input";
import { useState } from "react";

export default function Login() {
  //schema
  const schema = useLoginSchema();

  //Form
  const form = useForm<LoginFields>({
    defaultValues: {} as DefaultValues<LoginFields>,
    resolver: zodResolver(schema),
  });

  //error
  const [formError, setFormError] = useState<string | null>(null);

  // use login hook
  const { mutate: loginUser, isPending } = useLogin();

  //submit
  const onSubmit = async (values: LoginFields) => {
    setFormError(null); // clear old errors
    loginUser(values, {
      onError: (error) => {
        setFormError(error.response?.data.error ?? null);
      },
    });
  };

  //translation
  const t = useTranslations("login-page");

  return (
    <>
      {/*welcome*/}
      <h3 className="font-baloo my-12 px-4 py-2 text-center text-2xl text-white">
        {t("hey-there")} ,<br />
        <span className="text-5xl font-extrabold">{t("welcome-back")}</span>
      </h3>

      {/*form*/}
      <Card className="font-baloo w-3/4 rounded-[50px] border-[#D3D3D3] bg-transparent p-10">
        {/*Form Title*/}
        <CardHeader>
          <CardTitle className="text-center text-2xl font-extrabold">{t("login")}</CardTitle>
        </CardHeader>

        {/*Content*/}
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/*email*/}
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="email" placeholder={t("email")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/*passsword*/}
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <PasswordInput placeholder={t("password")} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* API error message */}
              {formError && <p className="text-sm text-red-500">{formError}</p>}

              {/*Forget Password*/}
              <Link
                to={"/auth/forgot-password"}
                className="block text-end font-bold text-[#FF4100] underline"
              >
                {t("forget-password")}
              </Link>

              {/* Divider */}
              <div className="flex items-center space-x-4">
                <div className="h-px flex-1 bg-gray-700"></div>
                <span className="text-sm text-gray-400">{t("or")}</span>
                <div className="h-px flex-1 bg-gray-700"></div>
              </div>

              {/**Social Login Icons */}
              <div className="flex justify-center">
                {/* icons */}
                <div className="flex items-center justify-center gap-3">
                  {/* Facebook Icon */}
                  <div className="w-fit rounded-full bg-[#242424] p-2">
                    <Facebook className="text-white" />
                  </div>
                  {/* Google Icon */}
                  <div className="w-fit rounded-full bg-[#242424] p-2">
                    <Apple className="text-white" />
                  </div>
                  {/* Apple Icon */}
                  <div className="w-fit rounded-full bg-[#242424] p-2">
                    <Instagram className="text-white" />
                  </div>
                </div>
              </div>

              {/*Submit Button*/}
              <Button icon={false} type="submit" className="w-full">
                {isPending ? t("loading") : t("login")}
              </Button>
            </form>
          </Form>

          {/*Register Link*/}
          <div className="py-2 text-center">
            <span>
              {t("dont-have-an-account")}
              <Link to={"/auth/register"} className="font-bold text-[#FF4100] underline">
                {t("register")}
              </Link>
            </span>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
