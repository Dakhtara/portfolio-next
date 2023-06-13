export type LabelTechnoProps = {
    techno: string;
}

export default function LabelTechno(props: LabelTechnoProps) {
    return (
        <span className="bg-purple-200/10 font-bold text-purple-400 text-sm px-2 py-1 rounded-xl">
            {props.techno}
        </span>
    );
}