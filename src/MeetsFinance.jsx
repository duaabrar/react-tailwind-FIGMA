import Image from "./assets/Images/image5.png";
import group from "./assets/Images/Group 57.png";
import { data } from "./QuantamComputingModel.jsx";
function QuantumComputing() {
  return (
    <div id="technology" className="relative bg-[#F9F3FF]">
      <img
        src={group}
        alt="Hero Background"
        className="absolute w-full h-full object-cover"
      />

      <div className="relative z-20 pt-[52px] pb-[38px] sm:py-[103px] md:px-20  px-[28px]  w-full">
        <div className="max-w-full mx-auto text-center flex flex-col-reverse lg:flex-row sm:justify-between">
          <div className="text-center sm:text-left flex">
            <div className="w-[238px] sm:w-[451px] lg:mr-16  m-auto">
              <img
                className="w-[238px] sm:w-[451px] mt-9.5  lg:mt-0 m-auto"
                src={Image}
                alt="m3"
              />
            </div>
          </div>

          <div className="max-w-[708px] lg:text-left m-auto  lg:m-0">
            <span className="border border-[#693B93] bg-[#F9F3FF] text-[#693B93] px-4 py-2 rounded-[20px] font-bold text-[12px] leading-[100%]">
              {data.badge}
            </span>
            <h1 className=" font-bold text-[26px] sm:text-[38px] md:text-[48px] leading-[100%] tracking-[0] mt-6 sm:mt-5 ">
              {data.heading}{" "}
              <span className=" font-bold text-[26px] sm:text-[38px] md:text-[48px] leading-[100%] tracking-[0] text-[#693B93]">
                {data.highlight}
              </span>
            </h1>
            <p className="font-light text-[12px] lg:text-left lg:mt-5 sm:text-[18px] sm:leading-[25px] leading-[19px] tracking-[0] text-center text-[#0F0F0F] mt-4 max-w-[802px] mx-auto">
              {data.description}
            </p>
            {data.features?.map(function (ele, index) {
              return (
                <div className="mt-[37px] sm:mt-[25px]  ">
                  <h1 className="font-bold text-[20px] leading-[100%] tracking-[0%] text-[#693B93]">
                    {ele.title}
                  </h1>
                  <p className="font-light text-[16px] leading-[25px] mt-[10px] tracking-[0%]">
                    {ele.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuantumComputing;
