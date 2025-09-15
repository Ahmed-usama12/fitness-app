import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm, type SubmitHandler } from "react-hook-form";
import { PasswordInput } from "@/components/ui/password-input";
import { Link } from "react-router-dom";
import { Facebook } from "lucide-react";
import { useRegisterContext } from "@/lib/context/RegisterContext";
import { z } from "zod";
import { Separator } from "@/components/ui/separator";
import type { Register } from "@/lib/types/auth";
import { useTranslations } from "use-intl";

export default function RegisterForm() {
  // Context
  const { formData, setFormData, setStep } = useRegisterContext();

  // Translaion
  const t = useTranslations();

  // validation
  const form = useForm<Register>({
    defaultValues: {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      rePassword: formData.rePassword,
    },
    mode: "onChange",
  });

  // Function
  const onSubmit: SubmitHandler<Register> = (values) => {
    if (
      !values.firstName ||
      !values.lastName ||
      !values.email ||
      !values.password ||
      !values.rePassword
    ) {
      form.setError("root", { message: "All fields are required" });
      return;
    }
    if (values.password !== values.rePassword) {
      form.setError("rePassword", { message: "Passwords do not match" });
      return;
    }
    if (!z.string().email().safeParse(values.email).success) {
      form.setError("email", { message: "Invalid email format" });
      return;
    }

    setFormData({ ...formData, ...values });

    setStep(2);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Title */}
      <div className="font-baloo flex flex-col items-center">
        <h4>{t("hey")}</h4>
        <h1 className="text-5xl font-black">{t("create-account")}</h1>
      </div>

      <div className="my-7 flex w-[486px] flex-col items-center rounded-4xl border-4 px-20 py-10">
        {/* Form Headline */}
        <h2 className="font-baloo pb-4">{t("register-headline")}</h2>
        {/* Form */}
        <Form {...form}>
          <form className="w-full space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            {/* First Name */}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel className="sr-only">First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="First Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Last Name */}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel className="sr-only">Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Last Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel className="sr-only">Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel className="sr-only">Password</FormLabel>
                  <FormControl>
                    <PasswordInput placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm Password */}
            <FormField
              control={form.control}
              name="rePassword"
              render={({ field }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel className="sr-only">Confirm Password</FormLabel>
                  <FormControl>
                    <PasswordInput placeholder="Confirm Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Forget Password Link */}
            <div className="flex justify-end">
              <Link to="" className="font-baloo text-main text-base underline">
                {t("forget-password")}
              </Link>
            </div>

            {/* Separetor */}
            <div className="flex w-full items-center gap-2">
              <Separator className="flex-1" />
              <span className="text-sm text-gray-400">{t("or")}</span>
              <Separator className="flex-1" />
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center gap-3">
              <div className="w-fit rounded-full bg-[#242424] p-2">
                <Facebook className="text-white" />
              </div>
              <div className="w-fit rounded-full bg-[#242424] p-2">
                <Facebook className="text-white" />
              </div>
              <div className="w-fit rounded-full bg-[#242424] p-2">
                <Facebook className="text-white" />
              </div>
            </div>
            {/* Button */}
            <Button type="submit" className="font-baloo w-full" icon={false}>
              {t("register-headline")}
            </Button>
          </form>
        </Form>

        {/* Check if user has account */}
        <div className="flex gap-0.5 pt-2">
          <p>{t("have-acc-question")} </p>
          <Link to="login" className="text-main">
            {t("login-link")}
          </Link>
        </div>
      </div>
    </div>
  );
}
