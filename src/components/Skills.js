// Skills.js
export default function Skills() {
    const skills = ["Python","Java","PostgreSQL", "HTML", "CSS", "Javascript", "Reactjs", "Nodejs","SQL","MongoDB","EDA","Data Visualization","Data Warehousing","Git","GitHub"];
    const professionalSkills = ["Problem Solving", "Data Analysis", "Full-Stack Development", "API Development", "Database Design", "Project Coordination"];
    
    return (
        <section id="skills"
            className="px-10 w-full my-40 max-w-5xl mx-auto ">
            <h2 className="text-center text-4xl text-blue-600 font-bold" style={{paddingTop:'30px'}}>
                My Skills
            </h2>
            
            {/* Technical Skills */}
            <div className="mt-10">
                <h3 className="text-center text-2xl text-blue-500 font-semibold mb-5">Technical Skills</h3>
                <div className="flex gap-4 justify-center 
                                flex-wrap mx-auto max-w-xxl">
                    {technicalSkills.map((skill, index) => {
                        return (
                            <div key={index}
                                 className="cursor-pointer px-12 py-10 
                                            rounded bg-blue-300 text-gray-700 text-lg 
                                            flex items-center justify-center 
                                            font-bold hover:shadow-xl hover:scale-105 transition" style={{fontFamily:'cursive'}}>
                                {skill}
                            </div>
                        )})}
                </div>
            </div>

            {/* Professional Skills */}
            <div className="mt-10">
                <h3 className="text-center text-2xl text-blue-500 font-semibold mb-5">Professional Skills</h3>
                <div className="flex gap-4 justify-center 
                                flex-wrap mx-auto max-w-xxl">
                    {professionalSkills.map((skill, index) => {
                        return (
                            <div key={index}
                                 className="cursor-pointer px-12 py-10 
                                            rounded bg-blue-300 text-gray-700 text-lg 
                                            flex items-center justify-center 
                                            font-bold hover:shadow-xl hover:scale-105 transition" style={{fontFamily:'cursive'}}>
                                {skill}
                            </div>
                        )})}
                </div>
            </div>
        </section>
    )
}
