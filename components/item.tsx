import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

interface ItemProps {
  title: string;
  id: number;
  image: string;
  price: string;
  hearts: number;
  createdAt: Date;
}

function Item({ title, price, image, hearts, id, createdAt }: ItemProps) {
  return (
    <Link
      href={`/products/${id}`}
      className="flex px-4 pt-5 cursor-pointer justify-between"
    >
      <div className="flex space-x-4">
        <div className="relative w-20 h-20 rounded-md overflow-hidden">
          <Image
            className="aspect-square"
            src={`https://imagedelivery.net/Fxbz5xV7vyEmqagr1Ejwow/${image}/public`}
            width={80}
            height={80}
            alt="product_img"
            priority={true}
            quality={100}
          />
        </div>
        <div className="pt-2 flex flex-col justify-center">
          <h3 className="text-sm font-medium text-gray-900">{title}</h3>
          <span className="font-medium mt-1 text-gray-900">
            {Number(price).toLocaleString()}원
          </span>
          {/* <span className="text-xs mt-auto">
            {format(createdAt, "yyyy-MM-dd")}
          </span> */}
        </div>
      </div>
      <div className="flex space-x-2 items-end justify-end">
        <div className="flex space-x-0.5 items-center text-sm  text-gray-600">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
          <span>{hearts}</span>
        </div>
      </div>
    </Link>
  );
}

export default Item;
