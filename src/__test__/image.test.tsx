import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { PostedImage, PostedUser } from "@/components/view/images/image";

describe("Rendering", () => {
  it("Image", () => {
    const thumbnailImg = "/imgs/thumbnail.png";
    const userIconImg = "/imgs/icon.png";

    const user: PostedUser = {
      userId: "user",
      userIcon: userIconImg,
      userName: "ユーザー",
    };

    render(
      <PostedImage
        title="title"
        postedImageId="img_id"
        thumbnailUrl={thumbnailImg}
        user={user}
        tags={["tag1", "tag2"]}
      />
    );

    expect(screen).toMatchSnapshot();
  });
});
