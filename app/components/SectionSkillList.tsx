import { ReactNode } from 'react';

type TSkillList = {
  language: string;
  children: ReactNode;
};

export default function SectionSkillList({ language, children }: TSkillList) {
  return (
    <>
      <p className="mt-10 text-lg font-semibold">{language}</p>
      {children}
    </>
  );
}
