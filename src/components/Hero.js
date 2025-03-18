import Resume from './Resume.pdf'
export default function Hero() {
    return (
      <section
        id="hero"
        className="px-10 w-full flex gap-12 flex-col lg:flex-row 
                   justify-center items-center align-center mt-40 
                   mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]">
        <div className="flex-1 flex flex-col justify-left items-center gap-5">
          <div>
            <h5 className="text-center text-xl font-bold text-gray-500 mb-2">
                Hi and welcome to
            </h5>
            <h3 className="text-center text-blue-600 text-4xl font-bold text-lg">
              My Portfolio
            </h3>
          </div>
          <p className="text-center text-gray-600 text-lg" style={{fontFamily:'cursive'}}>
            I am an Artificial intelligence and Data Science student aspiring to become a data analyst . You can download my resume here .. 
          </p>
          <a href={Resume} alter="resume">
          <button className=" hover:bg-gray-200 text-blue-400 font-bold py-1 gap-10 align-center" style={{}}> Download My Resume</button>
        </a>
        </div>
        
        <div className="flex-1">
        <img src=
  "https://cdn.magicdecor.in/com/2023/02/29203804/image-1686131202-6252.jpg"
               alt="Hello.svg"
               className="w-full h-full bg-inherit " />
        </div>
      </section>
    );
  }
