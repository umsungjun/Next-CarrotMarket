import Button from "@/components/button";
import Layout from "@/components/layout";
import TextArea from "@/components/textarea";
import type { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <Layout canGoBack title="동네 글쓰기">
      <form className="px-4 ">
        <TextArea />
        <Button text="동네 글 등록" />
      </form>
    </Layout>
  );
};

export default Write;
