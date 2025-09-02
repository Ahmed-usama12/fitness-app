import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  useForgotPasswordSchema,
  type ForgotPasswordFields,
} from "@/lib/schema/auth.schema";

import { useId } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function ForgotPassword() {
  // Id hook
  const id = useId();

  // Schema
  const schema = useForgotPasswordSchema();

  // Form
  const form = useForm<ForgotPasswordFields>({
    defaultValues: {},
    resolver: zodResolver(schema),
  });

  // Submit
  const onSubmit = (values: ForgotPasswordFields) => {
    console.log(values);
  };

  return (
    <div>
      <h1 className="text-5xl font-extrabold px-4 py-2 mb-2">
        Forgot Password
      </h1>
      <div className="p-10 rounded-[50px] border">
        {/* Form */}
        <Form {...form}>
          {" "}
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full flex flex-col justify-center items-center">
                  {/* Label */}
                  <FormLabel
                    htmlFor={id}
                    className="text-center text-2xl"
                  >
                    Enter Your Email
                  </FormLabel>

                  {/* Input */}
                  <FormControl>
                    <Input
                      id={id}
                      type="email"
                      placeholder="email"
                      {...field}
                    />
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
              Send OTP
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
