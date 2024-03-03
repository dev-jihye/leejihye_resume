import { ReactNode } from "react";

type TEducationList = {
  title: string;
  startedAt: string;
  endedAt: string;
  schoolName: string;
  children: ReactNode;
};

export default function SectionEducationList({
  title,
  startedAt,
  endedAt,
  schoolName,
  children,
}: TEducationList) {
  return (
    <div className="flex gap-4 sm:gap-8">
      <div className="w-1/3">
        <p className="text-xl sm:text-2xl font-semibold">{title}</p>
        <p className="text-gray-500 mt-2 text-[15px] sm:text-base">
          {startedAt} ~ {endedAt}
        </p>
        <p className="mt-2 text-[15px] sm:text-base">{schoolName}</p>
      </div>
      <div className="w-2/3">{children}</div>
    </div>
  );
}
