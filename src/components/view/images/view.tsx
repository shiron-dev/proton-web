import { css } from "@emotion/css";
import "twin.macro";
import { PostedImage, PostedUser } from "./image";

const barStyle = css`
  color: #1f1f1f;
`;

export const ImagesView = () => {
  const imageIds = ["a", "b", "c", "d", "d", "e", "f", "g", "h", "i", "j"];

  const thumbnailImg = "/imgs/thumbnail.png";
  const userIconImg = "/imgs/icon.png";

  const user: PostedUser = {
    userId: "user",
    userIcon: userIconImg,
    userName: "ユーザー",
  };

  return (
    <>
      <div tw="px-14 py-1" className={barStyle}>
        <a tw="text-xl mx-3">Top</a>
        <a tw="text-xl mx-3">New</a>
      </div>
      <section tw="mx-6 my-2 flex justify-center flex-wrap items-start">
        {imageIds.map((id) => (
          <div key={id} tw="m-2">
            <PostedImage
              postedImageId={id}
              title="タイトル"
              thumbnailUrl={thumbnailImg}
              user={user}
              tags={["tag1", "tag2"]}
            />
          </div>
        ))}
      </section>
    </>
  );
};
