import { useRegistrationSchema } from "@/lib/schema/auth.schema";
import type { RegistrationFields } from "@/lib/schema/auth.schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useRegister from "../hooks/useSignup";
// import { useTranslations } from "use-intl";
import { useForm, type SubmitHandler } from "react-hook-form";
import { PasswordInput } from "@/components/ui/password-input";
import { Link } from "react-router-dom";
import { Facebook } from "lucide-react";

export default function RegisterForm() {
  // Translation
  // const t = useTranslations();

  // Registraion Schema Hook
  const registerSchema = useRegistrationSchema();
  const { RegisterSubmit, isPending } = useRegister();

  // Form
  const form = useForm<RegistrationFields>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "@",
      password: "",
      rePassword: "",
      gender: "male",
      height: 0,
      weight: 0,
      age: 0,
      goal: "",
      activityLevel: "",
    },
  });

  // Submition Function
  const onSubmit: SubmitHandler<RegistrationFields> = (values) => {
    RegisterSubmit(values);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Headline */}
      <div className="font-baloo flex flex-col items-center">
        <h4>Hey There</h4>
        <h1>Create An Account</h1>
      </div>

      {/* Form */}
      <div className="w-[486px]  border-4 rounded-4xl my-7 py-10 px-20 flex flex-col items-center">
        <h2 className="pb-4 font-baloo">Register</h2>
        <Form {...form}>
          {/* Register Form */}
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-4"
          >
            {/* First Name */}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  {/* Lablel */}
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
                  {/* Lablel */}
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
                  {/* Lablel */}
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
                  {/* Lablel */}
                  <FormLabel className="sr-only">Password</FormLabel>
                  <FormControl>
                    <PasswordInput
                      type="password"
                      placeholder="Password"
                      {...field}
                    />
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
                  {/* Lablel */}
                  <FormLabel className="sr-only">Confirm Password</FormLabel>
                  <FormControl>
                    <PasswordInput
                      type="password"
                      placeholder="Confirm Password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Link to="" className="font-baloo underline text-main text-base ">
                Forget Password?
              </Link>
            </div>
            <hr className="" />

            {/* icons */}
            <div className="flex justify-center gap-3 items-center">
              {/* Facebook Icon */}
              <div className="bg-[#242424] p-2 rounded-full w-fit">
                <Facebook className="text-white " />
              </div>
              {/* Google Icon */}
              <div className="bg-[#242424] p-2 rounded-full w-fit">
                <Facebook className="text-white " />
              </div>
              {/* Apple Icon */}
              <div className="bg-[#242424] p-2 rounded-full w-fit">
                <Facebook className="text-white " />
              </div>
            </div>

            {/* --------------- it's just for Test---------------- */}
            {/* Age */}
            {/* <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Age</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Age"
                          {...field}
                          onChange={(e) => field.onChange(e.target.valueAsNumber)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}

            {/* Height */}
            {/* <FormField
              control={form.control}
              name="height"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Height (cm)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Height"
                      {...field}
                      onChange={(e) => field.onChange(e.target.valueAsNumber)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}

            {/* Weight */}
            {/* <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Weight (kg)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Weight"
                      {...field}
                      onChange={(e) => field.onChange(e.target.valueAsNumber)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}

            {/* Goal */}
            {/* <FormField
              control={form.control}
              name="goal"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Goal</FormLabel>
                  <FormControl>
                    <Input placeholder="Your goal" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}

            {/* Activity Level */}
            {/* <FormField
              control={form.control}
              name="activityLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Activity Level</FormLabel>
                  <FormControl>
                    <Input placeholder="Activity Level" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full"
              disabled={isPending}
              icon={false}
            >
              {isPending ? "Registering..." : "Register"}
            </Button>
          </form>
        </Form>

        {/* Login link */}
        <div className="flex gap-0.5 pt-2">
          <p>Already Have an account ? </p>
          <Link to="login" className="text-main">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
