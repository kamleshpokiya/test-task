import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CustomeButton from "@/components/CustomeButton";
import { ArrowLeft, ArrowRight, ListFilter, Plus, X } from "lucide-react";
import { useState } from "react";
import AssetCard from "@/components/AssetCard";

const tabs = ["Images", "Videos", "PDFs", "MP4"];

const assets = [
  {
    image: "/src/assets/asset-image.png",
    fileType: "JPG",
    fileName: "Meditation01",
  },
  {
    image: "/src/assets/asset-image.png",
    fileType: "PDF",
    fileName: "Meditation02",
  },
  {
    image: "/src/assets/asset-image.png",
    fileType: "MOV",
    fileName: "Meditation03",
  },
  {
    image: "/src/assets/asset-image.png",
    fileType: "PNG",
    fileName: "Meditation04",
  },
  {
    image: "/src/assets/asset-image.png",
    fileType: "PNG",
    fileName: "Meditation04",
  },
  {
    image: "/src/assets/asset-image.png",
    fileType: "PNG",
    fileName: "Meditation04",
  },
  {
    image: "/src/assets/asset-image.png",
    fileType: "PNG",
    fileName: "Meditation04",
  },
  {
    image: "/src/assets/asset-image.png",
    fileType: "JPG",
    fileName: "Meditation01",
  },
  {
    image: "/src/assets/asset-image.png",
    fileType: "PDF",
    fileName: "Meditation02",
  },
  {
    image: "/src/assets/asset-image.png",
    fileType: "MOV",
    fileName: "Meditation03",
  },
  {
    image: "/src/assets/asset-image.png",
    fileType: "PNG",
    fileName: "Meditation04",
  },
  {
    image: "/src/assets/asset-image.png",
    fileType: "PNG",
    fileName: "Meditation04",
  },
  {
    image: "/src/assets/asset-image.png",
    fileType: "PNG",
    fileName: "Meditation04",
  },
  {
    image: "/src/assets/asset-image.png",
    fileType: "PNG",
    fileName: "Meditation04",
  },
  {
    image: "/src/assets/asset-image.png",
    fileType: "JPG",
    fileName: "Meditation01",
  },
  {
    image: "/src/assets/asset-image.png",
    fileType: "PDF",
    fileName: "Meditation02",
  },
  {
    image: "/src/assets/asset-image.png",
    fileType: "MOV",
    fileName: "Meditation03",
  },
  {
    image: "/src/assets/asset-image.png",
    fileType: "PNG",
    fileName: "Meditation04",
  },
  {
    image: "/src/assets/asset-image.png",
    fileType: "PNG",
    fileName: "Meditation04",
  },
  {
    image: "/src/assets/asset-image.png",
    fileType: "PNG",
    fileName: "Meditation04",
  },
  {
    image: "/src/assets/asset-image.png",
    fileType: "PNG",
    fileName: "Meditation04",
  },
];

const AssetQuickSearchModal = () => {
  const [activeTab, setActiveTab] = useState("Images");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedAssets, setSelectedAssets] = useState<string[]>([]);

  const toggleSelection = (fileName: string) => {
    setSelectedAssets((prev) =>
      prev.includes(fileName)
        ? prev.filter((name) => name !== fileName)
        : [...prev, fileName]
    );
  };

  return (
    <Dialog onOpenChange={() => setIsModalOpen(!isModalOpen)}>
      <DialogTrigger>
        <CustomeButton
          label="Add Challenges"
          classNameContainer="text-black bg-[#C05600] font-semibold"
          icon={<Plus size={20} />}
        />
      </DialogTrigger>
      {isModalOpen && (
        <div className="fixed inset-0  backdrop-blur-[1px] z-40"></div>
      )}
      <DialogContent
        className="bg-[#313131] border-[#FFFFFF1A] max-h-[90vh] overflow-auto md:max-h-full md:overflow-hidden w-[300px]   xs:min-w-[750px] xl:min-w-[1050px] pt-[13px]"
        showOverlay={false}
      >
        <DialogTitle className="font-semibold text-2xl leading-[38px] text-white flex items-center justify-between">
          Add Quick Search
          <DialogClose className=" text-white ">
            <X size={20} />
          </DialogClose>
        </DialogTitle>
        <div>
          <div className="flex flex-wrap gap-2 md:gap-0 items-center justify-between">
            <CustomeButton
              label="Filters"
              icon={<ListFilter size={20} color="white" />}
              classNameContainer="bg-[#FFFFFF1A] text-[#FFFFFF66] border border-[#FFFFFF0D] h-9"
            />
            <div className="flex gap-1">
              {tabs.map((tab) => (
                <CustomeButton
                  label={tab}
                  classNameContainer={`font-medium h-10 ${
                    activeTab === tab
                      ? "bg-white !text-black "
                      : "text-[#FFFFFF66]"
                  }`}
                  onClick={() => setActiveTab(tab)}
                />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-7 gap-3 mt-9">
            {assets.map((asset) => (
              <AssetCard
                key={asset.fileName}
                image={asset.image}
                fileType={asset.fileType}
                fileName={asset.fileName}
                isSelected={selectedAssets.includes(asset.fileName)}
                onSelect={() => toggleSelection(asset.fileName)}
              />
            ))}
          </div>

          <div className="flex justify-center gap-3 items-center mt-10">
            <CustomeButton
              onClick={() => {}}
              label="Previous"
              icon={<ArrowLeft className="w-4 h-4" />}
              classNameContainer="border border-[#FFFFFF1A] h-9 text-white"
            />
            <CustomeButton
              onClick={() => {}}
              classNameContainer={
                "px-[13px] py-2 text-white font-bold w-9 h-9 border border-[#FFFFFF1A]"
              }
              label={"1"}
            />
            <CustomeButton
              onClick={() => {}}
              classNameContainer="flex-row-reverse border border-[#FFFFFF1A] h-9 text-white"
              label="Next"
              icon={<ArrowRight className="w-4 h-4" />}
            />
          </div>
          <div className="flex justify-end mt-5 mb-[30px]">
            <CustomeButton
              label="Add to Challenges"
              classNameContainer="text-black bg-[#C05600] h-10 font-semibold"
              icon={<Plus size={20} />}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AssetQuickSearchModal;
