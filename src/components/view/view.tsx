import { css } from "@emotion/css";
import Link from "next/link";
import "twin.macro";
import tw from "twin.macro";
import { ImagesView } from "./images/view";

const viewBarStyle = css`
  background-color: #4d4d4d;
  color: #ebebeb;
  a {
    ${tw`mx-4`}
  }
`;
export const PostedView = () => {
  return (
    <div>
      <div tw="text-2xl px-5 py-0.5" className={viewBarStyle}>
        <Link href="/">Image</Link>
        {/*<a>Article</a>*/}
      </div>
      <ImagesView />
    </div>
  );
};
