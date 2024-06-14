interface BlogPostProps {
  title: string;
  image: string;
}

export const BlogPost: React.FC<BlogPostProps> = ({ title, image }) => {
    const backgroundImageStyle = {
        backgroundImage: "url(" + image + ")",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      };

  return (
    <div className="flex flex-col max-h-full items-center justify-end py-6 px-8 text-center" style={backgroundImageStyle}>
      <p>{title}</p>
      <button className="bg-black text-white px-6 py-2 mt-4">Leer más</button>
    </div>
  );
};
