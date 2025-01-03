import { ReactNode } from 'react';

type TCompanyProject = {
  projectName: string;
  startedAt?: string;
  endedAt?: string;
  projectDescription?: string;
  contribution?: string;
  skills?: string;
  features?: string;
  children?: ReactNode;
};

export default function SectionCompanyProject({
  projectName,
  startedAt,
  endedAt,
  projectDescription,
  contribution,
  skills,
  features,
  children,
}: TCompanyProject) {
  return (
    <div className="mt-8 px-6 py-7 border rounded-2xl">
      <div>
        {endedAt && (
          <p className="text-xs sm:text-base text-gray-400">
            {startedAt} - {endedAt}
          </p>
        )}
        <span className="mt-3 block sm:inline-block text-lg font-semibold">
          {projectName}
        </span>
      </div>
      <p className="text-sm sm:text-[15px] text-gray-500 mt-3 leading-6">
        {projectDescription}
      </p>
      {contribution && (
        <p className="text-[15px] sm:text-base mt-5">기여도: {contribution}</p>
      )}
      {skills && (
        <p className="text-[15px] sm:text-base mt-1">사용 기술: {skills}</p>
      )}
      {features && (
        <p className="text-[15px] sm:text-base mt-1">주요 기능: {features}</p>
      )}
      {children}
    </div>
  );
}
