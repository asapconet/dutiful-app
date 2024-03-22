import RootLayout from "../layout";
import Image from "next/image";
import { AvatarCard } from "./components/AvaterCard";
import { PlainCard } from "./components/PlainCard";
import overviewDB1 from "../../assets/images/overviewDB1.png";
import calender from "../../assets/images/Calendar.png";
import blocked from "../../assets/images/blocked.png";
import timer from "../../assets/images/time.png";

export default function HomePage() {
  return (
    <section className="text-6xl min-h-[70vh] mt-[96px] ">
      <div className="grid lg:grid-cols-2 gap-1 px-4 w-full min-h-[634px]">
        <div className="col-span-1 h-full flex justify-center items-center">
          <div className=" text-dark_gray text-left w-auto md:w-[559px]">
            <p className="text-[2.1rem] text-recoleta font-bold py-4 md:py-12 leading-normal">
              List and grow your business  with just few clicks
            </p>
            <p className="text-[1.3rem] font-[450] text-dark_gray text-circular leading-normal">
              Eliminate manual work and save time by listing your business or
              service on the best business directory in Nigeria.
            </p>
          </div>
        </div>
        <div className="col-span-1 flex flex-col justify-center items-center relative">
          <div className="w-full md:w-[674px] h-[437px] bg-primary rounded-[1.7rem] mt-24 sm:mt-48" />
          <Image
            src={overviewDB1}
            alt="cover"
            width={460}
            height={100}
            className="absolute -bottom-4"
          />
        </div>
      </div>

      {/* SECOND HERO */}
      <div className="grid lg:grid-cols-2 gap-1 min-h-[634px] my-10">
        <div className="col-span-1 h-full lg:hidden flex justify-center items-center">
          <div className=" text-dark_gray w-[326px] md:w-[526px]">
            <p className="text-[2.1rem] text-recoleta font-bold py-12 leading-normal">
              Collect reviews and ratings from customers
            </p>
            <p className="text-[1.3rem] text-circular text-dark_gray leading-normal ">
              Accelerate your business reputation by 90% and gain social
              proof through reviews and ratings requested from customers.
            </p>
          </div>
        </div>
        <div className="col-span-1 flex flex-col justify-center items-center relative">
          <div
            className="w-[326px] md:w-[526px] h-[526px] blur-xl bg-gradient-to-r 
              from-[#e7b4dcd4] to-[#dc8af0] rounded-[45%]"
          >
            <div className=" flex justify-center items-center h-[526px]">
              <div
                className="flex justify-center w-[126px] md:w-[226px] h-[226px] items-center 
                  bg-white rounded-[45%] blur-sm"
              />
            </div>
          </div>
          <AvatarCard className="md:right-[11rem] rotate-42 md:rotate-12 z-20" />
          <AvatarCard
            className="top-[4rem] md:left-[13rem] rotate-12 md:-rotate-12 z-10"
            text="Tomi does a great job as an hair stylist. 
                I haven’t  stopped coming back since I 
                first patronized her."
          />
          <AvatarCard className="bottom-[4rem] md:left-[13rem] rotate-3 md:-rotate-3 z-30" />
        </div>
        <div className="col-span-1 h-full hidden lg:flex justify-center items-center">
          <div className=" text-dark_gray w-[326px] md:w-[526px]">
            <p className="text-[2.1rem] text-recoleta font-bold py-12 leading-normal">
              Collect reviews and ratings from customers
            </p>
            <p className="text-[1.3rem] text-circular text-dark_gray leading-normal ">
              Accelerate your business reputation by 90% and gain social
              proof through reviews and ratings requested from customers.
            </p>
          </div>
        </div>
      </div>

      {/* THIRD HERO */}
      <div className="bg-[#FCFAFF] lg:mx-[8rem] pt-[14rem] my-12 pb-[6rem] px-[1.8rem] rounded-3xl">
        <div className="grid lg:grid-cols-2 gap-1 w-full min-h-[634px] mb-12">
          <div className="col-span-1 flex flex-col justify-center items-center relative">
            <div className="w-full lg:w-[638px] h-[521px] sm:h-[621px] bg-primary rounded-[1.7rem]" />
            {/*Space for the iPhone markup*/}
          </div>
          <div className="col-span-1 min-h-[634px] flex justify-start items-center relative">
            <PlainCard
              className="absolute top-4 sm:-top-[4rem] lg:-top-[9rem] sm:right-[2rem] lg:-left-10"
              title="Get Discovered"
              text="Dutiful is more than just a business directory; 
              it also enhances your web profile. The platform makes use of SEO 
              techniques to boost each listing’s performance in the SERPs, 
              providing any business the chance to rank, regardless of how 
              strong their current online presence is."
            />
            <PlainCard
              className="absolute bottom-[8rem] sm:bottom-[10rem] lg:bottom-[13rem] lg:-left-44"
              title="Instant Chat"
              text="You’ll be able to chat and send voice recordings 
                with potential and existing customers, including managing your
                 captured leads anytime, anywhere via the platform"
            />{" "}
            <PlainCard
              className="absolute -bottom-[14rem] sm:-bottom-[9rem] lg:-bottom-[8rem] sm:right-[2rem] lg:-left-10"
              title="Quotations"
              text="In addition to providing customers with access to information
                , offering customer quotations is very advantageous to the way
                 you conduct your business. On Dutiful, you’ll be able to send and
                  receive quotation from customers - an important step in lead management."
            />
          </div>
        </div>{" "}
      </div>

      {/* LAST HERO */}
      <div className="grid lg:grid-cols-2 gap-4 w-full min-h-[634px] my-10">
        <div className="col-span-1 h-full md:hidden flex justify-center lg:justify-start items-center">
          <div className=" text-dark_gray w-[70%]">
            <p className="text-[2.1rem] text-recoleta font-bold py-12 leading-normal">
              Accept and sell appointments
            </p>
            <p className="text-[1.3rem] text-dark_gray leading-normal text-circular ">
              Let customers book their own appointment or consultation. Start
              accepting payments for appointments through your booking page.
            </p>
          </div>
        </div>
        <div className="col-span-1 flex justify-center lg:justify-end items-center relative">
          <div className="flex gap-2 items-center">
            <div className="flex flex-col gap-4">
              <Image src={blocked} alt="time cover" width={300} />
              <Image src={calender} alt="time cover" width={300} />
            </div>
            <div className="">
              <Image src={timer} alt="time cover" width={200} />
            </div>
          </div>
        </div>
        <div className="col-span-1 h-full hidden md:flex justify-center lg:justify-start items-center">
          <div className=" text-dark_gray w-[70%]">
            <p className="text-[2.1rem] text-recoleta font-bold py-12 leading-normal">
              Accept and sell appointments
            </p>
            <p className="text-[1.3rem] text-dark_gray leading-normal text-circular ">
              Let customers book their own appointment or consultation. Start
              accepting payments for appointments through your booking page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
