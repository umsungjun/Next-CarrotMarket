import FloatingButton from "@/components/floating-button";
import Item from "@/components/item";
import Layout from "@/components/layout";
import Title from "@/components/title";
import useUser from "@/libs/client/useUser";
import { Product } from "@prisma/client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import useSWR from "swr";

export interface ProductWithCount extends Product {
  _count: {
    favs: number;
  };
}

interface ProductsResponse {
  ok: boolean;
  products: ProductWithCount[];
  totalCount: number;
}

function Home() {
  useUser();
  const [productData, setProductData] = useState<ProductWithCount[]>([]);
  const [page, setPage] = useState<number>(0);
  const { data, isLoading } = useSWR<ProductsResponse>(
    `/api/products?page=${page}`
  );
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    setPage(0);
  }, []);

  useEffect(() => {
    if (data && data.ok) {
      setProductData([...productData, ...data.products]);
    }
  }, [data]);

  useEffect(() => {
    if (!isLoading) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [inView]);

  return (
    <>
      <Title pageTitle={"홈"} />
      <Layout title="홈" hasTabBar>
        <div className="flex flex-col space-y-5 overflow-y-scroll h-screen pb-36">
          {productData.map((product) => (
            <Item
              id={product.id}
              key={product.id}
              title={product.name}
              price={product.price}
              image={product.image}
              hearts={product._count.favs}
              createdAt={product.createdAt}
            />
          ))}
          {data && productData.length < data?.totalCount && <div ref={ref} />}
          <FloatingButton href="/products/upload">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </FloatingButton>
        </div>
      </Layout>
    </>
  );
}

export default Home;
