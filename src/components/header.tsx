import { css } from "@emotion/css";
import Link from "next/link";
import "twin.macro";
import tw from "twin.macro";

const topBarStyle = css`
  background-color: #1f1f1f;
  color: #ebebeb;
`;
const subBarStyle = css`
  background-color: #4d4d4d;
  color: #ebebeb;
  a {
    ${tw`mx-2`}
  }
  span {
    background-color: #ebebeb;
    width: 2px;
    ${tw`mx-2 h-4`};
  }
`;

const loginButtonStyle = css`
  background-color: #80a8ff;
`;

export const PageHeader = () => {
  return (
    <header tw="sticky top-0 z-50">
      <div className={topBarStyle} tw="flex justify-between items-center">
        <div tw="text-2xl mx-6">
          <Link href="/">Proton</Link>
        </div>
        <div className={loginButtonStyle} tw="rounded-lg px-6 py-0.5 mx-8 my-2">
          <Link href="/login" tw="text-xl h-8 text-white">
            Login
          </Link>
        </div>
      </div>
      <div
        className={subBarStyle}
        tw="px-14 py-1 flex text-center items-center text-lg"
      >
        <a>Post</a>
        <span></span>
        <Link href="/">Image</Link>
        {/*<a>Article</a>*/}
        <a>Follow</a>
        <a>Stack</a>
        <span></span>
        <a>User</a>
        <a>Settings</a>
      </div>
    </header>
  );
};
