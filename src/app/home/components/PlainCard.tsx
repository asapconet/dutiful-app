import { Avatar } from "@/assets/Avater";

export function PlainCard({ className, title, text, ...rest }: any) {
  return (
    <div
      className={`min-h-[239px] w-[480px] p-6 rounded-3xl bg-white
               border-border_gray border absolute ${className} `}
    >
      <div className="flex items-center gap-2">
        <Avatar />
      </div>

      <p className="font-bold text-[1.02rem] text-black w-full my-4">{title}</p>

      <p className="text-[1rem] text-[#666666] leading-normal">
        {text
          ? text
          : "Perfecto! That’s my exclamation every time I patronize Johnson. His works are nothing short of amazing."}
      </p>
    </div>
  );
}
