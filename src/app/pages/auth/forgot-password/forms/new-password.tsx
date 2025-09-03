import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { PasswordInput } from "@/components/ui/password-input";
import { forgotPassword } from "@/lib/api/auth.api";
import {
  useNewPasswordSchema,
  type NewPasswordFields,
} from "@/lib/schema/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type DefaultValues } from "react-hook-form";

export default function NewPassword() {
  // Schema
  const schema = useNewPasswordSchema();

  // Form
  const form = useForm<NewPasswordFields>({
    defaultValues: {} as DefaultValues<NewPasswordFields>,
    resolver: zodResolver(schema),
  });

  // Submit
  const onSubmit = async (values: NewPasswordFields) => {
    await forgotPassword(values);
  };

  return (
    <div>
      <h1 className="text-5xl font-extrabold px-4 py-2 mb-2">
        create new password
      </h1>
      <div className="p-10 rounded-[50px] border">
        <Form {...form}>
          <p className="text-center text-2xl pb-4">
            Make sure to create a strong password!
          </p>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <>
                  {" "}
                  <FormItem className="w-3/4 mx-auto flex flex-col justify-center items-center">
                    {/* Label */}
                    <FormLabel
                      htmlFor={"email"}
                      className="text-center text-2xl sr-only"
                    >
                      Enter Your Email
                    </FormLabel>

                    {/* Input */}
                    <FormControl>
                      <PasswordInput
                        id={"email"}
                        type="email"
                        placeholder="Email"
                        {...field}
                      />
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
                  <FormItem className="w-3/4 mx-auto flex flex-col justify-center items-center">
                    {/* Label */}
                    <FormLabel
                      htmlFor={"New Password"}
                      className="text-center text-2xl sr-only"
                    >
                      Enter Your New Password
                    </FormLabel>

                    {/* Input */}
                    <FormControl>
                      <PasswordInput
                        id={"New Password"}
                        type="password"
                        placeholder="New Password"
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
            <Button
              icon={false}
              className="w-full"
            >
              Change Password
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
