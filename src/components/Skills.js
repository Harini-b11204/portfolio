// Skills.js
export default function Skills() {
    const skills = ["Python","C","Java", "HTML", "CSS", "Javascript", "Reactjs", "Nodejs","SQL","MongoDB","EDA","Data Visualization","Data Warehousing","Git","GitHub"];
    return (
        <section id="skills"
            className="px-10 w-full my-40 max-w-5xl mx-auto ">
            <h2 className="text-center text-4xl text-blue-600 font-bold" style={{paddingTop:'30px'}}>
                My Skills
            </h2>
            <div className="mt-10 flex gap-4 justify-center 
                            flex-wrap mx-auto max-w-xxl">
                {skills.map((skill, index) => {
                    return (
                        <div key={index}
                             className="cursor-pointer px-12 py-10 
                                        rounded bg-blue-300 text-gray-700 text-lg 
                                        flex items-center justify-center 
                                        font-bold hover:shadow-xl" style={{fontFamily:'cursive'}}>
                            {skill}
                        </div>
                    )})}
            </div>
        </section>
    )
}
