import { NumberCarouselSelector } from "@/components/layout/number-selector"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { useUpdateProfile } from "@/hooks/use-edit-profile"
import { useProfileSchema, type ChangeProfileFields } from "@/lib/schema/auth.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useTranslations } from "use-intl"

export default function WeightDialog() {
    //schema
    const schema = useProfileSchema()

    //Form
    const form = useForm<ChangeProfileFields>({
        defaultValues: {
            weight: 70
        },
        resolver: zodResolver(schema)
    })

    //Use edit hook
    const { mutate: edit, isPending } = useUpdateProfile();


    //Error state
    const [formError, setFormError] = useState<string | null>(null);


    // Dialog state
    const [open, setOpen] = useState(false);

    //Submit function
    const handleSubmit = (values: ChangeProfileFields) => {
        console.log(values)
        setFormError(null);
        edit(values, {
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
            <DialogTrigger className="underline font-baloo py-2 cursor-pointer">{t("tab-to-change")}</DialogTrigger>
            <DialogContent className="font-baloo rounded-[50px] sm:max-w-[561px] text-center" showCloseButton={false}>
                {/*header*/}
                <DialogHeader className="py-2 px-4">
                    <DialogTitle className="font-extrabold text-5xl text-center">{t("weight-title")}</DialogTitle>
                    <DialogDescription className="text-2xl text-black dark:text-white text-center">
                        {t("dialog-description")}
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="weight"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <NumberCarouselSelector
                                            title={t("select-weight")}
                                            min={20}
                                            max={200}
                                            step={1}
                                            unit="kg"
                                            defaultValue={field.value || 70}
                                            onChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Next Button */}
                        <Button type="submit" icon={false} disabled={isPending} className="block w-[77%] mx-auto py-0">{t("next")}</Button>

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
