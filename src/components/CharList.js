import { CharCard } from './CharCard';

export function CharList({ data }) {
    
    return (
        <div className="flex flex-row flex-wrap place-content-center">
            {data.map((char) => <CharCard key={char[1].name} char={char} />)}
        </div>
    );
}