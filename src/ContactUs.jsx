import Contactimg from "../src/assets/contact.jpg"; 

const ContactUs = () => {
  return (
    <section
      id="contact"
      className=" flex flex-col mx-auto justify-center items-center bg-home dark:bg-skills"
    >
      <h1
        data-aos="fade-down"
        className=" text-2xl text-white dark:text-home font-bold border-b-2 mt-10 border-b-red-300  pb-2 md:text-3xl"
      >
        Contact Me
      </h1>
      <img src={Contactimg} className=" mt-14 h-[300px] w-[300px]" />
      <p className="w-52 text-base text-white dark:text-home leading-loose tracking-wide md:text-xl md:w-full flex justify-center mt-7 font-semibold ">
        If you want to contact me,please contact through
      </p>
      <label className="font-semibold text-white dark:text-home flex flex-row text-xl mt-7">
        Email :{" "}
        <p className="font-semibold font-Raleway underline mb-14 text-blue-700">
          sharan@gmail.com
        </p>
      </label>
    </section>
  );
}

export default ContactUs