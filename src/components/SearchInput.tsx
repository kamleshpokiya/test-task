import { Search } from "lucide-react";

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  classNameConatiner?: string;
  classNameInput?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder = "Search...",
  classNameConatiner = "",
  classNameInput,
}) => {
  return (
    <div
      className={`relative flex items-center border rounded-md px-3 py-2 ${classNameConatiner}`}
    >
      <Search className="w-4 h-4 text-white" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`ml-2 flex-1 bg-transparent outline-none  ${classNameInput}`}
      />
    </div>
  );
};

export default SearchInput;
