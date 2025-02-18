import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CustomeButton from "@/components/CustomeButton";
import { CloudUpload, Upload, X } from "lucide-react";
import FileUploadStatus, {
  FileUploadStatusProps,
} from "@/components/FileUploadStatus";
import CustomeInput from "@/components/CustomeInput";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const FileUploadStatusData: FileUploadStatusProps[] = [
  {
    fileName: "design requirements.pdf",
    fileSize: "200 KB",
    progress: 100,
    checked: true,
  },
  {
    fileName: "design requirements.pdf",
    fileSize: "200 KB",
    progress: 100,
    checked: true,
  },
];

const FileUploadStatusData2: FileUploadStatusProps[] = [
  {
    fileName: "design requirements.pdf",
    fileSize: "200 KB",
    progress: 100,
    checked: false,
  },
  {
    fileName: "design requirements.pdf",
    fileSize: "200 KB",
    progress: 70,
    checked: true,
  },
];

const UploadAssetsModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Dialog
      open={isModalOpen}
      onOpenChange={() => setIsModalOpen(!isModalOpen)}
    >
      <DialogTrigger>
        <CustomeButton
          label="Upload"
          icon={<CloudUpload size={20} />}
          classNameContainer="text-black bg-[#C05600] font-semibold"
        />
      </DialogTrigger>
      {isModalOpen && (
        <div className="fixed inset-0  backdrop-blur-[1px] z-40"></div>
      )}
      <DialogContent
        className="bg-[#313131] border-[#EF6C00] max-h-[90vh] md:max-h-[96vh] 2xl:max-h-full overflow-auto w-[300px]  xs:min-w-[700px] pt-[13px]"
        showOverlay={false}
      >
        <DialogTitle className="font-semibold text-2xl leading-[38px] text-white flex items-center justify-between">
          Upload
          <DialogClose className=" text-white ">
            <X size={20} />
          </DialogClose>
        </DialogTitle>
        <div>
          <p className="font-semibold text-lg text-white">Assets</p>
          <p className="text-sm text-[#FFFFFF66]">Upload supporting media</p>
          {FileUploadStatusData.map((item, index) => (
            <FileUploadStatus
              key={index}
              fileName={item.fileName}
              checked={item.checked}
              fileSize={item.fileSize}
              progress={item.progress}
            />
          ))}

          <div className="flex justify-end mt-[27px] mb-[46px]">
            <CustomeButton
              label="Add Asset"
              classNameContainer="bg-[#C05600] font-bold"
            />
          </div>

          {FileUploadStatusData2.map((item, index) => (
            <FileUploadStatus
              key={index}
              fileName={item.fileName}
              checked={item.checked}
              fileSize={item.fileSize}
              progress={item.progress}
            />
          ))}

          <div className="flex flex-wrap md:flex-nowrap items-center gap-3 md:gap-[66px] justify-between mt-[35px]">
            <CustomeInput
              type="text"
              placeholder="Name"
              className="w-full"
              classNameInput="bg-[#3c3c3c] border-[#FFFFFF0D] placeholder:text-[#FFFFFF66] "
            />
            <div className="w-full">
              <Select>
                <SelectTrigger className="border-[#FFFFFF0D] text-[#FFFFFF66] bg-[#3c3c3c]">
                  <SelectValue
                    placeholder="Select category"
                    className="text-[#FFFFFF66]"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-4 w-full">
            <textarea
              name=""
              id=""
              placeholder="Info"
              className="bg-[#3c3c3c] border-[#FFFFFF0D] px-5 pt-7  placeholder:text-[#FFFFFF66] w-full text-white outline-none"
              rows={3}
            />
          </div>
          <div className="mt-[30px] mb-[18px] relative">
            <input
              id="file-upload"
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={(e) => {
                const files = e.target.files;
                if (files && files.length > 0) {
                  console.log("Selected files:", files);
                  // Handle file upload logic here
                }
              }}
            />
            <CustomeButton
              icon={<Upload color="white" size={20} />}
              label="Upload media"
              classNameContainer="bg-[#C056001A] border border-[#C05600] text-white md:w-full md:justify-center"
            />
          </div>

          <div className="flex items-center justify-end gap-5">
            <CustomeButton
              label="Cancel"
              classNameContainer="text-white border-[#FFFFFF0D] border h-10"
              onClick={() => setIsModalOpen(false)}
            />
            <CustomeButton
              label="Save"
              classNameContainer="bg-[#C05600] font-semibold h-10"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UploadAssetsModal;
