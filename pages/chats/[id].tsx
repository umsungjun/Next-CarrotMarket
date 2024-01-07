import Layout from "@/components/layout";
import Message from "@/components/message";
import type { NextPage } from "next";

const ChatDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="px-4 space-y-4">
        <Message message="Hi how much are you selling them for?" />
        <Message reversed message="Hi how much are you selling them for?" />
        <Message reversed message="Hi how much are you selling them for?" />
        <Message message="Hi how much are you selling them for?" />
      </div>
    </Layout>
  );
};

export default ChatDetail;
