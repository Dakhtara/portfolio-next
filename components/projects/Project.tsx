export type ProjectProps = {
  name: string;
  children?: React.ReactNode;
};

export default function Project(props: ProjectProps) {
  return (
    <div className="flex flex-col gap-2 cursor-pointer hover:bg-sky-900/50 rounded-lg px-4 py-2 transition-all">
      <h1 className="text-xl">{props.name}</h1>
      {props.children && <div className="text-[#CECECE]">{props.children}</div>}
    </div>
  );
}
