import { useTranslations } from "use-intl";
import { z } from "zod";
import { emailSchema, passwordSchema } from "./common.schema";

//Login Schema
function useLoginSchema() {
  //Translation
  const t = useTranslations();

  return z.object({
    email: emailSchema(t),
    password: passwordSchema(t),
  });
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

type LoginFields = z.infer<ReturnType<typeof useLoginSchema>>;
type ForgotPasswordFields = z.infer<ReturnType<typeof useForgotPasswordSchema>>;
type VerifyCodeFields = z.infer<ReturnType<typeof useVerifyCodeSchema>>;
type NewPasswordFields = z.infer<ReturnType<typeof useNewPasswordSchema>>;

// Export Schema
export { useLoginSchema, useForgotPasswordSchema, useVerifyCodeSchema, useNewPasswordSchema };

// Export Fields
export { type LoginFields, type ForgotPasswordFields, type VerifyCodeFields, type NewPasswordFields };
