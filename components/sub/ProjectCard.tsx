import Image from "next/image";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <div className="relative rounded-lg shadow-lg shadow-[#2a0e61]/60 border border-[#2a0e61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain shadow-lg shadow-[#2a0e61]/20"
      />
      <div className="relative p-4 flex items-start flex-col gap-5">
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-2xl font-semibold text-white">{title}</h2>
          <p className="text-gray-300">{description}</p>
        </div>
        <a
          href={link}
          target="_blank"
          className="text-gray-100 text-[14px] font-medium border border-[#7042f8] bg-[#7042f8]/40 hover:bg-[#7042f8]/70 transition-all px-4 rounded-3xl py-1.5 mt-1.5 z-50">
          Visit Website!
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
