import "twin.macro";
import { css } from "@emotion/css";
import Image from "next/image";
import Link from "next/link";

interface ImageTagProps {
  tagId: string;
  tagName: string;
}

const imageTagStyle = css`
  background-color: #4d4d4d;
  color: #ebebeb;
`;

const ImageTag = (props: ImageTagProps) => {
  const tagLink = `/tag/${props.tagId}`;
  return (
    <div tw="m-1 rounded-lg" className={imageTagStyle}>
      <Link href={tagLink} tw="hover:underline px-2.5 py-0.5">
        {props.tagName}
      </Link>
    </div>
  );
};

interface PostedImageProps {
  postedImageId: string;
  tags: string[];
  title: string;
  thumbnailUrl: string;
  user: PostedUser;
}
export interface PostedUser {
  userId: string;
  userName: string;
  userIcon: string;
}

export const PostedImage = (props: PostedImageProps) => {
  const imageLink = `/image/${props.postedImageId}`;
  const userLink = `/user/${props.user.userId}`;
  return (
    <article tw="w-auto inline-block relative">
      <Link tw="absolute inset-0 z-0" href={imageLink}></Link>
      <Image
        src={props.thumbnailUrl}
        alt="thumbnail"
        width={305}
        height={222}
      />
      <div tw="mx-2.5 my-1.5">
        <header tw="flex items-end">
          <Link href={userLink} tw="z-10">
            <Image
              src={props.user.userIcon}
              alt="user icon"
              tw="rounded-full"
              width={40}
              height={40}
            />
          </Link>
          <Link tw="ml-2 text-justify text-xl z-10" href={userLink}>
            {props.user.userName}
          </Link>
        </header>
        <h2 tw="mt-1 relative">
          <Link tw="text-3xl z-10" href={imageLink}>
            {props.title}
          </Link>
        </h2>
        <div tw="flex z-10 relative">
          {props.tags.map((tag) => (
            <ImageTag key={tag} tagId={tag} tagName={tag} />
          ))}
        </div>
      </div>
    </article>
  );
};
