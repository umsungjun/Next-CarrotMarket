import Layout from "@/components/layout";
import ProductList from "@/components/product-list";
import { NextPage } from "next";

const Sold: NextPage = () => {
  return (
    <Layout canGoBack title="판매내역">
      <div className="flex flex-col space-y-5 pb-10 divide-y">
        <ProductList kind="sales" />
      </div>
    </Layout>
  );
};

export default Sold;
