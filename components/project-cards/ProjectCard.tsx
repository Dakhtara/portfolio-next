import Card from "../card/card";
import LabelTechno from "../macro/LabelTechno";

export type ProjectCardProps = {
    title: string;
    description: string;
    technos: string[];
}

export default function ProjectCard(props: ProjectCardProps) 
{
    return (
        <Card>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <div className="flex gap-2">
                {props.technos.map((techno) => (
                    <LabelTechno techno={techno} />
                ))}
            </div>
        </Card>
    );
}