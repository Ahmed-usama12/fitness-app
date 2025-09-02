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

type ForgotPasswordFields = z.infer<ReturnType<typeof useForgotPasswordSchema>>;

// Export Schema
export { useForgotPasswordSchema };

// Export Fields
export { type ForgotPasswordFields };
