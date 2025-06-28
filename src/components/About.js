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
                  As I said, I am your friendly developer...
                </p>
                <p className="text-center text-gray-600 justify-center" style={{textAlign:'justify',fontFamily:'cursive'}}>
                  I am a passionate self-taught developer with about 4 years of experience. I have a deep understanding of analyzing, processing, and visualizing data, and I am also experienced in web development.
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
