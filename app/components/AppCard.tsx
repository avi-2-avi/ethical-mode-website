import Image from "next/image";

interface AppCardProps {
  title: string;
  children: React.ReactNode;
}

export const AppCard: React.FC<AppCardProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col items-center bg-yellow py-8 px-4 mx-4 sm:px-14 rounded-xl shadow-md shadow-black/30 max-w-[400px]">
      <p className="text-3xl text-green font-semibold">{title}</p>
      <div className="text-black py-8">{children}</div>
      <div className="flex flex-row justify-between">
        <Image src="/svgs/google.svg" alt="google" className="h-auto lg:w-[140px]" width={120} height={20} />
        <Image src="/svgs/apple.svg" alt="apple" className="h-auto lg:w-[140px]" width={120} height={20} />
      </div>
    </div>
  );
};
