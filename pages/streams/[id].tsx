import Layout from "@/components/layout";
import { NextPage } from "next";

const LiveDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="px-4 space-y-4">
        <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
        <h3 className="text-gray-800 font-semibold text-2xl mt-2">
          Let&apos;s try potatos
        </h3>
        <div className="py-10 pb-16 h-[50vh] px-4 space-y-4 overflow-y-scroll">
          <div className="flex items-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
              <p>Hi how much are you selling them for?</p>
            </div>
          </div>
          <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
            <div className="w-8 h-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
              <p>I want ￦20,000</p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
              <p>Hi how much are you selling them for?</p>
            </div>
          </div>
          <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
            <div className="w-8 h-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
              <p>I want ￦20,000</p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
              <p>Hi how much are you selling them for?</p>
            </div>
          </div>
          <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
            <div className="w-8 h-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
              <p>I want ￦20,000</p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
              <p>Hi how much are you selling them for?</p>
            </div>
          </div>
          <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
            <div className="w-8 h-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
              <p>I want ￦20,000</p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-8 h-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
              <p>Hi how much are you selling them for?</p>
            </div>
          </div>
          <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
            <div className="w-8 h-8 rounded-full bg-slate-400" />
            <div className="w-1/2 text-sm text-gray-700 p-2 border border-gray-300 rounded-md">
              <p>I want ￦20,000</p>
            </div>
          </div>
          <div className="fixed w-full mx-auto max-w-md bottom-2 inset-x-0">
            <div className="flex relative items-center">
              <input
                type="text"
                className="shdow-sm rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none focus:border-orange-500 pr-12"
              />
              <div className="absolute inset-y-0 flex py-1.5 px-1.5 right-0">
                <button className="flex items-center focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 bg-orange-500 hover:bg-orange-600 rounded-full px-3 text-sm text-white cursor-pointer">
                  &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LiveDetail;
