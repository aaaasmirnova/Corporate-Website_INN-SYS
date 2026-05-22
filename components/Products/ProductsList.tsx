import { useTranslations } from "next-intl";
import { ProductsItem } from "./ProductsItem";

const products = [
  {
    id: 1,
    link: "Product_item1.link",
    description: "Product_item1.description",
    image: "/images/products/stars.png",
    button: "Product_item1.button",
  },
  {
    id: 2,
    link: "Product_item2.link",
    description: "Product_item2.description",
    image: "/images/products/sheet.png",
    button: "Product_item2.button",
  },
  {
    id: 3,
    link: "Product_item3.link",
    description: "Product_item3.description",
    image: "/images/products/cube.png",
    button: "Product_item3.button",
  },
  {
    id: 4,
    link: "Product_item4.link",
    description: "Product_item4.description",
    image: "/images/products/ring.png",
    button: "Product_item4.button",
  },
];

export const ProductsList = () => {
  const t = useTranslations("Products");

  return (
    <section className="max-w-324 w-full mx-auto mb-43.75 px-6 mt-39 md:mt-40 lg:mt-56">
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
