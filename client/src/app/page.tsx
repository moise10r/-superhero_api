"use client";
import { useGetSuperheroes } from "./hooks/useGetSuperhero";
import { useAddSuperhero } from "./hooks/useAddSuperhero";
import SuperheroForm from "@/components/SuperheroForm";
import SuperheroList from "@/components/SuperheroList";

export default function Home() {
  const { data, error, isLoading } = useGetSuperheroes();
  const superheroes = data || [];
  const mutation = useAddSuperhero();

  const handleAddSuperhero = (superhero: {
    name: string;
    superpower: string;
    humilityScore: number;
  }) => {
    mutation.mutate(superhero);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center text-superhero-yellow mb-8">
        Superheroes
      </h1>

      <SuperheroForm onSubmit={handleAddSuperhero} />

      <SuperheroList
        superheroes={superheroes}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
}
