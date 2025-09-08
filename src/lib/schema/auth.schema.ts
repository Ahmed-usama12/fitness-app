import { useTranslations } from "use-intl";
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
  const t = useTranslations();
  return z
    .object({
      firstName: z.string().min(1, { message: t("first-name-schema") }),
      lastName: z.string().min(1, { message: t("last-name-schema") }),
      email: emailSchema(),
      password: z.string().min(6, { message: t("password-regex") }),
      rePassword: z.string().min(6, { message: t("repassword-message") }),
      gender: z.enum([t("male"), t("female")], {
        message: t("gender-message"),
      }),
      height: z.number().min(50, { message: t("height-message") }),
      weight: z.number().min(20, { message: t("weight-message") }),
      age: z.number().min(12, { message: "Age must be at least 12" }),
      goal: z.string().min(1, { message: t("goal-message") }),
      activityLevel: z.string().min(1, { message: t("level-message") }),
    })
    .refine((data) => data.password === data.rePassword, {
      path: ["rePassword"],
      message: t("pass-repass-message"),
    });
}

type RegistrationFields = z.infer<ReturnType<typeof useRegistrationSchema>>;

// Export Schema
export { useRegistrationSchema };

// Export Fields
export { type RegistrationFields };
