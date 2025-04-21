import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-black text-white p-6 lg:p-12">
      <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
        <p className="text-3xl md:text-4xl font-[var(--font-poppins)]  text-amber-500 mb-2">
          HELLO!
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-[var(--font-montserrat)] mb-4">
          I&#39;m <span className="text-amber-500">Bagus Moehamad Abduh</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Front End Web Developer
        </p>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
          <Link href="/contact">
            <button className="bg-amber-600 text-white text-lg font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-amber-700 transition">
              Hire Me
            </button>
          </Link>
          <Link href="/projects">
            <button className="border border-amber-600 text-amber-600 text-lg font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-amber-700 hover:text-white transition">
              My Works
            </button>
          </Link>
        </div>
      </div>

      <div className="lg:w-1/2 flex justify-center">
        <Image
          src="/profile.png"
          alt="Bagus Moehamad Abduh"
          width={400}
          height={400}
          className="object-cover shadow-lg"
          priority
        />
      </div>
    </main>
  );
}
