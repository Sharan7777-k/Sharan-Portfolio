import profileimg from "../src/assets/profile.jpg";
import Resume from "../src/assets/resume.pdf";
import ReactTypingEffect from "react-typing-effect";

const Home = () => {

  const handleDownload = () => {
    console.log("File downloaded");
  };

  return (
    <section
      id="home"
      className=" bg-home dark:bg-white flex flex-col md:flex-row md:px-10 md:py-10 px-16 py-20 justify-center"
    >
      <div
        data-aos="fade-right"
        className="md:w-1/2 flex flex-col md:mt-16 md:py-20 md:px-10"
      >
        <h1 className="font-bold text-3xl text-skills dark:text-home md:text-6xl">
          Hi, I am{" "}
          <span className="text-red-600 dark:text-red-600">
            <ReactTypingEffect
              text={"Sharan"}
              typingDelay={2500}
              eraseDelay={1000000}
              displayTextRenderer={(text) => {
                return <h1>{text}</h1>;
              }}
              speed={100}
              eraseSpeed={50}
              cursorRenderer={(cursor) => <h1>{cursor}</h1>}
            />
          </span>
        </h1>
        <p className="font-semibold text-skills mt-2 dark:text-home md:text-4xl text-3xl py-5">
          I am a Developer
        </p>
        <div className="">
          <a
            href={Resume}
            download="Sharan_Resume.pdf"
            onClick={handleDownload}
          >
            <button className="border-4 border-white-400 px-4 py-3 mt-3  bg-homebutton dark:bg-blue-500 text-black dark:text-white dark:hover:bg-red-600 text-sm font-bold rounded-full hover:transition duration-300 ease-in-out hover:bg-red-500">
              Download CV
            </button>
          </a>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-duration="3000"
        className="relative mt-10 md:w-1/3 flex items-center justify-center group"
      >
        <img
          className="w-full rounded-full md:rounded-full md:object-cover h-[300px] md:h-[500px] border-8 border-gray-200 group-hover:border-white shadow-lg transform hover:scale-105 transition duration-500 ease-in-out"
          src={profileimg}
          alt="Profile"
        />
        <div className="absolute inset-0 bg-black opacity-20  rounded-full"></div>
      </div>
    </section>
  );
};

export default Home;
