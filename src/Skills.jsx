
import Angularimg from "../src/assets/angular.png";
import Reactimg from "../src/assets/react.png";
import Htmlimg from "../src/assets/html.png";
import Cssimg from "../src/assets/css.png";
import Javascriptimg from "../src/assets/javascript.png";
import Javaimg from "../src/assets/java.png"; 
import Mysqlimg from "../src/assets/mysql.png";
import Gitimg from "../src/assets/git.png"; 


const Skills = () => {

  const config = {
    skills: [
      {
        animation: "fade-right",
        duration: "3000",
        image: Angularimg,
        skill: "Angular",
      },
      {
        animation: "fade-right",
        duration: "3000",
        image: Reactimg,
        skill: "React",
      },
      {
        animation: "fade-left",
        duration: "3000",
        image: Htmlimg,
        skill: "Html",
      },
      {
        animation: "fade-left",
        duration: "3000",
        image: Cssimg,
        skill: "CSS",
      },
      {
        animation: "fade-right",
        duration: "3000",
        image: Javascriptimg,
        skill: "Javascript",
      },
      {
        animation: "fade-right",
        duration: "3000",
        image: Javaimg,
        skill: "Java",
      },
      {
        animation: "fade-left",
        duration: "3000",
        image: Mysqlimg,
        skill: "MySql",
      },
      {
        animation: "fade-left",
        duration: "3000",
        image: Gitimg,
        skill: "Git",
      },
    ],
  };
  return (
    <section
      id="skills"
      className=" flex flex-col mx-auto p-8 justify-center items-center  bg-home dark:bg-white"
    >
      <h1
        data-aos="fade-down"
        className=" text-2xl text-white dark:text-home font-bold border-b-2 mt-10 border-b-red-300 pb-2 md:text-3xl"
      >
        MY SKILLS
      </h1>
      <div
        data-aos="zoom-out"
        className="grid grid-cols-2 md:grid-cols-4 md:w-auto mb-20 mt-16 mx-auto gap-12 p-10  bg-skills dark:bg-gray-900  shadow-lg rounded-xl overflow-hidden "
      >
        {config.skills.map((item, index) => (
          <div key={index} data-aos={item.animation} data-aos-duration={item.duration}
            className="max-w-sm mx-auto bg-skillbackground  dark:bg-skills  shadow-lg rounded-lg overflow-hidden flex flex-col justify-center items-center  w-20 md:w-32  "
          >
            <img className="w-20 h-20 object-cover p-3" src={item.image} />
            <p className=" text-sm font-extrabold text-skills dark:text-black mb-3 md:text-lg">
              {item.skill}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills