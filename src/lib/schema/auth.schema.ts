import { useTranslations } from "use-intl";
import { z } from "zod";
import { emailSchema, goalSchema, levelSchema, loginPasswordSchema, passwordSchema, weightSchema } from "./common.schema";

//Login Schema
function useLoginSchema() {
  //Translation
  const t = useTranslations();

  return z.object({
    email: emailSchema(t),
    password: loginPasswordSchema(t),
  });
}

//change password schema
function useChangePasswordSchema() {
  //Translation
  const t = useTranslations();
  return z.object({
    password: loginPasswordSchema(t),
    newPassword: passwordSchema(t)
  })
}

// Forgot password schema
function useForgotPasswordSchema() {
  // Translation
  const t = useTranslations();

  return z.object({
    email: emailSchema(t),
  });
}

// Verfiy Code Schema
function useVerifyCodeSchema() {
  const t = useTranslations();

  return z.object({
    resetCode: z
      .string()
      .min(6, { message: t("code-length") })
      .max(6, { message: t("code-length") }),
  });
}

// New Password Shcema
function useNewPasswordSchema() {
  // Translation
  const t = useTranslations();

  return z.object({
    email: emailSchema(t),
    newPassword: passwordSchema(t),
  });
}

// Registration Schema
function useRegistrationSchema() {
  const t = useTranslations();
  return z
    .object({
      firstName: z.string().min(1, { message: t("first-name-schema") }),
      lastName: z.string().min(1, { message: t("last-name-schema") }),
      email: emailSchema(t),
      password: z.string().min(6, { message: t("password-regex") }),
      rePassword: z.string().min(6, { message: t("repassword-message") }),
      gender: z.enum([t("male"), t("female")], {
        message: t("gender-message"),
      }),
      height: z.number().min(50, { message: t("height-message") }),
      weight: weightSchema,
      age: z.number().min(12, { message: "Age must be at least 12" }),
      goal: goalSchema,
      activityLevel: levelSchema,
    })
    .refine((data) => data.password === data.rePassword, {
      path: ["rePassword"],
      message: t("pass-repass-message"),
    });
}

//Profile schema 
function useProfileSchema() {
  //Translations
  const t = useTranslations()
  return z.object({
    weight: weightSchema(t).optional(),
    activityLevel: levelSchema(t).optional(),
    goal: goalSchema(t).optional(),
  })
}

type RegistrationFields = z.infer<ReturnType<typeof useRegistrationSchema>>;

// Export Schema
export { useRegistrationSchema };

// Export Fields
export { type RegistrationFields };

type LoginFields = z.infer<ReturnType<typeof useLoginSchema>>;
type ForgotPasswordFields = z.infer<ReturnType<typeof useForgotPasswordSchema>>;
type VerifyCodeFields = z.infer<ReturnType<typeof useVerifyCodeSchema>>;
type NewPasswordFields = z.infer<ReturnType<typeof useNewPasswordSchema>>;
type ChangePasswordFields = z.infer<ReturnType<typeof useChangePasswordSchema>>
type ChangeProfileFields = z.infer<ReturnType<typeof useProfileSchema>>

// Export Schema
export { useLoginSchema, useForgotPasswordSchema, useVerifyCodeSchema, useNewPasswordSchema, useChangePasswordSchema, useProfileSchema };

// Export Fields
export {
  type LoginFields,
  type ForgotPasswordFields,
  type VerifyCodeFields,
  type NewPasswordFields,
  type ChangePasswordFields,
  type ChangeProfileFields

};
