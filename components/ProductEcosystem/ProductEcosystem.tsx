import Image from "next/image";
import { products } from "./data";

export const ProductEcosystem = () => {
  const [mainProduct, ...otherProducts] = products;

  return (
    <section className="flex flex-col text-white bg-neutral-black-elbrus w-full mb-50">
      <div className="text-center w-full">
        <h3 className="text-[24px] md:text-[32px]  lg:text-[40px]  leading-[150%] text-center font-heading font-semibold mb-12 md:mb-20 lg:mb-24 gradient-text inline-block">
          Продуктовая экосистема
        </h3>
      </div>

      <div className="mx-auto">
        {/* Десктоп (≥1024px): первый продукт на всю ширину */}

        {/* Десктоп (≥1024px): первый продукт на всю ширину */}
        <div className="hidden lg:block mb-6 group">
          <div className="bg-surface-1 hover:bg-surface-2 active:bg-surface-3 p-8 rounded-[24px] overflow-hidden relative">
            <h3 className="text-[24px] lg:text-[28px] leading-[150%] font-semibold font-heading mb-28">
              {mainProduct.name}
            </h3>
            <p className="text-[16px] lg:text-[18px] leading-[150%] font-medium font-heading whitespace-pre-line">
              {mainProduct.description}
            </p>

            {/* Все звёзды из массива */}
            {mainProduct.images?.map((img, idx) => (
              <div
                key={idx}
                className={`${img.className} absolute overflow-hidden rounded-lg`}
              >
                <Image
                  src={mainProduct.image}
                  alt={mainProduct.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.094]"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Сетка: мобилка 1 колонка, планшет 2 колонки, десктоп 3 колонки */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Первый продукт в сетке для мобилки/планшета */}

          <div className="block lg:hidden group">
            <div className="bg-surface-1 hover:bg-surface-2 active:bg-surface-3 p-8 rounded-[24px] relative">
              <div className="absolute top-4 right-4 overflow-hidden rounded-lg">
                {/* <Image
                  src={mainProduct.image}
                  alt={mainProduct.name}
                  fill
                  className={`${mainProduct.imageClassName} object-cover transition-transform duration-500 group-hover:scale-[1.094]`}
                /> */}
              </div>
              <h3 className="text-[24px] lg:text-[28px] leading-[150%] font-semibold font-heading mb-21">
                {mainProduct.name}
              </h3>
              <p className="text-[16px] lg:text-[18px] leading-[150%] font-medium font-heading whitespace-pre-line">
                {mainProduct.description}
              </p>
            </div>
          </div>

          {/* Остальные продукты */}
          {otherProducts.map((product, index) => {
            const isElbrusCortes = product.name === "Elbrus Cortex";

            return (
              <div key={index} className="group">
                <div className="bg-surface-1 hover:bg-surface-2 active:bg-surface-3 p-8 rounded-[24px] relative overflow-hidden">
                  <div
                    className={`${product.imageClassName} absolute overflow-hidden rounded-lg transition-all duration-500`}
                    style={{ zIndex: 1 }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.094]"
                    />
                  </div>
                  <div className="relative" style={{ zIndex: 2 }}>
                    <h3
                      className={`text-[24px] lg:text-[28px] leading-[150%] font-semibold font-heading  ${
                        isElbrusCortes ? "mb-[58px]" : "mb-[85px]"
                      }`}
                    >
                      {product.name}
                    </h3>
                    <p className="text-[16px] lg:text-[18px] leading-[150%] font-medium font-heading whitespace-pre-line">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
