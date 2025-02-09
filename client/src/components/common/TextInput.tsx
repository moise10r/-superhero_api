interface TextInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  onChange,
  required,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-400 mb-2">{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-2 text-gray-900 rounded-lg"
      />
    </div>
  );
};

export default TextInput;
