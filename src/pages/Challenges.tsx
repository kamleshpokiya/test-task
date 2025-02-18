import { AssetTable } from "@/components/assets/AssetsColumns";
import CustomeButton from "@/components/CustomeButton";
import SearchInput from "@/components/SearchInput";
import { ASSET_DATA } from "@/pages/Assets";
import { ListFilter } from "lucide-react";
import AssetQuickSearchModal from "@/components/assets/AssetQuickSearchModal";

const Challenges = () => {
  return (
    <div className="px-[30px] py-8 w-full">
      <div className="flex items-center text-white justify-between">
        <h1 className="text-[30px] leading-[38px]">Challenges</h1>
        <AssetQuickSearchModal />
      </div>
      <div className="flex flex-wrap items-center gap-2 ms:gap-0 justify-between mt-[31px]">
        <CustomeButton
          label="Filters"
          icon={<ListFilter size={20} color="white" />}
          classNameContainer="bg-[#FFFFFF1A] text-[#FFFFFF66] border border-[#FFFFFF0D] h-9"
        />
        <div className="flex flex-wrap  items-center gap-2 md:gap-[22px]">
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

export default Challenges;
