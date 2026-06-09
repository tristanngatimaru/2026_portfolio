interface useMinorProject {
  title: string;
  description: string;
  link: string;
}

function MinorProjects({ title, description, link }: useMinorProject) {
  return (
    <a
      href={link}
      className="w-full h-32 rounded-2xl  bg-black/20 hover:bg-black/50 backdrop-blur-md shadow-xl hover:scale-103 transition-all ease-in-out duration-200 flex flex-col items-center justify-center text-center"
    >
      <h1 className="text-xl">{title}</h1>
      <p className="text-sm">{description}</p>
    </a>
  );
}
export default MinorProjects;
