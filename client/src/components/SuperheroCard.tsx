import { ICreateSuperhero } from "@/app/interfaces/createSuperhero.interface";

interface SuperheroCardProps {
  superhero: ICreateSuperhero;
}

const SuperheroCard: React.FC<SuperheroCardProps> = ({ superhero }) => {
  return (
    <div
      key={superhero.name}
      className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    >
      <h2 className="text-2xl font-semibold text-superhero-yellow">
        {superhero.name}
      </h2>
      <p className="text-gray-400 mt-2">{superhero.superpower}</p>
      <p className="text-gray-500 mt-2">
        Humility Score: {superhero.humilityScore}
      </p>
    </div>
  );
};

export default SuperheroCard;
