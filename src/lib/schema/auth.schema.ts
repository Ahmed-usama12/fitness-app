import { useTranslations } from "use-intl";
import { z } from "zod";
import { emailSchema, passwordSchema } from "./common.schema";

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

  // return z
  //   .object({
  //     newPwd: z.string().min(8, { message: t("8-characters-required") }),
  //     confirmPwd: z.string().min(8, { message: t("8-characters-required") }),
  //   })
  //   .refine((data) => data.newPwd === data.confirmPwd, {
  //     message: t("passwords-do-not-match"),
  //     path: ["confirmPwd"],
  //   });
}

type ForgotPasswordFields = z.infer<ReturnType<typeof useForgotPasswordSchema>>;
type VerifyCodeFields = z.infer<ReturnType<typeof useVerifyCodeSchema>>;
type NewPasswordFields = z.infer<ReturnType<typeof useNewPasswordSchema>>;

// Export Schema
export { useForgotPasswordSchema, useVerifyCodeSchema, useNewPasswordSchema };

// Export Fields
export {
  type ForgotPasswordFields,
  type VerifyCodeFields,
  type NewPasswordFields,
};
