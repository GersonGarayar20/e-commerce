import type { AnuncioMedianoInterface } from "./types";

export default function Anuncio({
  id,
  category,
  title,
  description,
  price,
  image,
  descuento,
  url,
}: AnuncioMedianoInterface) {
  return (
    <figure className={`relative border `}>
      <div className={`absolute top-16 left-8 w-1/2`}>
        <p className="text font-semibold text-red-500">{descuento}</p>
        <p className="text text-sky-500">{category}</p>
        <h4 className="text-4xl font-bold">{title}</h4>
        <p className="text text-neutral-600 mb-16 ">{description}</p>
        <a className="bg-sky-500 px-6 py-3 text-white" href="">
          SHOP NOW
        </a>
      </div>
      <img className="" src={image} />
    </figure>
  );
}
