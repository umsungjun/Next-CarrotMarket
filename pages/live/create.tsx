import Layout from "@/components/layout";
import { NextPage } from "next";

const Create: NextPage = () => {
  return (
    <Layout canGoBack title="라이브 생성">
      <div className="space-y-5 px-4">
        <div>
          <label
            htmlFor="price"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            가격
          </label>
          <div className="rounded-md relative flex items-center shadow-sm">
            <div className="absolute left-0 pointer-events-none pl-3 flex items-center justify-center">
              <span className="text-gray-500 text-sm">₩</span>
            </div>
            <input
              id="price"
              className="appearance-none w-full px-3 py-2 pl-7 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              type="text"
              placeholder="0.00"
            />
            <div className="absolute right-0 pointer-events-none pr-3 flex items-center">
              <span className="text-gray-500">원</span>
            </div>
          </div>
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            설명
          </label>
          <textarea
            className="mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500 resize-none"
            rows={4}
          />
        </div>
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-2 py-3 border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:border-orange-500 hover:transition-colors">
          라이브 생성
        </button>
      </div>
    </Layout>
  );
};

export default Create;
