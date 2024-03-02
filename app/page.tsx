import Image from 'next/image';
import Profile from './assets/jihye.jpeg';

export default function Home() {
  return (
    <div className="px-8 md:px-4 max-w-screen-md mx-auto text-gray-900 mt-14 md:mt-20 mb-14">
      <section>
        <h1 className="text-xl sm:text-3xl md:text-[45px] font-bold lead md:leading-[70px]">
          안녕하세요!
          <br /> 2년차 프론트엔드 개발자 이지혜입니다.
        </h1>
        <div className="sm:flex gap-10 mt-6 sm:mt-10 md:mt-16">
          <div>
            <Image
              src={Profile}
              className="max-w-[250px] mx-auto"
              alt="profile"
            />
          </div>
          <div>
            <div className="text-gray-800 text-base sm:text-lg mt-6 sm:mt-0">
              <p>
                다양한 분야에서 다양한 사람들을 만나 경험을 하는 것을 좋아하며,
                환경이 바뀌는 것에 대해 두려움보다는 설레임을 느낍니다.
              </p>
              <p>
                커뮤니케이션은 팀이 가고자 하는 방향을 맞춰나가는 과정이라고
                생각해 자주 적극적으로 소통하기 위해 노력합니다.
              </p>
              <p>
                서비스를 이용하는 고객과 직접 소통하는 여행사 직원으로 일하며
                소통의 중요성을 배우고, 문제를 해결하고 더 나은 서비스를
                제공하기 위해 고민하는 개발자가 되었습니다.
              </p>
            </div>
            <div className="mt-4">
              <span className="text-xs">📞</span>
              <a
                href="tel:010-5388-2147"
                className="ml-2 text-gray-600 text-sm sm:text-base"
              >
                010-5388-2147
              </a>
            </div>
            <div className="mt-2">
              <span className="text-xs">📧</span>
              <a
                href="mailto:jihye_340@naver.com"
                className="ml-2 text-gray-600 text-sm sm:text-base"
              >
                jihye_340@naver.com
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-3xl sm:text-[40px] font-bold text-teal-600 mt-20 sm:mt-28">
          Work Experience
        </h2>
        <div className="mt-10">
          <h3>
            <span className="block sm:inline-block text-xl sm:text-3xl font-bold">
              카이아이 컴퍼니
            </span>
            <span className="ml-0 sm:ml-3 text-xs sm:text-base text-gray-600">
              프론트엔드 (2023. 5 ~ 재직중)
            </span>
          </h3>

          <p className="text-sm sm:text-[15px] text-gray-500 mt-2">
            구강 건강검진 및 관리, 구강 질환 예방을 위한 데이터를 수집하고
            유의미한 서비스를 만들어 제공하는 디지털 헬스케어 플랫폼
          </p>
          <p></p>
          <div className="ml-4 mt-8">
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
          </div>
          <div className="mt-4 ml-4">
            <div className="mt-8">
              <span className="block sm:inline-block text-lg sm:text-2xl font-semibold">
                토마스톤 홈페이지
              </span>
              <span className="ml-0 sm:ml-3 text-xs sm:text-base text-gray-600">
                2023. 9
              </span>
            </div>
            <p className="text-sm sm:text-[15px] text-gray-500 mt-2">
              토마스톤 제품 및 서비스에 대한 홍보 사이트 개발
            </p>
            <p className="mt-3 text-[15px] sm:text-base">기여도: 100%</p>
            <p className="text-[15px] sm:text-base">
              사용 기술: React, Next.js, Typescript, Tailwindcss
            </p>
            <p className="mt-3 text-[15px] sm:text-base">
              • Search Engine Optimization 적용을 위해 Server Side Rendering이
              가능한 next.js 활용
            </p>
            <p className="text-[15px] sm:text-base">
              • 사용자 친화적 웹 / 모바일 / 패드 반응형 웹 개발
            </p>
          </div>
          <div className="mt-4 ml-4">
            <div className="mt-8">
              <span className="block sm:inline-block text-lg sm:text-2xl font-semibold">
                치위생학과 실습평가시스템 프로젝트
              </span>
              <span className="ml-0 sm:ml-3 text-xs sm:text-base text-gray-600">
                2023. 8 ~ 진행중
              </span>
            </div>
            <p className="text-sm sm:text-[15px] text-gray-500 mt-2">
              대학교 치위생학과에서 쓰는 실습 차트를 웹으로 옮겨 학생들이
              태블릿으로 실습 차트 작성하고, 교수는 작성한 차트를 채점,
              피드백하여 기록으로 남길 수 있는 웹 어플리케이션 개발
            </p>
            <p className="mt-3 text-[15px] sm:text-base">기여도: 100%</p>
            <p className="text-[15px] sm:text-base">
              사용 기술: React, Typescript, Sass, react-query, jotai
            </p>
          </div>
        </div>
        <div className="border-slate-200 border-b-[1px] my-8"></div>
        <div>
          <h3>
            <span className="block sm:inline-block text-xl sm:text-3xl font-bold">
              해래
            </span>
            <span className="ml-0 sm:ml-3 text-gray-600 text-xs sm:text-base">
              프론트엔드 (2020. 12 ~ 2021. 8)
            </span>
          </h3>
          <p className="text-sm sm:text-[15px] text-gray-500 mt-2">
            커스텀 원단 제품 및 관련 디자인 상품을 제작하고 판매하는 플랫폼
          </p>
          <div className="ml-4">
            <div>
              <p className="mt-8 text-lg sm:text-2xl font-semibold">
                your-fashion-label
              </p>
              <p className="text-sm sm:text-[15px] text-gray-500 mt-2">
                커스텀 원단 제품 주문생산 홍보 사이트로 자사의 제품과 서비스를
                소개하는 웹 어플리케이션 개발
              </p>
              <p className="mt-3 text-[15px] sm:text-base">기여도: 100%</p>
              <p className="text-[15px] sm:text-base">
                사용 기술: Laravel, Livewire, Tailwindcss, Javascript
              </p>
              <p className="mt-3 text-[15px] sm:text-base">
                • google analytics, hotjar 등 분석툴 추가해 마케팅에 활용
              </p>
              <p className="text-[15px] sm:text-base">
                • 사용자 친화적 웹 / 모바일 / 패드 반응형 웹 개발{' '}
              </p>
            </div>
            <div>
              <p className="mt-8 text-lg sm:text-2xl font-semibold">
                haerae.space
              </p>
              <p className="text-sm sm:text-[15px] text-gray-500 mt-2">
                회사의 직원, 물품의 정보를 온라인으로 관리하는 어드민 페이지
              </p>
              <p className="mt-3 text-[15px] sm:text-base">
                사용 기술: React, Typescript, Tailwindcss
              </p>
              <p className="mt-3 text-[15px] sm:text-base">
                • 사이트를 사용하는 직원들로부터 QA를 받아 유지, 보수, 개선
              </p>
            </div>
          </div>
        </div>
        <div className="border-slate-200 border-b-[1px] my-8"></div>
        <div>
          <h3>
            <span className="block sm:inline-block text-xl sm:text-3xl font-bold">
              셀파소프트
            </span>
            <span className="ml-0 sm:ml-3 text-gray-600 text-xs sm:text-base">
              퍼블리셔 (2019. 10 ~ 2020. 12)
            </span>
          </h3>
          <p className="text-sm sm:text-[15px] text-gray-500 mt-2">
            데이터베이스 모니터링 솔루션을 제공하는 서비스를 만드는 플랫폼
          </p>
          <div className="ml-4">
            <div>
              <p className="mt-8 text-lg sm:text-2xl font-semibold">
                DB 모니터링 툴 마크업
              </p>
              <p className="mt-3 text-[15px] sm:text-base">
                사용 기술: HTML, CSS, jQuery
              </p>
              <p className="mt-3 text-[15px] sm:text-base">
                • 페이지 레이아웃 마크업 및 스타일링 수정
              </p>
              <p className="text-[15px] sm:text-base">
                • 모니터링 툴 QA 진행 및 문서화
              </p>
            </div>
            <div>
              <p className="mt-8 text-lg sm:text-2xl font-semibold">
                DB 모니터링 툴 다크모드 추가
              </p>
              <p className="mt-3 text-[15px] sm:text-base">
                사용 기술: HTML, CSS, jQuery
              </p>
              <p className="mt-3 text-[15px] sm:text-base">
                • 다크모드 스타일링 구현
              </p>
              <p className="text-[15px] sm:text-base">
                • 기존 8가지 제품의 DB 모니터링 툴에 각각 작성 되어있던 마크업
                및 디자인 공통화 작업
              </p>
              <p className="text-[15px] sm:text-base">
                • 디자이너와 개발자 사이 커뮤니케이션을 담당하며 디자인 구현
                가능여부 판단 및 협의
              </p>
            </div>

            <p className="mt-8 text-lg sm:text-2xl font-semibold">
              자사 사이트 유지 및 보수
            </p>
            <p className="mt-3">• 홈페이지 개편 시 마크업 및 디자인 수정</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-3xl sm:text-[40px] font-bold text-teal-600 mt-20 sm:mt-28">
          Skills
        </h2>
        <p className="mt-10 text-xl sm:text-2xl font-semibold">HTML/CSS</p>
        <p className="mt-3 text-[15px] sm:text-base">
          - 시맨틱 태그를 사용해 구조적으로 마크업을 작성할 수 있습니다.
        </p>
        <p className="text-[15px] sm:text-base">
          - 로컬 스토리지, 세션 스토리지에 대해 이해하고 의도에 맞게 사용할 수
          있습니다.
        </p>
        <p className="text-[15px] sm:text-base">
          - 다양한 디바이스에 대응하여 미디어 쿼리를 사용할 수 있습니다.
        </p>
        <p className="text-[15px] sm:text-base">
          - Sass 등 CSS 전처리기를 사용할 수 있습니다.
        </p>
        <p className="text-[15px] sm:text-base">
          - Search Engine Optimization 경험이 있습니다.
        </p>
        <p className="mt-6 text-xl sm:text-2xl font-semibold">Javascript</p>
        <p className="mt-3 text-[15px] sm:text-base">
          - ES6 문법을 적극적으로 활용하며 꾸준하게 최신 문법을 학습합니다.
        </p>
        <p className="text-[15px] sm:text-base">
          - 타입스크립트의 타입 별칭, 인터페이스를 활용하여 개발할 수 있습니다.
        </p>
        <p className="mt-6 text-xl sm:text-2xl font-semibold">React</p>
        <p className="mt-3 text-[15px] sm:text-base">
          - 특정 기능이나 역할에 집중하도록 최소 단위로 컴포넌트를 설계할 수
          있습니다.
        </p>
        <p className="text-[15px] sm:text-base">
          - 리액트의 컴포넌트 라이프사이클에 대해 이해하고 적절하게 활용할 수
          있습니다.
        </p>
        <p className="text-[15px] sm:text-base">
          - 커스텀 hooks을 활용해 반복되는 로직의 재사용성을 줄이고 비즈니스
          로직을 분리하여 개발할 수 있습니다.
        </p>
        <p className="text-[15px] sm:text-base">
          - atomic 방식의 상태관리 라이브러리를 사용할 수 있습니다.
        </p>
        <p className="mt-6 text-xl sm:text-2xl font-semibold">Tools</p>
        <p className="mt-3 text-[15px] sm:text-base">
          - Git의 워크플로우에 대해 이해하고 변경사항에 대한 이력을 커밋
          메세지에 알기 쉽게 작성합니다.
        </p>
        <p className="text-[15px] sm:text-base">
          - Notion, Jira, Slack, Figma 등 다양한 툴을 사용해 협업할 수 있습니다.
        </p>
        <p className="text-[15px] sm:text-base">
          - Webpack의 주요 개념을 이해하고 설정할 수 있습니다.
        </p>
      </section>
      <section>
        <h2 className="text-3xl sm:text-[40px] font-bold text-teal-600 mt-20 sm:mt-28">
          Education
        </h2>
        <div className="mt-10">
          <div className="flex gap-4 sm:gap-8">
            <div className="w-1/3">
              <p className="text-xl sm:text-2xl font-semibold">
                원티드 프리온보딩 프론트엔드 과정
              </p>
              <p className="text-gray-500 mt-2 text-[15px] sm:text-base">
                2022. 2 ~ 3
              </p>
              <p className="mt-2 text-[15px] sm:text-base">
                원티드-코드스테이츠
              </p>
            </div>
            <div className="w-2/3">
              <p className="text-[15px] sm:text-base">
                • 6주간 5명의 프론트엔드 팀원이 기업과 연계된 8개의 프로젝트를
                분석, 디자인, 개발하는 팀 프로젝트로, 실무에 대한 이해와
                팀원들과 함께 협업하는 법을 배울 수 있었습니다. 현재까지도
                팀원들과 꾸준히 소통하며 새로운 지식과 다양한 팁을 공유하고
                있습니다.
              </p>
            </div>
          </div>
          <div className="flex gap-4 sm:gap-8 mt-10">
            <div className="w-1/3">
              <p className="text-xl sm:text-2xl font-semibold">
                웹퍼블리셔(UIUX 반응형 웹디자인) 양성과정
              </p>
              <p className="text-gray-500 mt-2 text-[15px] sm:text-base">
                2019. 4 ~ 9
              </p>
              <p className="mt-2 text-[15px] sm:text-base">
                그린컴퓨터아카데미
              </p>
            </div>
            <div className="w-2/3">
              <p className="text-[15px] sm:text-base">
                • 국비지원 교육으로 웹에 관한 전반적인 내용과 HTML, CSS,
                jQuery에 관한 기본 개념을 배웠습니다.
              </p>
              <p className="mt-2 text-[15px] sm:text-base">
                • 이외에도 추가적인 스터디를 진행하며 자바스크립트를
                공부했습니다.
              </p>
            </div>
          </div>
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
