import Image from "next/image";

interface BrandCardProps {
    title: string;
    url: string;
    image: string;
}

export const BrandCard: React.FC<BrandCardProps> = ({
    title,
    url,
    image
}) => {
    return (
        <div className="flex flex-col items-center hover:underline underline-offset-2">
            <Image src={image} alt={title} width={300} height={200} />
            <a href={url} className="flex flex-row space-x-2 mt-4">
                <p className="text-2xl">{title}</p>
                <Image src="/svgs/arrow-right.svg" alt="arrow-right" width={20} height={20} />
            </a>
        </div>
    )
}
