import Image from "next/image";
import { products } from "./data";
import { useTranslations } from "next-intl";

export const ProductEcosystem = () => {
  const t = useTranslations("Product_ecosystem");

  const [mainProduct, ...otherProducts] = products;

  return (
    <section className="container flex flex-col text-white bg-neutral-black-elbrus w-full mb-[107px]">
      <div className="text-center w-full">
        <h2 className="text-[24px] md:text-[32px]  lg:text-[40px]  leading-[150%] text-center font-heading font-semibold mb-11 md:mb-18 lg:mb-24 gradient-text inline-block">
          Продуктовая экосистема
        </h2>
      </div>

      <div className="mx-auto">
        <div className="hidden lg:block mb-6 group">
          <div className="bg-surface-1 hover:bg-surface-2 active:bg-surface-3 p-8 rounded-[24px] overflow-hidden relative lg:h-[272px]">
            <h3 className="text-[24px] lg:text-[28px] leading-[150%] font-semibold font-heading mb-28">
              {mainProduct.name}
            </h3>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-[150%] font-medium font-heading whitespace-pre-line  lg:max-w-[300px]">
              {mainProduct.description}
            </p>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="block lg:hidden group">
            <div className="bg-surface-1 hover:bg-surface-2 active:bg-surface-3 p-6 rounded-[24px] relative overflow-hidden h-[189px] md:h-[216px] lg:h-[272px] flex flex-col justify-between">
              {mainProduct.images?.map((img, idx) => (
                <div
                  key={idx}
                  className={`${img.className} absolute overflow-hidden rounded-lg pointer-events-none`}
                >
                  <Image
                    src={mainProduct.image}
                    alt={mainProduct.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.094]"
                  />
                </div>
              ))}
              {/* <div className="relative z-10"> */}
              <h3 className="relative z-10 text-[18px] md:text-[24px] lg:text-[28px] leading-[150%] font-semibold font-heading">
                {mainProduct.name}
              </h3>
              <p className="relative z-10  text-[14px] md:text-[16px] lg:text-[18px] leading-[150%] font-medium font-heading whitespace-pre-line max-w-[300px] md:max-w-[252px] ">
                {mainProduct.description}
              </p>
              {/* </div> */}
            </div>
          </div>

          {/* Остальные продукты */}
          {otherProducts.map((product, index) => {
            const isElbrusCortes = product.name === "Elbrus Cortex";

            return (
              <div key={index} className="group">
                <div className="bg-surface-1 hover:bg-surface-2 active:bg-surface-3 p-6 lg:py-8 lg:px-12 rounded-[24px] relative overflow-hidden md:h-[216px] lg:h-[320px] flex flex-col justify-between">
                  <div
                    className={`${product.imageClassName} absolute overflow-hidden rounded-lg transition-all duration-500`}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.094]"
                    />
                  </div>
                  <div className="relative flex flex-col h-full">
                    <div className="min-h-15">
                      <div
                        className={
                          isElbrusCortes
                            ? "mb-[30px] md:mb-[26px] lg:mb-[65px]"
                            : "mb-[51px] md:mb-[48px] lg:mb-[75px]"
                        }
                      >
                        <h3 className="text-[18px] md:text-[24px]  lg:text-[28px] leading-[150%] font-semibold font-heading">
                          {/* {isElbrusCortes ? (
                            <div className="group-hover:flex group-hover:flex-col">
                              <span>Elbrus </span>
                              <span>Cortex</span>
                            </div>
                          ) : (
                            product.name
                          )} */}
                          {product.name}
                        </h3>
                      </div>
                    </div>
                    <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-[150%] font-medium font-heading whitespace-pre-line mt-auto">
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
