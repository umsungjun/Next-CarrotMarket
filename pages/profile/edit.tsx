import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout";
import useUser from "@/libs/client/useUser";
import { NextPage } from "next";

const EditProfile: NextPage = () => {
  const { user } = useUser();
  return (
    <Layout title="프로필 수정" canGoBack>
      <div className=" px-4 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 rounded-full bg-slate-500" />
          <label
            htmlFor="picture"
            className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 text-gray-700"
          >
            프로필 이미지 변경
            <input
              id="picture"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>
        <div className="space-y-1">
          <Input label="email" name="email" kind="text" />
        </div>
        <div className="space-y-1">
          <Input label="phone" name="phone" kind="phone" />
          <div />
        </div>
        <Button text="프로필 수정" />
      </div>
    </Layout>
  );
};

export default EditProfile;
