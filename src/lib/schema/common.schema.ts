import z from "zod";

// Email Schema
export const emailSchema = (t: KeyTranslation) =>
  z.templateLiteral([
    z.string().min(1, { message: t("email-empty") }),
    "@",
    z.string().max(64, {
      message: t("long-email"),
    }),
  ]);

// Password Schema
export const passwordSchema = (t: KeyTranslation) =>
  z
    .string()
    .min(8, { message: t("8-characters-required") })
    .max(20, { message: t("20-characters-max") })
    .refine((password) => /[A-Z]/.test(password), {
      message: t("must-include-an-uppercase-letter"),
    })
    .refine((password) => /[a-z]/.test(password), {
      message: t("must-include-a-lowercase-letter"),
    })
    .refine((password) => /[0-9]/.test(password), {
      message: t("must-include-a-number"),
    })
    .refine((password) => /[!@#$%^&*]/.test(password), {
      message: t("must-include-a-special-character"),
    });

//Login Password Schema
export const LoginPasswordSchema = (t: KeyTranslation) =>
  z
    .string()
    .min(1, { message: t("current-password-required") })
