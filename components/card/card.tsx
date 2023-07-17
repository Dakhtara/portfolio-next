export type CardProps = {
    children: React.ReactNode;
}

export default function Card(props: CardProps) 
{
    return (
        <div className="rounded-xl border text-white h-40 flex flex-col justify-between border-indigo-400 px-2 py-2">
            {props.children}
        </div>
    );
}