import { useTranslations } from "next-intl";
import { ProductsItem } from "./ProductsItem";

const products = [
  {
    id: 1,
    link: "Product_item1.link",
    description: "Product_item1.description",
    image: "/images/products/stars.png",
  },
  {
    id: 2,
    link: "Product_item2.link",
    description: "Product_item2.description",
    image: "/images/products/sheet.png",
  },
  {
    id: 3,
    link: "Product_item3.link",
    description: "Product_item3.description",
    image: "/images/products/cube.png",
  },
  {
    id: 4,
    link: "Product_item4.link",
    description: "Product_item4.description",
    image: "/images/products/ring.png",
  }
];

export const ProductsList = () => {
  const t = useTranslations("Products");

  return (
    <section className="max-w-324 w-full mx-auto mb-43.75 px-6">
      <h2 className="mb-14 text-[40px] font-semibold bg-clip-text bg-gradient-title text-transparent text-center md:mb-20 xl:mb-32 md:text-[50px] xl:text-[64px]">
        {t("title")}
      </h2>
      <div className="flex flex-col gap-6">
        {products.map((product) => (
          <ProductsItem key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};
