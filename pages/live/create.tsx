import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout";
import TextArea from "@/components/textarea";
import { NextPage } from "next";

const Create: NextPage = () => {
  return (
    <Layout canGoBack title="라이브 생성">
      <div className="space-y-5 px-4">
        <div>
          <Input label="가격" name="price" kind="price" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            설명
          </label>
          <TextArea />
        </div>
        <Button text="라이브 생성" />
      </div>
    </Layout>
  );
};

export default Create;
