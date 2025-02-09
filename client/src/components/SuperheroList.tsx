import { ICreateSuperhero } from "@/app/interfaces/createSuperhero.interface";
import SuperheroCard from "./SuperheroCard";

interface SuperheroListProps {
  superheroes: ICreateSuperhero[];
  isLoading: boolean;
  error: any;
}

const SuperheroList: React.FC<SuperheroListProps> = ({
  superheroes,
  isLoading,
  error,
}) => {
  if (isLoading) {
    return (
      <div className="col-span-full text-center text-gray-500">
        Loading superheroes...
      </div>
    );
  }

  if (error) {
    return (
      <div className="col-span-full text-center text-red-500">
        Failed to load superheroes: {error.message}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {superheroes.map((superhero) => (
        <SuperheroCard key={superhero.name} superhero={superhero} />
      ))}
    </div>
  );
};

export default SuperheroList;
