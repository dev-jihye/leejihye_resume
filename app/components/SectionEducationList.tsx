import { ReactNode } from 'react';

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
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-zinc-400 mt-2 text-[15px]">
          {startedAt} - {endedAt}
        </p>
        <p className="mt-3 text-[15px]">{schoolName}</p>
      </div>
      <div className="w-2/3">
        <div className="text-zinc-500 text-[15px] sm:text-[16px] leading-7">
          {children}
        </div>
      </div>
    </div>
  );
}
