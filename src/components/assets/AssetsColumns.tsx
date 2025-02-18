import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTable } from "@/components/DataTable";
import { EyeOff, Pen, Trash2 } from "lucide-react";
import TablePagination from "@/components/TablePagination";

export interface AssetsDataProps {
  id: string;
  name: string;
  info: string;
  category: string;
  format: string;
  size: string;
}

export const AssetTable = ({ data }: { data: AssetsDataProps[] }) => {
  const AssetsColumns: ColumnDef<AssetsDataProps>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="border border-[#FFFFFF1A]"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="border border-[#FFFFFF1A]"
        />
      ),
    },
    {
      header: "Name & ID",
      cell: ({ row }) => {
        return (
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-md bg-[#FFFFFF1A]"></div>
            <div className="font-medium text-sm">
              <p className="text-white ">{row.original.name}</p>
              <p className="text-[#FFFFFF66]">{row.original.id}</p>
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "info",
      header: "Info",
      cell: ({ row }) => {
        return <p className="text-xs text-[#FFFFFF66]">{row.original.info}</p>;
      },
    },
    {
      accessorKey: "category",
      header: "Category",
      cell: ({ row }) => {
        return <p className="text-sm text-white">{row.original.category}</p>;
      },
    },
    {
      accessorKey: "format",
      header: "Format",
      cell: ({ row }) => {
        return <p className="text-sm text-white">{row.original.format}</p>;
      },
    },
    {
      accessorKey: "size",
      header: "Size",
      cell: ({ row }) => {
        return <p className="text-sm text-white">{row.original.size}</p>;
      },
    },
    {
      id: "actions",
      cell: () => {
        return (
          <div className="flex items-center gap-3 sm:gap-0 justify-between text-[#FFFFFF66]">
            <EyeOff size={18} />
            <Trash2 size={18} />
            <Pen size={18} />
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <DataTable data={data} columns={AssetsColumns} />
      <div className="mt-5">
        <TablePagination
          currentPage={1}
          onPageChange={() => {}}
          totalPages={10}
        />
      </div>
    </div>
  );
};
