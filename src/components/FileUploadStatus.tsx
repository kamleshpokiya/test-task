import { File, Trash2 } from "lucide-react";
import { Checkbox } from "./ui/checkbox";

export interface FileUploadStatusProps {
  fileName: string;
  fileSize: string;
  progress: number; // Progress in percentage (0-100)
  checked?: boolean;
}

const FileUploadStatus = ({
  fileName,
  fileSize,
  progress,
  checked,
}: FileUploadStatusProps) => {
  return (
    <div
      className="border border-[#FFFFFF0D] text-white p-4 rounded-lg mt-2"
      style={{
        background: `linear-gradient(to right, #454545 ${progress}%, #3c3c3c ${progress}%)`,
      }}
    >
      <div className="flex  justify-between ">
        <div className="flex  gap-3">
          <File color="white" size={20} />
          <div>
            <p className="text-white text-sm font-medium">{fileName}</p>
            <p>{`${fileSize} - ${progress}`} uploaded</p>
          </div>
        </div>
        {progress < 100 ? (
          <div className="relative w-8 h-8">
            <svg
              className="absolute inset-0"
              viewBox="0 0 36 36"
              width="32"
              height="32"
            >
              {/* Background Circle */}
              <circle
                cx="18"
                cy="18"
                r="15"
                fill="none"
                stroke="#F2F4F7"
                strokeWidth="4"
              />
              {/* Progress Circle */}
              <circle
                cx="18"
                cy="18"
                r="15"
                fill="none"
                stroke="#C05600"
                strokeWidth="4"
                strokeDasharray="94.2"
                strokeDashoffset={94.2 - (94.2 * progress) / 100}
                strokeLinecap="round"
                transform="rotate(-90 18 18)"
              />
            </svg>
          </div>
        ) : (
          <div className="flex gap-3">
            <Trash2 color="white" size={20} />
            <Checkbox
              checked={checked}
              className="w-6 h-6 !bg-[#FFFFFF0D] !border-[#FFFFFF0D]"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploadStatus;
