import { Project } from "../constant";

function ProjectCard({ name, image, BElink, FElink, demo }: Project) {
  return (
    <div className="flex-1 border border-gray-100 px-4 pb-8 pt-4 rounded-md sm:my-0 my-3">
      <div className="flex justify-center items-center">
        <img
          src={image}
          alt="project image"
          className="object-cover h-[250px] w-full hover:brightness-50 brightness-100 hover:cursor-pointer transition-all duration-200"
        />
      </div>
      <div>
        <p className="text-center font-semibold py-2 capitalize text-[26px]">
          {name}
        </p>
        <div className="flex justify-center items-center my-2">
          <div>
            {FElink && FElink !== "" && (
              <button className="border mx-2 border-gray-300 py-2 sm:py-1 px-3 rounded-full hover:bg-black bg-white transition-all duration-250 ">
                <a
                  className="text-[14px] sm:text-[16px] text-gray-600 hover:text-white"
                  href={FElink}
                >
                  FE Github
                </a>
              </button>
            )}
          </div>
          <div>
            {BElink && BElink !== "" && (
              <button className="border mx-2 border-gray-300 py-2 sm:py-1 px-3 rounded-full hover:bg-black bg-white transition-all duration-250 ">
                <a
                  className="text-[14px] sm:text-[16px] text-gray-600 hover:text-white"
                  href={BElink}
                >
                  BE Github
                </a>
              </button>
            )}
          </div>
          <div>
            {demo && demo !== "" && (
              <button className="border mx-2 border-gray-300 py-2 sm:py-1 px-3 rounded-full hover:bg-black bg-white transition-all duration-250 ">
                <a
                  className="text-[14px] sm:text-[16px] text-gray-600 hover:text-white"
                  href={demo}
                >
                  Live Demo
                </a>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
