type GeneralErrorProps = {
    children: React.ReactNode;
    error?: Error | null;
};

export default function GeneralError({ children, error }: GeneralErrorProps) {
    if (error)
        return (
            <div className="font-baloo text-main mt-20 text-3xl font-bold">
                {error.message || "Can't get data"}
            </div>
        );

    return children;
}