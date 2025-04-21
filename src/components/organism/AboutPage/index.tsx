import Image from "next/image";

const skills = ["HTML", "CSS", "JavaScript", "ReactJS", "NextJS"];

export default function AboutPage() {
    return (
        <main className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-black text-white p-8">
            {/* Left Section: Profile Image */}
            <div className="lg:w-1/3 flex justify-center mb-8 lg:mb-0">
                <Image
                    src="/profile.png"
                    alt="Bagus Moehamad Abduh"
                    width={400}
                    height={400}
                    className="shadow-lg transition-transform transform hover:scale-105"
                    priority
                />
            </div>

            {/* Right Section: About Content */}
            <div className="lg:w-2/3 lg:pl-12">
                <h1 className="text-5xl md:text-6xl font-bold text-amber-500 mb-6 text-center lg:text-left">
                    About Me
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8 text-justify">
                    Hello! I’m Bagus Moehamad Abduh, a passionate web developer with a
                    focus on creating dynamic and user-friendly web applications. I love
                    coding and enjoy solving complex problems through technology.
                </p>

                {/* Skills Section */}
                <div className="mt-8">
                    <h2 className="text-3xl font-bold text-amber-500 mb-6 text-center lg:text-left">
                        My Skills
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {skills.map((skill) => (
                            <div
                                key={skill}
                                className="bg-gray-800 text-center py-2 rounded-lg shadow-md"
                            >
                                <span className="text-lg font-medium">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Download CV Button */}
                <div className="mt-12 flex justify-center lg:justify-start">
                    <a
                        href="https://drive.google.com/file/d/12B8Z3zfX-LpILvruFR_w3Ptef7IdO9my/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-amber-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-amber-700 transition"
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </main>
    );
}