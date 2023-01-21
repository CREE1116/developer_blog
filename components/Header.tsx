import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
export default function Header() {
  const router: NextRouter = useRouter();
  const activate = (url: string) => {
    if (router.asPath === url) return "text-purple-600 dark: text-purple-500";
    else return "text-gray-600";
  };
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl">Cree's blog</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className={`mr-5 ${activate("/")}`}>
            홈
          </Link>
          <Link href="/projects" className={`mr-5 ${activate("/projects")}`}>
            프로젝트
          </Link>
          <Link
            href="https://github.com/CREE1116"
            className="mr-5 text-gray-600"
          >
            깃헙가기
          </Link>
        </nav>
      </div>
    </header>
  );
}
