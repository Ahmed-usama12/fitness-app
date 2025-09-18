import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useUpdateProfile } from "@/hooks/use-edit-profile"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useTranslations } from "use-intl"


export default function GoalDialog() {
    //Form
    const form = useForm({
        defaultValues: {
            goal: ""
        }
    })

    //Use edit hook
    const { mutate: edit, isPending } = useUpdateProfile();


    //Error state
    const [formError, setFormError] = useState<string | null>(null);


    // Dialog state
    const [open, setOpen] = useState(false);

    //Submit function
    const handleSubmit = (values: any) => {
        setFormError(null);
        edit(values, {
            onSuccess: () => {
                setTimeout(() => setOpen(false), 2000);
            }
        });
    }

    //Translation
    const t = useTranslations("profile-page");

    //Radio Group data
    const data = [
        t("gain-weight"), t("lose-weight"), t("get-fitter"), t("gain-more-flexible"), t("learn-the-basic")
    ]

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            {/*trigger*/}
            <DialogTrigger className="underline font-baloo py-2 cursor-pointer">{t("tab-to-change")}</DialogTrigger>

            {/*content*/}
            <DialogContent className="font-baloo rounded-[50px] sm:max-w-[561px] text-center" showCloseButton={false}>
                {/*header*/}
                <DialogHeader className="py-2 px-4">
                    <DialogTitle className="font-extrabold text-5xl text-center">{t("dialog-title")}</DialogTitle>
                    <DialogDescription className="text-2xl text-black dark:text-white text-center">
                        {t("dialog-description")}
                    </DialogDescription>
                </DialogHeader>

                {/*radio group*/}
                <Form {...form}>
                    <form className="space-y-6 py-6 px-4" onSubmit={form.handleSubmit(handleSubmit)}>
                        <FormField
                            control={form.control}
                            name="goal"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex flex-col justify-center items-center"
                                        >
                                            {/*items*/}
                                            {data.map((item, index) => (
                                                <FormItem key={index} className="flex items-center bg-[#D3D3D333] has-[:checked]:border-main dark:has-[:checked]:border-main  has-[:checked]:text-main justify-between gap-2 w-3/4 border border-black dark:border-white rounded-[14px] py-2 px-4">
                                                    <FormLabel className="font-bold">
                                                        {item}
                                                    </FormLabel>
                                                    <FormControl>
                                                        <RadioGroupItem value={item} />
                                                    </FormControl>
                                                </FormItem>
                                            ))}
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>

                            )}
                        />
                        {/*submit button*/}
                        <Button type="submit" icon={false} disabled={isPending} className=" block w-[77%] mx-auto py-0">{t("next")}</Button>

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
