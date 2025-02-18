import { AssetsDataProps, AssetTable } from "@/components/assets/AssetsColumns";
import UploadAssetsModal from "@/components/assets/UploadAssetsModal";
import CustomeButton from "@/components/CustomeButton";
import SearchInput from "@/components/SearchInput";
import { ListFilter } from "lucide-react";

export const ASSET_DATA: AssetsDataProps[] = [
  {
    id: "#00000004",
    name: "Meditation",
    category: "Mind",
    info: "Box breathing meditationOrange Box",
    format: "MP4",
    size: "3.2 MB",
  },
  {
    id: "#00000004",
    name: "Meditation",
    category: "Body",
    info: "Timer for meditations",
    format: "PDF",
    size: "4.2 MB",
  },
  {
    id: "#00000004",
    name: "How To",
    category: "Fitness",
    info: "Abs Crunch side",
    format: "Link",
    size: "3.2 MB",
  },
  {
    id: "#00000004",
    name: "Breathwork",
    category: "Hybrid",
    info: "smurray@reveresport",
    format: "JPG",
    size: "3.2 MB",
  },
  {
    id: "#00000004",
    name: "Beast Mode",
    category: "Body",
    info: "smurray@reveresport",
    format: "MP3",
    size: "3.2 MB",
  },
  {
    id: "#00000004",
    name: "Meditation",
    category: "Mind",
    info: "Box breathing meditationOrange Box",
    format: "MP4",
    size: "3.2 MB",
  },
  {
    id: "#00000004",
    name: "Meditation",
    category: "Mind",
    info: "Box breathing meditationOrange Box",
    format: "MP4",
    size: "3.2 MB",
  },
  {
    id: "#00000004",
    name: "Meditation",
    category: "Mind",
    info: "Box breathing meditationOrange Box",
    format: "MP4",
    size: "3.2 MB",
  },
  {
    id: "#00000004",
    name: "Meditation",
    category: "Mind",
    info: "Box breathing meditationOrange Box",
    format: "MP4",
    size: "3.2 MB",
  },
];

const Assets = () => {
  return (
    <div className="px-[30px] py-8 w-full">
      <div className="flex items-center text-white justify-between">
        <h1 className="text-[30px] leading-[38px]">Assets</h1>
        <UploadAssetsModal />
      </div>
      <div className="flex flex-wrap  gap-2 sm:gap-0 items-center justify-between mt-[31px]">
        <CustomeButton
          label="Filters"
          icon={<ListFilter size={20} color="white" />}
          classNameContainer="bg-[#FFFFFF1A] text-[#FFFFFF66] border border-[#FFFFFF0D] h-9"
        />
        <div className="flex flex-wrap items-center gap-2 md:gap-[22px]">
          <CustomeButton
            label="Quick Search"
            classNameContainer="bg-[#FFFFFF1A] text-[#FFFFFF66] border border-[#FFFFFF0D] h-9"
          />
          <SearchInput
            onChange={() => {}}
            value={""}
            placeholder="Search Name"
            classNameConatiner="border-[#FFFFFF0D] bg-[#FFFFFF1A] h-9"
            classNameInput="placeholder:text-[#FFFFFF66]"
          />
        </div>
      </div>
      <div className="mt-4">
        <AssetTable data={ASSET_DATA} />
      </div>
    </div>
  );
};

export default Assets;
