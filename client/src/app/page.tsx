"use client";
import { useState } from "react";
import { useGetSuperheroes } from "./hooks/useGetSuperhero";
import { useAddSuperhero } from "./hooks/useAddSuperhero";
import { ICreateSuperhero } from "./interfaces/createSuperhero.interface";

export default function Home() {
  const { data, error, isLoading } = useGetSuperheroes();
  console.log("data", data);

  const superheroes = data || [];
  const mutation = useAddSuperhero();

  const [name, setName] = useState("");
  const [superpower, setSuperpower] = useState("");
  const [humilityScore, setHumilityScore] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const superhero = {
      name,
      superpower,
      humilityScore: parseInt(humilityScore, 10),
    };
    mutation.mutate(superhero);
    setName("");
    setSuperpower("");
    setHumilityScore("");
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center text-superhero-yellow mb-8">
        Superheroes
      </h1>

      {/* Form to add new superhero */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-6 rounded-lg shadow-lg mb-8"
      >
        <h2 className="text-2xl font-semibold text-superhero-yellow mb-4">
          Add New Superhero
        </h2>
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 text-gray-900 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Superpower</label>
          <input
            type="text"
            value={superpower}
            onChange={(e) => setSuperpower(e.target.value)}
            required
            className="w-full px-4 py-2 text-gray-900 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Humility Score</label>
          <input
            type="number"
            value={humilityScore}
            onChange={(e) => setHumilityScore(e.target.value)}
            required
            className="w-full px-4 py-2 text-gray-900 rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="bg-superhero-yellow text-black py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          Add Superhero
        </button>
      </form>

      {/* Superheroes List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading ? (
          <div className="col-span-full text-center text-gray-500">
            Loading superheroes...
          </div>
        ) : error ? (
          <div className="col-span-full text-center text-red-500">
            Failed to load superheroes: {error.message}
          </div>
        ) : (
          superheroes.map((superhero: ICreateSuperhero) => (
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
          ))
        )}
      </div>
    </div>
  );
}
