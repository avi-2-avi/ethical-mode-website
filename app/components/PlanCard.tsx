import Image from "next/image";

interface PlanProps {
  title: string;
  image: string;
  children: React.ReactNode;
}

export const Plan: React.FC<PlanProps> = ({ title, children, image }) => {
  return (
    <div className="flex flex-row items-center bg-yellow rounded-3xl p-8 max-w-[420px] shadow mx-4">
      <Image
        src={image}
        alt={title}
        className="h-[100px] w-auto hidden sm:flex"
        width={100}
        height={200}
      />
      <div className="pl-6">
        <p className="font-semibold">{title}</p>
        {children}
      </div>
    </div>
  );
};
