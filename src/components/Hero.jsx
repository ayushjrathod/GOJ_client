import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <section className="flex justify-center" id="hero">
      {/* Flex Container */}
      <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 ml-12 space-y-0 md:space-y-0 md:flex-row">
        {/* Left Item */}
        <div className="flex flex-col mb-32 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-left mb-2">
            About Department
          </h1>
          <p className=" w-[450px] text-center text-darkGrayishBlue md:text-left">
            As per the Allocation of Business (Rules), 1961, Department of
            Justice is a part of Ministry of Law & Justice, Government of India.
            It is one of the oldest Ministries of the Government of India. Till
            31.12.2009, Department of Justice was part of Ministry of Home
            Affairs and Union Home Secretary had been the Secretary of
            Department of Justice. Keeping in view the increasing workload and
            formulating many policies and programmes on Judicial Reforms in the
            country, a separate Department namely Department of Justice was
            carved out from MHA and placed under the charge of Secretary to
            Government of India and it started working as such from 1st January,
            2010 under the Ministry of Law & Justice.
          </p>
          <div className="flex justify-center md:justify-start mt-6">
            <Link
              to="#"
              className="p-3 px-6 pt-2 text-white bg-[#22409A] rounded-full baseline hover:bg-brightRedLight"
            >
              Explore More
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-12 items-center">
        <img
          className="h-[25%] w-50%]"
          src="../src/assets/images/g20.png"
          alt="image"
        />
        <img
          className="h-[25%] w-[50%]"
          src="../src/assets/images/azadi.png"
          alt="image"
        />
      </div>
    </section>
  );
};

export default Hero;
