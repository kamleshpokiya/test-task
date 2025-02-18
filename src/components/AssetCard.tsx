import { Checkbox } from "./ui/checkbox";

export interface AssetCardProps {
  image: string;
  fileType: string;
  fileName: string;
  isSelected?: boolean;
  onSelect?: () => void;
}

const AssetCard = ({
  image,
  fileType,
  fileName,
  isSelected = false,
  onSelect,
}: AssetCardProps) => {
  return (
    <div
      className={`rounded-md overflow-hidden  `}
      //   onClick={onSelect}
    >
      {/* Image Preview */}
      <div className="relative">
        <img
          src={image}
          alt={fileName}
          className="w-[133px] h-[99px] object-cover rounded-lg"
        />
        {/* File Type Badge */}
        <span
          className={`absolute bottom-2 right-2 text-xs px-2 py-1 text-black rounded-md bg-white `}
        >
          {fileType}
        </span>

        {/* Checkbox */}

        <Checkbox
          checked={isSelected}
          onCheckedChange={onSelect}
          className="absolute top-2 right-2 border-white h-5 w-5"
        />
      </div>

      {/* File Name */}
      <p className="text-white text-sm mt-1">{fileName}</p>
    </div>
  );
};

export default AssetCard;
