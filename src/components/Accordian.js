"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AccordionItem } from "./AccordianItem";

export const Accordion = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <section className="flex w-full flex-col items-center rounded-lg bg-[#1C1E22] shadow-xl p-7 duration-300 ease-in-out transition">
            <AccordionItem
                open={open}
                title={"Game Rules"}
                onClick={() => handleClick()}
            >
                <div className="ml-1">
                    1. You have to select 5 coins to make your own virtual portfolio.<br />
                    2. Proceed to submit your portfolio and pay the entry fee for the league.<br />
                    3. Once all spots in the league are filled, all submitted.<br />
                    4. You have to select 5 coins to make your own virtual portfolio.<br />
                    5. Proceed to submit your portfolio and pay the entry fee for the league.<br />
                    6. Once all spots in the league are filled, all submitted.<br />
                </div>
            </AccordionItem>
        </section>
    );
};