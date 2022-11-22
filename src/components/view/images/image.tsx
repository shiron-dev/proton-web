import "twin.macro";
import { css } from "@emotion/css";
import Image from "next/image";

interface ImageTagProps {
  tagName: string;
}

const imageTagStyle = css`
  background-color: #4d4d4d;
  color: #ebebeb;
`;

const ImageTag = (props: ImageTagProps) => {
  const tagLink = "";
  return (
    <div tw="m-1 rounded-lg" className={imageTagStyle}>
      <a href={tagLink} tw="hover:no-underline px-2.5 py-0.5">
        {props.tagName}
      </a>
    </div>
  );
};

interface PostedImageProps {
  tags: string[];
  title: string;
}

export const PostedImage = (props: PostedImageProps) => {
  const thumbnailImg = "/imgs/thumbnail.png";
  const userIconImg = "/imgs/icon.png";
  const userLink = "";
  const articleLink = "";
  return (
    <article tw="w-auto inline-block relative">
      <a tw="absolute inset-0" href={articleLink}></a>
      <Image src={thumbnailImg} alt="thumbnail" width={305} height={222} />
      <div tw="mx-2.5 my-1.5">
        <header tw="flex items-end">
          <a href={userLink} tw="z-10">
            <Image
              src={userIconImg}
              alt="user icon"
              tw="rounded-full"
              width={40}
              height={40}
            />
          </a>
          <a tw="ml-2 text-justify text-xl z-10" href={userLink}>
            ユーザー
          </a>
        </header>
        <div tw="mt-1 relative">
          <h2>
            <a tw="text-3xl z-10" href={articleLink}>
              {props.title}
            </a>
          </h2>
        </div>
        <div>
          <div tw="flex">
            {props.tags.map((tag) => (
              <ImageTag key={tag} tagName={tag} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
