import Image from "next/image";
import React from "react";

export const AccordionItem = ({
  title,
  children,
  onClick,
  open = false,
}) => {

  return (
    <article className="w-full select-none">
      <div
        onClick={onClick}
        className="flex cursor-pointer items-center justify-between gap-[24px] "
      >
        <div className="flex flex-row gap-x-2">
          <Image
            alt=""
            src="/assets/game_rules.svg"
            width={0}
            height={0}
            className="h-[20px] w-[20px] "
          />
          <h4 className="">{title}</h4>
        </div>
        {open ? (
          <Image
            alt=""
            src="/assets/arrow_top.svg"
            width={0}
            height={0}
            className="h-[20px] w-[20px] "
          />
        ) : (
          <Image
            src="/assets/arrow_left.svg"
            alt=""
            width={0}
            height={0}
            className="h-[20px] w-[20px] "
          />
        )}
      </div>
      {open && (
        <div className="mt-5">
          {children}
        </div>
      )}
    </article>
  );
};