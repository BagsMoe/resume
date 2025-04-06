import Image from "next/image";

export default function About() {
  return (
    <main className="flex flex-col lg:flex-row items-center justify-center h-[100vh] bg-black p-8">
      <div className="lg:w-1/3 flex justify-center mb-8 lg:mb-0">
        <Image
          src="/profile.png"
          alt="Bagus Moehamad Abduh"
          width={300}
          height={300}
          className="object-fit shadow-lg transition-transform transform hover:scale-105"
          priority
        />
      </div>

      <div className="lg:w-2/3 lg:pl-12">
        <h1 className="text-6xl font-bold text-amber-500 mb-4">About Me</h1>
        <p className="text-lg text-gray-100 mb-6 text-justify">
          Hello! I’m Bagus Moehamad Abduh, a passionate web developer with a
          focus on creating dynamic and user-friendly web applications. I love
          coding and enjoy solving complex problems through technology.
        </p>
        <div className="mt-8">
          <a
            href="https://drive.google.com/file/d/1b7wmvtkCWmz2D5hkitg19L00u4GFpTxa/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-600 text-white px-6 py-2 rounded-2xl hover:bg-amber-700 transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </main>
  );
}
