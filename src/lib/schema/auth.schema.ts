import { z } from "zod";

// Email Schema
const emailSchema = () =>
  z.templateLiteral([
    z.string().min(1, {
      message: "The part before @ cannot be empty",
    }),
    "@",
    z.string().max(64, {
      message: "The part after @ must be at most 64 characters long",
    }),
  ]);

// Registration Schema
function useRegistrationSchema() {
  return z
    .object({
      firstName: z.string().min(1, { message: "First name is required" }),
      lastName: z.string().min(1, { message: "Last name is required" }),
      email: emailSchema(),
      password: z
        .string()
        .min(6, { message: "Password must be at least 6 characters long" }),
      rePassword: z
        .string()
        .min(6, { message: "Please confirm your password" }),
      gender: z.enum(["male", "female"], {
        message: "Gender must be either male or female",
      }),
      height: z.number().min(50, { message: "Height must be at least 50 cm" }),
      weight: z.number().min(20, { message: "Weight must be at least 20 kg" }),
      age: z.number().min(12, { message: "Age must be at least 12" }),
      goal: z.string().min(1, { message: "Goal is required" }),
      activityLevel: z
        .string()
        .min(1, { message: "Please select your activity level" }),
    })
    .refine((data) => data.password === data.rePassword, {
      path: ["rePassword"],
      message: "Passwords do not match",
    });
}

type RegistrationFields = z.infer<ReturnType<typeof useRegistrationSchema>>;

// Export Schema
export { useRegistrationSchema };

// Export Fields
export { type RegistrationFields };
