import Button from "@/components/button";
import Layout from "@/components/layout";
import { NextPage } from "next";

const EditProfile: NextPage = () => {
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
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            이메일 주소
          </label>
          <input
            id="email"
            type="email"
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            required
          />
          <div />
        </div>
        <div className="space-y-1">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            핸드폰 번호
          </label>
          <div className="flex rounded-md">
            <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm">
              +82
            </span>
            <input
              id="input"
              className="py-2 px-4 w-full border  border-gray-300 rounded-r-md focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              type="number"
              required
            />
          </div>
          <div />
        </div>
        <Button text="프로필 수정" />
      </div>
    </Layout>
  );
};

export default EditProfile;
