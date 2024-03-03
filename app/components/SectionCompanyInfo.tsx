type TCompanyInfo = {
  companyName: string;
  role: string;
  startedAt: string;
  endedAt: string;
  companyDescription: string;
};

export default function SectionCompanyInfo({
  companyName,
  role,
  startedAt,
  endedAt,
  companyDescription,
}: TCompanyInfo) {
  return (
    <div>
      <h3>
        <span className="block sm:inline-block text-xl sm:text-3xl font-bold">
          {companyName}
        </span>
        <span className="ml-0 sm:ml-3 text-xs sm:text-base text-gray-600">
          {role} ({startedAt} ~ {endedAt})
        </span>
      </h3>

      <p className="text-sm sm:text-[15px] text-gray-500 mt-2">
        {companyDescription}
      </p>
      {/* <div className="ml-4 mt-8">
        <div>
          <span className="block sm:inline-block text-lg sm:text-2xl font-semibold">
            스마트 구강 건강 관리 프로젝트
          </span>
          <span className="ml-0 sm:ml-3 text-xs sm:text-base text-gray-600">
            2023. 5 ~ 8
          </span>
        </div>
        <p className="text-sm sm:text-[15px] text-gray-500 mt-2">
          연구 대상자의 구강 문진 데이터를 수집하고 리포트를 제공하며 결과에
          따른 교육 콘텐츠를 제공하는 웹 어플리케이션 개발
        </p>
        <p className="text-[15px] sm:text-base mt-3">기여도: 100%</p>
        <p className="text-[15px] sm:text-base">
          사용 기술: React, Typescript, Sass, react-query, jotai
        </p>
        <p className="text-[15px] sm:text-base">
          주요 기능: 소셜 로그인(카카오, 네이버, 구글) 연동하기, 구강 문진표
          작성하기, 리포트 결과보기, 교육 콘텐츠 시청하기
        </p>
        <p className="mt-3 text-[15px] sm:text-base">
          • Progressive Web Application 적용
        </p>
        <p className="text-[15px] sm:text-base">
          • Lighthouse로 웹성능 측정 및 개선
        </p>
        <p className="text-[15px] sm:text-base">
          • 사용자 친화적 웹 / 모바일 / 패드 반응형 웹 개발
        </p>
        <div className="flex justify-center bg-slate-100 mt-5">
          <video className="w-full sm:w-1/3" controls>
            <source src="/videos/mdm.mp4" type="video/mp4" />
          </video>
        </div>
      </div> */}
    </div>
  );
}
