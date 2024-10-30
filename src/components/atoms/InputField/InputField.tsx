interface InputFieldProps {
    placeholder: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  const InputField = ({ placeholder, onChange }: InputFieldProps) => (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      className="w-full p-2 border rounded"
    />
  );
  
  export default InputField;
  