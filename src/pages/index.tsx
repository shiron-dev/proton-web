import { PageHeader } from "@/components/header";
import { PostedView } from "@/components/view/view";
import "twin.macro";

export default function Home() {
  return (
    <>
      <PageHeader />
      <br></br>
      <PostedView />
    </>
  );
}
