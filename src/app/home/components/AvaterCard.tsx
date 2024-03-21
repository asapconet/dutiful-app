import { Avatar } from "@/assets/Avater";
import { IoMdStar } from "react-icons/io";

export function AvatarCard({ className, text }: any) {
  return (
    <div
      className={`h-[213px] w-[301px] p-8 rounded-lg bg-white
               border-border_gray border absolute ${className} `}
    >
      <div className="flex items-center gap-2">
        <Avatar />
        <p className="font-bold text-[1.15rem] text-black">Adeola Fatoyinbo</p>
      </div>
      <div className="flex items-center text-[#FCC945]">
        <IoMdStar size={25} />
        <IoMdStar size={25} />
        <IoMdStar size={25} />
        <IoMdStar size={25} />
        <IoMdStar size={25} />
      </div>
      <p className="text-[.8rem] text-[#666666] leading-normal mt-4">
        {text
          ? text
          : "Perfecto! That’s my exclamation every time I patronize Johnson. His works are nothing short of amazing."}
      </p>
    </div>
  );
}
