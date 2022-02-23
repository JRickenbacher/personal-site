export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:itemspstart md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4x1 text-3x1 mb-4 font-medium text-white">
                        Hi, I'm Jason.
                    </h1>
                    <p className="mb-8 leadinng-relaxed">
                        Here is a little about me...
                    </p>
                    <div className="flex justify-center">
                        <a href="#contact" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Reach out to me!
                        </a>
                        <a href="#projects" className="m1-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            Check out my past projects.
                        </a>
                    </div>
                </div>
                <img className="object-cover w-72 h-96 object-center rounded" alt="me" src="/TomTom_Profile_Picture.jpeg"/>
            </div>
        </section>
    )
}