import { NextRouter, useRouter } from "next/router";
import Animation from "./Animation";
import { useEffect } from "react";

export default function Hero() {
  const router: NextRouter = useRouter();
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-200">
          안녕하세요
          <br className="hidden lg:inline-block" />
          할짓없는 학생 크리입니다
        </h1>
        <p className="mb-8 leading-relaxed">
          봄이 릴케 흙으로 못 별 있습니다. 무성할 별 보고, 이름자를 이름과,
          있습니다. 그리고 별 까닭이요, 벌레는 묻힌 거외다. 슬퍼하는 마디씩
          가슴속에 헤는 무덤 소학교 사랑과 까닭입니다. 토끼, 프랑시스 비둘기,
          보고, 피어나듯이 노새, 하나 강아지, 릴케 까닭입니다. 아스라히 이네들은
          별 있습니다. 쓸쓸함과 이제 같이 이네들은 무엇인지 아스라히 소학교
          까닭입니다. 위에 쓸쓸함과 사랑과 이 쉬이 있습니다. 릴케 이름자를
          지나가는 별 그리고 아침이 오는 노루, 봅니다.
        </p>
        <div className="flex justify-center">
          <button
            className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg"
            onClick={() => router.push("/projects")}
          >
            프로젝트 보러 가기
          </button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
