import { ReactNode } from "react";

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
    <div className="ml-4 mt-8">
      <div>
        <span className="block sm:inline-block text-lg sm:text-2xl font-semibold">
          {projectName}
        </span>
        {startedAt && (
          <span className="ml-0 sm:ml-3 text-xs sm:text-base text-gray-600">
            {startedAt}
          </span>
        )}
        {endedAt && (
          <span className="ml-1 text-xs sm:text-base text-gray-600">~</span>
        )}
        {endedAt && (
          <span className="ml-1 text-xs sm:text-base text-gray-600">
            {endedAt}
          </span>
        )}
      </div>
      <p className="text-sm sm:text-[15px] text-gray-500 mt-2">
        {projectDescription}
      </p>
      {contribution && (
        <p className="text-[15px] sm:text-base mt-3">기여도: {contribution}</p>
      )}
      {skills && (
        <p className="text-[15px] sm:text-base">사용 기술: {skills}</p>
      )}
      {features && (
        <p className="text-[15px] sm:text-base">주요 기능: {features}</p>
      )}
      {children}
    </div>
  );
}
