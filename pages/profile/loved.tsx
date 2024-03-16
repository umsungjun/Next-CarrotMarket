import Layout from "@/components/layout";
import ProductList from "@/components/product-list";
import { NextPage } from "next";

const Love: NextPage = () => {
  return (
    <Layout canGoBack title="관심목록">
      <div className="flex flex-col space-y-5 pb-10 divide-y">
        <ProductList kind="favs" />
      </div>
    </Layout>
  );
};

export default Love;
