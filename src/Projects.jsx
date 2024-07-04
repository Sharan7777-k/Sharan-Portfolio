import Investmentimg from "../src/assets/investment.jpg";
import Commerceimg from "../src/assets/ecommerce.jpg";
import Zodiacimg from "../src/assets/zodiac.jpg";
import Manpowerimg from "../src/assets/manpower.jpg";
import Qrcodeimg from "../src/assets/qrcode.jpg";

const Projects = () => {
  const config = {
    projects: [
      {
        animation: "flip-left",
        title: "Bulletin Investment",
        image: Investmentimg,
        description:
          "Bulletin Investment offers diverse opportunities in the oil, gas,and energy sectors. Invest with us to grow your portfolio and earn substantial profits.",
      },
      {
        animation: "flip-up",
        title: "Ecommerce",
        image: Commerceimg,
        description:
          "Explore our comprehensive ecommerce solutions designed to enhance online shopping experiences. Grow your business with our advanced features and seamless integration.",
      },
      {
        animation: "flip-right",
        title: "App Landing Page",
        image: Zodiacimg,
        description:
          "Bet on your zodiac sign and earn rewards with our innovative gaming platform. Experience the thrill of prediction and win big! by going your Predictions",
      },
      {
        animation: "flip-left",
        title: "Manpower Website",
        image: Manpowerimg,
        description:
          "Helping professionals secure opportunities abroad and achieve their career goals. Partner with us for a seamless transition to international employment.",
      },
      {
        animation: "flip-right",
        title: "QR Code Generator",
        image: Qrcodeimg,
        description:
          "Generate QR codes instantly for any link at any size that you need with our user-friendly platform. Simplify sharing and enhance connectivity effortlessly.",
      },
    ],
  };

  return (
    <section
      id="projects"
      className="flex flex-col px-5 py-5 justify-center relative bg-home dark:bg-skills"
    >
      <div className="flex flex-col justify-center items-center">
        <h1
          data-aos="fade-down"
          className="text-2xl text-skills mt-10 dark:text-home font-bold border-b-2 border-red-300 pb-2 md:text-3xl"
        >
          PROJECTS
        </h1>
        <p
          data-aos="fade-down"
          className="md:text-2xl text-xl text-skills dark:text-home font-semibold mt-5"
        >
          Projects I Have Worked With
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 md:p-10 md:gap-4">
        {config.projects.map((project, index) => (
          <div
            key={index}
            data-aos={project.animation}
            className="max-w-sm mx-auto  mt-10 bg-skills shadow-lg rounded-lg overflow-hidden"
          >
            <img
              className="project-image w-full h-48 object-cover"
              src={project.image}
              alt="Card image"
            />
            <div className="h-full px-6 py-4 bg-projects">
              <h2 className="text-lg md:text-xl font-bold mb-5">
                {project.title}
              </h2>
              <p className="project-content">{project.description}</p>
              <a href="#" className="project-button dark:text-white">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
