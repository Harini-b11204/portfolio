// Projects.js
export default function Projects() {
    return (
        <section
            id="projects"
            className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto"
        >
            <h2 className="text-4xl text-blue-600 font-bold text-center" style={{ paddingTop: '30px' }}>
                My Projects
            </h2>
            {/* Professional Experience - UPS Logistics */}
            <div className="p-10 bg-gradient-to-r from-blue-300 to-blue-200 flex flex-col justify-center items-center gap-5 
                           lg:flex-row max-w-5xl mx-auto shadow-lg rounded-lg w-full">
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center text-blue-700">
                        🚚 UPS Logistics - Professional Experience
                    </h2>
                    <p className="text-gray-800 text-lg font-semibold" style={{ fontFamily: 'cursive' }}>
                        Current Role: ISM Intern
                    </p>
                    <p className="text-gray-700 text-base" style={{ fontFamily: 'cursive' }}>
                        • Worked with Java-based backend technologies to implement scalable and maintainable solutions<br/>
                        • Analyzing operational data to optimize delivery routes and reduce costs<br/>
                        • Designed and executed SQL queries, database operations, and performance optimizations using PostgreSQL.<br/>
                        • Contributing to full-stack development using modern technologies
                    </p>
                </div>
            </div>

            {/* Sentiment Analysis */}
            <div
                onClick={() =>
                    window.open(
                        'https://github.com/Harini-b11204/ml-prediction-projects/tree/main/sentiment-analysis',
                        '_blank',
                        'noopener,noreferrer'
                    )
                }
                className="cursor-pointer p-10 bg-blue-200 flex flex-col justify-center items-center gap-5 
                           lg:flex-row max-w-5xl mx-auto shadow transition hover:shadow-xl 
                           hover:scale-[102%] w-full"
            >
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center text-blue-500">
                        Sentimental Analysis
                    </h2>
                    <p className="text-gray-700 text-lg" style={{ fontFamily: 'cursive' }}>
                        This is a project built using Python and the Natural Language Processing library, NLTK.
                        It analyzes the sentiment of a given text using NLP and machine learning techniques.
                    </p>
                </div>
            </div>

            {/* Stock Market Analysis */}
            <div
                onClick={() =>
                    window.open(
                        'https://github.com/Harini-b11204/ml-prediction-projects/tree/main/stock-market-prediction',
                        '_blank',
                        'noopener,noreferrer'
                    )
                }
                className="cursor-pointer p-10 bg-blue-200 flex flex-col justify-center items-center gap-5 
                           lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
                           hover:scale-[102%] w-full"
            >
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center text-blue-500">
                        Stock Market Analysis
                    </h2>
                    <p className="text-gray-700 text-lg" style={{ fontFamily: 'cursive' }}>
                        It uses the pandas library to analyze the stock market data and the matplotlib library
                        to visualize the data. It helps in prediction of stock data.
                    </p>
                </div>
            </div>

            {/* House Price Prediction */}
            <div
                onClick={() =>
                    window.open(
                        'https://github.com/Harini-b11204/ml-prediction-projects/tree/main/house-price-prediction',
                        '_blank',
                        'noopener,noreferrer'
                    )
                }
                className="cursor-pointer p-10 bg-blue-200 flex flex-col justify-center items-center gap-5 
                           lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
                           hover:scale-[102%] w-full"
            >
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center text-blue-500">
                        House Price Prediction
                    </h2>
                    <p className="text-gray-700 text-lg" style={{ fontFamily: 'cursive' }}>
                        This project uses historical house pricing data to predict future prices using
                        regression models and machine learning techniques like LSTM.
                    </p>
                </div>
            </div>
            <div
                onClick={() =>
                    window.open(
                        'https://github.com/Harini-b11204/AI-Chatbot',
                        '_blank',
                        'noopener,noreferrer'
                    )
                }
                className="cursor-pointer p-10 bg-blue-200 flex flex-col justify-center items-center gap-5 
                           lg:flex-row max-w-5xl mx-auto shadow transition hover:shadow-xl 
                           hover:scale-[102%] w-full"
            >
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center text-blue-500">
                        Rule-Based Chatbot Using NLTK
                    </h2>
                    <p className="text-gray-700 text-lg" style={{ fontFamily: 'cursive' }}>
                        A simple rule-based chatbot built with Python and NLTK (Natural Language Toolkit). 
                        This chatbot uses pattern matching and basic natural language processing to provide responses to user input based on predefined rules.
                    </p>
                </div>
            </div>
            <div
                onClick={() =>
                    window.open(
                        'https://github.com/Harini-b11204/NutriPlate',
                        '_blank',
                        'noopener,noreferrer'
                    )
                }
                className="cursor-pointer p-10 bg-blue-200 flex flex-col justify-center items-center gap-5 
                           lg:flex-row max-w-5xl mx-auto shadow transition hover:shadow-xl 
                           hover:scale-[102%] w-full"
            >
                <div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
                    <h2 className="font-bold text-3xl text-center text-blue-500">
                        NutriPlate – AI-powered Food Analysis System 🍽️
                    </h2>
                    <p className="text-gray-700 text-lg" style={{ fontFamily: 'cursive' }}>
                        Scan your plate. Know your nutrition Instantly.
                        NutriPlate is a food detection and nutrition analysis app powered by computer vision + AI models. 
                    </p>
                </div>
            </div>
        </section>
    );
}
