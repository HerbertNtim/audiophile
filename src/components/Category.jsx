import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    imageUrl: "/images/image-category-thumbnail-headphones.png",
    href: "/headphones",
    heading: "HEADPHONES",
  },
  {
    imageUrl: "/images/image-category-thumbnail-speakers.png",
    href: "/speakers",
    heading: "SPEAKERS",
  },
  {
    imageUrl: "/images/image-category-thumbnail-earphones.png",
    href: "/earphones",
    heading: "EARPHONES",
  },
];

const Category = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 px-4">
      {categories.map((category, index) => (
        <CategoryCard key={index} imageUrl={category.imageUrl} heading={category.heading} href={category.href}/>
      ))}
    </div>
  );
};

export default Category;

// This component displays a category section with three cards for headphones, speakers, and earphones.
const CategoryCard = ({ imageUrl, href, heading }) => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="z-10 absolute -top-18">
        <Image
          src={imageUrl}
          alt={`category ${heading.toLowerCase()}`}
          width={150}
          height={150}
          className="object-contain"
        />
      </div>

      <div className="bg-slate-200 w-64 pt-16 pb-8 rounded-lg text-center shadow-md z-0">
        <h3 className="text-lg font-bold tracking-wider mb-2 text-black">
          {heading}
        </h3>
        <Link
          href={href}
          className="text-sm font-semibold text-gray-500 hover:text-orange-500 transition flex items-center justify-center gap-2 uppercase tracking-wider"
        >
          SHOP
          <Image
            src="/icons/icon-arrow-right.svg"
            alt="arrow right"
            width={10}
            height={10}
          />
        </Link>
      </div>
    </div>
  );
};
