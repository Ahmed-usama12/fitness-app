import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { PasswordInput } from "@/components/ui/password-input"
import useChangePassword from "@/hooks/use-change-password"
import { useChangePasswordSchema, type ChangePasswordFields } from "@/lib/schema/auth.schema"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { RefreshCcw } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useTranslations } from "use-intl"

export default function ChangePasswordDialog() {
    //Schema
    const schema = useChangePasswordSchema()

    //Form 
    const form = useForm<ChangePasswordFields>({
        defaultValues: {
            password: "",
            newPassword: ""
        },
        resolver: zodResolver(schema)
    })

    //error
    const [formError, setFormError] = useState<string | null>(null);

    // use login hook
    const { mutate: changePassword, isPending } = useChangePassword();


    // dialog state
    const [open, setOpen] = useState(false);

    //Handle submit
    const handleSubmit = (values: ChangePasswordFields) => {
        setFormError(null);
        changePassword(values, {
            onSuccess: () => {
                setTimeout(() => setOpen(false), 2000);
            },
            onError: (error) => {
                setFormError(error.response?.data.error ?? null);
            },
        });
    }

    //Translation
    const t = useTranslations("profile-page")

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <div className="z-10  border border-black dark:border-white hover:border-main hover:dark:border-main transition-all duration-300 ease-in-out hover:text-main cursor-pointer p-8 rounded-2xl flex flex-col justify-center items-center gap-4">
                    <RefreshCcw className="text-main" />
                    <h3 className="font-semibold text-[18px]">{t("change-password")}</h3>
                </div>
            </DialogTrigger>
            <DialogContent className="font-baloo rounded-[50px]" showCloseButton={false}>
                <DialogHeader>
                    <DialogTitle className="font-extrabold text-5xl text-center">{t("change-password")}</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <p className="pb-4 text-center text-2xl">{t("enter-strong-password")}</p>
                    <form className="space-y-4" onSubmit={form.handleSubmit(handleSubmit)}>
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="mx-auto flex w-3/4 flex-col items-center justify-center">
                                    {/* Input */}
                                    <FormControl>
                                        <PasswordInput className="text-black" placeholder={t("current-password")} {...field} />
                                    </FormControl>

                                    {/* Error message */}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="newPassword"
                            render={({ field }) => (
                                <FormItem className="mx-auto flex w-3/4 flex-col items-center justify-center">
                                    {/* Input */}
                                    <FormControl>
                                        <PasswordInput placeholder={t("new-password")} {...field} />
                                    </FormControl>

                                    {/* Error message */}
                                    <FormMessage />
                                </FormItem>

                            )}
                        />

                        {/* Actions */}
                        <Button type="submit" icon={false} disabled={isPending} className={cn("w-3/4 mx-auto", isPending && "text-black")}>
                            {isPending ? t("loading") : t("change-password")}
                        </Button>

                        {/* API error message */}
                        {formError && (
                            <p className="text-red-500 text-sm text-center">{formError}</p>
                        )}
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}