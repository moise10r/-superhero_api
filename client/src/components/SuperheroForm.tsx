import { useState } from "react";
import TextInput from "./common/TextInput";
import NumberInput from "./common/NumberInput";

interface SuperheroFormProps {
  onSubmit: (superhero: {
    name: string;
    superpower: string;
    humilityScore: number;
  }) => void;
}

const SuperheroForm: React.FC<SuperheroFormProps> = ({ onSubmit }) => {
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
    onSubmit(superhero);
    setName("");
    setSuperpower("");
    setHumilityScore("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-900 p-6 rounded-lg shadow-lg mb-8"
    >
      <h2 className="text-2xl font-semibold text-superhero-yellow mb-4">
        Add New Superhero
      </h2>
      <TextInput
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextInput
        label="Superpower"
        value={superpower}
        onChange={(e) => setSuperpower(e.target.value)}
        required
      />
      <NumberInput
        label="Humility Score"
        value={humilityScore}
        onChange={(e) => setHumilityScore(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-superhero-yellow text-black py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300"
      >
        Add Superhero
      </button>
    </form>
  );
};

export default SuperheroForm;
