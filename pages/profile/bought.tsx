import Layout from "@/components/layout";
import ProductList from "@/components/product-list";
import { NextPage } from "next";

const Bought: NextPage = () => {
  return (
    <Layout canGoBack title="구매내역">
      <div className="flex flex-col space-y-5 pb-10 divide-y">
        <ProductList kind="favs" />
      </div>
    </Layout>
  );
};

export default Bought;
