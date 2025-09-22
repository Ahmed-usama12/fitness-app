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

//Login Password schema 
export const loginPasswordSchema = (t: KeyTranslation) =>
  z
    .string().min(1, { message: t("password-required") })


//Weight schema
export const weightSchema = (t: KeyTranslation) =>
  z.
    number().min(20, { message: t("weight-message") })

//Goal schema
export const goalSchema = (t: KeyTranslation) =>
  z.
    string().min(1, { message: t("goal-message") })

//LevelSchema
export const levelSchema = (t: KeyTranslation) =>
  z.
    string().min(1, { message: t("level-message") })


