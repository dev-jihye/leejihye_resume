import Image from 'next/image';
import Profile from '../public/images/jihye.jpeg';
import SectionTitle from './components/SectionTitle';
import SectionCompanyInfo from './components/SectionCompanyInfo';
import SectionCompanyProject from './components/SectionCompanyProject';
import SectionSkillList from './components/SectionSkillList';
import SectionEducationList from './components/SectionEducationList';

export default function Home() {
  return (
    <div className="px-8 md:px-4 max-w-screen-md mx-auto text-gray-900 mt-14 md:mt-20 mb-14">
      <section>
        <h1 className="text-xl sm:text-5xl md:text-[45px] font-bold lead md:leading-[70px]">
          나날이 발전하고 있는
          <br /> 2년차 프론트엔드 개발자 이지혜입니다.
        </h1>
        <div className="sm:flex items-start gap-8 mt-6 sm:mt-10 md:mt-16 ">
          <div>
            <Image
              src={Profile}
              className="max-w-[240px] mx-auto"
              alt="profile"
              priority={true}
            />
          </div>
          <div>
            <div className="text-zinc-600 text-base leading-7 mt-6 sm:mt-0">
              <p>
                물질과 시간이 제한된 세상에서 가치 있는 고민을 하고, 사람들이
                가진 문제를 해결하고자 개발자의 길을 선택했습니다.
              </p>
              <p>
                다양한 분야의 사람들을 만나고 서로 다른 관점을 경험하는 것을
                좋아하며, 환경이 바뀌는 것에 대해 두려움보다는 설레임을
                느낍니다.
              </p>
              <p>
                다양한 의견을 가진 사람들이 모여 성숙하게 의견 나눌 수 있는
                환경을 선호하며, 함께 성장하며 지속가능한 미래를 바라볼 수 있는
                동료들과 일하고 싶습니다.
              </p>
            </div>
            <div className="flex items-center mt-7">
              <span className="text-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  className="size-6 fill-zinc-100 stroke-zinc-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </span>
              <a
                href="tel:010-5388-2147"
                className="ml-2 text-zinc-500 text-sm sm:text-base hover:text-zinc-800"
              >
                010-5388-2147
              </a>
            </div>
            <div className="flex items-center mt-3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-6 w-6 flex-none"
              >
                <path
                  d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                  className="fill-zinc-100 stroke-zinc-400"
                ></path>
                <path
                  d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
                  className="stroke-zinc-400"
                ></path>
              </svg>
              <a
                href="mailto:jihye_340@naver.com"
                className="ml-3 text-zinc-500 text-sm sm:text-base  hover:text-zinc-800"
              >
                jihye_340@naver.com
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <SectionTitle title="Work Experience" />
        <div className="mt-10">
          <SectionCompanyInfo
            companyName="카이아이 컴퍼니"
            startedAt="2023. 5"
            endedAt="2024. 12"
            companyDescription="구강 건강검진 및 관리, 구강 질환 예방을 위한 데이터를 수집하고 유의미한
            서비스를 만들어 제공하는 디지털 헬스케어 플랫폼"
          />
          <SectionCompanyProject
            projectName="치위생학과 실습평가시스템 프로젝트"
            startedAt="2023. 8"
            endedAt="2024. 12"
            projectDescription="치위생학과의 실습 평가를 웹 기반으로 전환하여 학생, 교수, 관리자별
              맞춤 기능을 제공하는 평가 시스템 개발"
            contribution="70%"
            skills="React, Typescript, Sass, react-query, jotai"
            features="학생 - 대상자 등록 및 차트 캔버스 드로잉 작성 / 교수 -
              차트 생성 및 평가, 통계 확인 / 관리자 - 학생, 교수, 대상자, 성적,
              강의 관리"
          >
            <p className="mt-5 text-[15px] sm:text-base">
              • React-konva 라이브러리를 사용하여 HTML Canvas 요소를 제어,
              사용자가 지정된 영역에서 자유롭게 그림을 그릴 수 있는 기능 개발
            </p>
            <p className="mt-1 text-[15px] sm:text-base">
              • 실습 평가 결과를 효율적으로 관리하고 조회할 수 있는 데이터
              시각화
            </p>
            <p className="mt-1 text-[15px] sm:text-base">
              • 학생, 교수, 관리자 각각의 역할에 맞는 페이지 개발 및 사용자
              맞춤형 인터페이스 설계 및 구현
            </p>
            <div className="sm:flex sm:justify-between mt-6">
              <div>
                <iframe
                  src="https://www.youtube.com/embed/n9eZawZAodY"
                  allowFullScreen
                ></iframe>
                <span className="block mt-2">학생 - 실습차트 작성 영상</span>
              </div>
              <div>
                <iframe
                  src="https://www.youtube.com/embed/CrUgHGSBJck"
                  allowFullScreen
                  className="mt-6 sm:mt-0"
                ></iframe>
                <span className="block mt-2">교수 - 실습차트 채점 영상</span>
              </div>
            </div>
            <div>
              <iframe
                src="https://www.youtube.com/embed/8PTybO5dHYE"
                allowFullScreen
                className="mt-6"
              ></iframe>
              <span className="block mt-2">
                관리자 - 관리자 페이지 기능 안내
              </span>
            </div>
          </SectionCompanyProject>

          <SectionCompanyProject
            projectName="토마스톤 홈페이지"
            projectDescription="토마스톤 제품 및 서비스에 대한 홍보 사이트 개발"
            contribution="100%"
            skills="React, Next.js, Typescript, Tailwindcss"
          >
            <p className="mt-5 text-[15px] sm:text-base">
              • Search Engine Optimization 적용을 위해 Server Side Rendering이
              가능한 next.js 활용
            </p>
            <p className="mt-1 text-[15px] sm:text-base">
              • 사용자 친화적 웹 / 모바일 / 패드 반응형 웹 개발
            </p>
          </SectionCompanyProject>

          <SectionCompanyProject
            projectName="스마트 구강 건강 관리 프로젝트"
            startedAt="2023. 5"
            endedAt="8"
            projectDescription="연구 대상자의 구강 문진 데이터를 수집하고 리포트를 제공하며 결과에
              따른 교육 콘텐츠를 제공하는 웹 어플리케이션 개발"
            contribution="100%"
            skills="React, Typescript, Sass, react-query"
            features="소셜 로그인(카카오, 네이버, 구글) 연동하기, 구강 문진표
            작성하기, 리포트 결과보기, 교육 콘텐츠 시청하기"
          >
            <p className="mt-5 text-[15px] sm:text-base">
              • Progressive Web Application 적용
            </p>
            <p className="mt-1 text-[15px] sm:text-base">
              • Lighthouse로 웹성능 측정 및 개선
            </p>
            <p className="text-[15px] sm:text-base">
              • 사용자 친화적 웹 / 모바일 / 패드 반응형 웹 개발
            </p>
            <div className="flex justify-center bg-slate-100 mt-6">
              <iframe
                src="https://www.youtube.com/embed/VHdMTkZsuTw?feature=share"
                allowFullScreen
                className="mt-4 sm:mt-0"
              ></iframe>
            </div>
          </SectionCompanyProject>
        </div>
        <div className="border-slate-200 border-b-[1px] my-8"></div>
        <div>
          <SectionCompanyInfo
            companyName="해래"
            startedAt="2020. 12"
            endedAt="2021. 8 "
            companyDescription=" 커스텀 원단 제품 및 관련 디자인 텍스타일 상품을 제작하고 판매하는
            원단 쇼핑 플랫폼"
          />
          <SectionCompanyProject
            projectName="your-fashion-label"
            projectDescription="커스텀 원단 제품 주문생산 홍보 사이트로 자사의 제품과 서비스를
            소개하는 웹 어플리케이션 개발"
            contribution="100%"
            skills="Laravel, Livewire, Tailwindcss, Javascript"
          >
            <p className="mt-3 text-[15px] sm:text-base">
              • google analytics, hotjar 등 분석툴 추가해 마케팅에 활용
            </p>
            <p className="text-[15px] sm:text-base">
              • 사용자 친화적 웹 / 모바일 / 패드 반응형 웹 개발{' '}
            </p>
          </SectionCompanyProject>

          <SectionCompanyProject
            projectName="haerae.space"
            projectDescription="회사의 직원, 물품의 정보를 온라인으로 관리하는 어드민 페이지"
            contribution="100%"
            skills="React, Typescript, Tailwindcss"
          >
            <p className="mt-3 text-[15px] sm:text-base">
              • 사이트를 사용하는 직원들로부터 QA를 받아 유지, 보수, 개선
            </p>
          </SectionCompanyProject>
        </div>
        <div className="border-slate-200 border-b-[1px] my-8"></div>
        <div>
          <SectionCompanyInfo
            companyName="셀파소프트"
            startedAt="2019. 10"
            endedAt="2020. 12"
            companyDescription="데이터베이스 모니터링 솔루션을 제공하는 서비스를 만드는 플랫폼"
          />

          <SectionCompanyProject
            projectName="DB 모니터링 툴 마크업"
            skills="HTML, CSS, jQuery"
          >
            <p className="mt-3 text-[15px] sm:text-base">
              • 페이지 레이아웃 마크업 및 스타일링 수정
            </p>
            <p className="mt-1 text-[15px] sm:text-base">
              • 모니터링 툴 QA 진행 및 문서화
            </p>
          </SectionCompanyProject>
          <SectionCompanyProject
            projectName="DB 모니터링 툴 다크모드 추가"
            skills="HTML, CSS, jQuery"
          >
            <p className="mt-3 text-[15px] sm:text-base">
              • 다크모드 스타일링 구현
            </p>
            <p className="mt-1 text-[15px] sm:text-base">
              • 기존 8가지 제품의 DB 모니터링 툴에 각각 작성 되어있던 마크업 및
              디자인 공통화 작업
            </p>
            <p className="mt-1 text-[15px] sm:text-base">
              • 디자이너와 개발자 사이 커뮤니케이션을 담당하며 디자인 구현
              가능여부 판단 및 협의
            </p>
          </SectionCompanyProject>
          <SectionCompanyProject
            projectName="자사 웹사이트 유지 및 보수"
            skills="HTML, CSS, jQuery"
          >
            <p className="mt-3">• 홈페이지 개편 시 마크업 및 디자인 수정</p>
          </SectionCompanyProject>
        </div>
      </section>
      <section>
        <SectionTitle title="Skills" />
        <SectionSkillList language="HTML/CSS">
          <p className="mt-5 text-[15px] sm:text-base text-zinc-500">
            - 시맨틱 태그를 사용해 구조적으로 마크업을 작성할 수 있습니다.
          </p>
          <p className="mt-1 text-[15px] sm:text-base text-zinc-500">
            - 로컬 스토리지, 세션 스토리지에 대해 이해하고 의도에 맞게 사용할 수
            있습니다.
          </p>
          <p className="mt-1 text-[15px] sm:text-base text-zinc-500">
            - 반응형 웹 디자인 구현으로 다양한 디바이스에 최적화된 레이아웃을
            제공할 수 있습니다.
          </p>
          <p className="mt-1 text-[15px] sm:text-base text-zinc-500">
            - Sass 등 CSS 전처리기를 능숙하게 사용할 수 있습니다.
          </p>
          <p className="mt-1 text-[15px] sm:text-base text-zinc-500">
            - Search Engine Optimization 고려해 개발할 수 있습니다.
          </p>
          <p className="mt-1 text-[15px] sm:text-base text-zinc-500">
            - 최신 UI/UX 트렌드와 웹 기술 동향에 대한 지속적인 관심을 갖고
            있습니다.
          </p>
        </SectionSkillList>
        <SectionSkillList language="Javascript">
          <p className="mt-5 text-[15px] sm:text-base text-zinc-500">
            - ES6 문법을 적극적으로 활용하며 꾸준하게 최신 문법을 학습합니다.
          </p>
          <p className="mt-1 text-[15px] sm:text-base text-zinc-500">
            - 타입스크립트의 타입 별칭, 인터페이스를 활용하여 개발할 수
            있습니다.
          </p>
        </SectionSkillList>
        <SectionSkillList language="React">
          <p className="mt-5 text-[15px] sm:text-base text-zinc-500">
            - 특정 기능이나 역할에 집중하도록 최소 단위로 컴포넌트를 설계할 수
            있습니다.
          </p>
          <p className="mt-1 text-[15px] sm:text-base text-zinc-500">
            - 리액트의 컴포넌트 라이프사이클에 대해 이해하고 적절하게 활용할 수
            있습니다.
          </p>
          <p className="mt-1 text-[15px] sm:text-base text-zinc-500">
            - 커스텀 hooks을 활용해 반복되는 로직의 재사용성을 줄이고 비즈니스
            로직을 분리하여 개발할 수 있습니다.
          </p>
          <p className="mt-1 text-[15px] sm:text-base text-zinc-500">
            - atomic 방식의 상태관리 라이브러리를 사용할 수 있습니다.
          </p>
        </SectionSkillList>
        <SectionSkillList language="Tools">
          <p className="mt-5 text-[15px] sm:text-base text-zinc-500">
            - Git의 워크플로우에 대해 이해하고 변경사항에 대한 이력을 커밋
            메세지에 알기 쉽게 작성합니다.
          </p>
          <p className="mt-1 text-[15px] sm:text-base text-zinc-500">
            - Notion, Jira, Slack, Figma 등 다양한 툴을 사용해 협업할 수
            있습니다.
          </p>
          <p className="mt-1 text-[15px] sm:text-base text-zinc-500">
            - Webpack의 주요 개념을 이해하고 설정할 수 있습니다.
          </p>
        </SectionSkillList>
      </section>
      <section>
        <SectionTitle title="Education" />
        <div className="mt-10 flex flex-col gap-8">
          <SectionEducationList
            title="원티드 프리온보딩 프론트엔드 과정"
            startedAt="2022. 2"
            endedAt="3"
            schoolName="원티드-코드스테이츠"
          >
            <p className="text-[15px] sm:text-base">
              • 6주간 5명의 프론트엔드 팀원이 기업과 연계된 8개의 프로젝트를
              분석, 디자인, 개발하는 팀 프로젝트로, 실무에 대한 이해와 팀원들과
              함께 협업하는 법을 배울 수 있었습니다. 현재까지도 팀원들과 꾸준히
              소통하며 새로운 지식과 다양한 팁을 공유하고 있습니다.
            </p>
          </SectionEducationList>

          <SectionEducationList
            title="웹퍼블리셔(UI/UX 반응형 웹디자인) 양성과정"
            startedAt="2019. 4"
            endedAt="9"
            schoolName="그린컴퓨터아카데미"
          >
            <p className="text-[15px] sm:text-base">
              • 국비지원 교육으로 웹에 관한 전반적인 내용과 HTML, CSS, jQuery에
              관한 기본 개념을 배웠습니다.
            </p>
            <p className="mt-2 text-[15px] sm:text-base">
              • 이외에도 추가적인 스터디를 진행하며 자바스크립트를 공부했습니다.
            </p>
          </SectionEducationList>
        </div>
      </section>

      <section className="mt-12">
        <div className="border-slate-200 border-b-[1px] my-8"></div>
        <a href="https://github.com/dev-jihye" className="font-bold ml-4">
          Github
        </a>
        <a href="https://jihye-dev.tistory.com/" className="font-bold ml-16">
          Blog
        </a>
      </section>
    </div>
  );
}
