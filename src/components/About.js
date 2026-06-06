// About.js
export default function About() {
    return (
        <section
            id="about"
            className="px-10 w-full flex flex-col lg:flex-row py-20 
                       align-center bg-blue-200 max-w-5xl mx-auto">
            <div className="flex-1 flex flex-col justify-center
                            items-center gap-5 px-6">
                <div>
                    <h2 className="text-center text-blue-600 
                                   text-4xl font-bold">
                        About Me 
                    </h2>
                </div>
                <p className="text-center text-gray-600 text-lg" style={{fontFamily:'cursive'}}>
                  As I said, I am your friendly developer and data enthusiast!
                </p>
                <p className="text-center text-gray-600 justify-center"
                  style={{ textAlign: "justify", fontFamily: "cursive" }}>
                  I am an AI & Data Science student and Backend Developer Intern at UPS with a strong interest in software engineering, cloud technologies, and intelligent systems. Skilled in Java, React, PostgreSQL, MongoDB, and AWS, I enjoy building scalable applications, working with data-driven solutions, and transforming innovative ideas into impactful products.
                </p>
            </div>
            <div className="flex-1">
                <img src=
"https://media.geeksforgeeks.org/img-practice/Asset1-1641910145.svg"
                    alt="About"
                    className="w-full h-full bg-cover" style={{paddingBottom:'7px'}}/>
            </div>
            
        </section>
    );
}
