export default function Skills() {
    const skills = [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 80 },
        { name: "ReactJS", level: 80 },
        { name: "NextJS", level: 80 },
    ];

    return (
        <main className="min-h-screen bg-black text-white p-8">
            <h1 className="text-4xl font-bold text-amber-500 mb-8 text-center">My Skills</h1>
            <div className="max-w-4xl mx-auto space-y-6">
                {skills.map((skill) => (
                    <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                            <span className="text-lg font-medium">{skill.name}</span>
                            <span className="text-lg font-medium">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-4">
                            <div
                                className="bg-amber-500 h-4 rounded-full"
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}