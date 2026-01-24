import Image from "next/image";
import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="hero min-h-[40vh] bg-base-200">
      <div className="hero-content flex-col space-x-10 lg:flex-row">
        <Image
          width={1000}
          height={1000}
          src="https://i.ibb.co.com/qLGKnrxP/istockphoto-1073935306-612x612.jpg"
          className="max-w-sm rounded-full shadow-2xl"
          alt="Hero"
        />
        <div>
          <h1 className="text-4xl font-bold">Shop Smart. Live Better.</h1>
          <p className="py-4 text-gray-500">
            Discover quality products at unbeatable prices.
          </p>
          <Link href={"/products"} className="btn btn-primary gap-2">
            <FaShoppingBag /> Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}
