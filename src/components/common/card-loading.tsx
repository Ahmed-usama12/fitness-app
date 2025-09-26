import React, { useContext } from "react";
import CardSkelton from "../skelton/card-skelton";
import { isMobileContext } from "../providers/components/mobile.provider";

export default function CardLoading({
    children,
    status,
}: {
    children: React.ReactNode;
    status: boolean;
}) {
    const { isMobile } = useContext(isMobileContext);
    return (
        <>
            {status ? (
                <div className="mt-3 grid h-full w-full grid-cols-1 items-center justify-center gap-7 md:grid-cols-3">
                    {Array.from({ length: isMobile ? 1 : 3 }).map((_, index) => (
                        <React.Fragment key={index}>
                            <CardSkelton />
                        </React.Fragment>
                    ))}
                </div>
            ) : (
                children
            )}
        </>
    );
}