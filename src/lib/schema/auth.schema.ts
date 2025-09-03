import { useTranslations } from "use-intl";
import { z } from "zod";

// Email Schema
const emailSchema = (t: KeyTranslation) =>
  z.templateLiteral([
    z.string().min(1, { message: t("email-empty") }),
    "@",
    z.string().max(64, {
      message: t("long-email"),
    }),
  ]);

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

type ForgotPasswordFields = z.infer<ReturnType<typeof useForgotPasswordSchema>>;
type VerifyCodeFields = z.infer<ReturnType<typeof useVerifyCodeSchema>>;

// Export Schema
export { useForgotPasswordSchema, useVerifyCodeSchema };

// Export Fields
export { type ForgotPasswordFields, type VerifyCodeFields };
