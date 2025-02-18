import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CustomeButton from "@/components/CustomeButton";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function TablePagination({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxPagesToShow = 3; // First 3 and last 3 pages

    if (totalPages <= maxPagesToShow * 2 + 1) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    pages.push(1, 2, 3);

    if (currentPage > maxPagesToShow + 1) {
      pages.push("...");
    }

    pages.push(totalPages - 2, totalPages - 1, totalPages);

    if (currentPage < totalPages - maxPagesToShow) {
      pages.splice(pages.length - 3, 0, "...");
    }

    return pages;
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 p-3 bg-black text-white rounded-lg">
      {/* Previous Button */}
      <CustomeButton
        onClick={() => onPageChange(currentPage - 1)}
        label="Previous"
        icon={<ArrowLeft className="w-4 h-4" />}
        classNameContainer="border border-[#323232] h-9 px-3 flex items-center gap-2"
      />

      {/* Page Numbers (Hidden on Small Screens) */}
      <div className="hidden md:flex gap-2">
        {getPageNumbers().map((page, index) =>
          typeof page === "number" ? (
            <CustomeButton
              key={index}
              onClick={() => onPageChange(page)}
              classNameContainer={cn(
                "px-3 py-2 text-white font-bold w-9 h-9 flex items-center justify-center",
                currentPage === page && "border border-[#323232]"
              )}
              label={page.toString()}
            />
          ) : (
            <span key={index} className="px-2 text-gray-400">
              {page}
            </span>
          )
        )}
      </div>

      {/* Next Button */}
      <CustomeButton
        onClick={() => onPageChange(currentPage + 1)}
        label="Next"
        icon={<ArrowRight className="w-4 h-4" />}
        classNameContainer="border border-[#323232] h-9 px-3 flex items-center gap-2"
      />
    </div>
  );
}
