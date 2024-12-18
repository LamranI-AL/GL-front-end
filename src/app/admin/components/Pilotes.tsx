"use client";
import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Equipage, vol } from "@/interfaces/Interfaces";
import { motion } from "framer-motion";
import { AddEquipageForm } from "./AddEquipageForm";
// import { AddEquipageForm } from "./addEquipageForm";

const pilotsData = {
  pilotsActifs: 42,
  enFormation: 8,
  heuresDeVolTotales: 12450,
  qualifications: 15,
};

export const columns: ColumnDef<Equipage>[] = [
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
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "nomComplet",
    header: "nom",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("nomComplet")}</div>
    ),
  },
  {
    accessorKey: "addresse",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          addresse
          {/* <ArrowUpDown /> */}
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("addresse")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          email
          {/* <ArrowUpDown /> */}
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "telephone",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          telephone
          {/* <ArrowUpDown /> */}
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("telephone")}</div>
    ),
  },
  {
    accessorKey: "fonction",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          fonction
          {/* <ArrowUpDown /> */}
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("fonction")}</div>
    ),
  },
  {
    accessorKey: "created_at",
    header: "Créé le",
    cell: ({ row }) =>
      new Date(row.getValue("created_at")).toLocaleString("fr-FR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
  },
  {
    accessorKey: "numeroLicence",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Licence Number
          {/* <ArrowUpDown /> */}
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("numeroLicence")}</div>
    ),
  },
  {
    accessorKey: "isActive",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center space-x-1"
        >
          Status
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div>
        {row.getValue("isActive") === true ? (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-500">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            Libre
          </span>
        ) : (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 border border-red-500">
            <svg
              className="w-4 h-4 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M14.707 14.707a1 1 0 01-1.414 0L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 011.414-1.414L10 8.586l3.293-3.293a1 1 0 011.414 1.414L11.414 10l3.293 3.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            En Service
          </span>
        )}
      </div>
    ),
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const vol = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(vol.nomComplet)}
            >
              Copy name
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
interface Props {
  data: Equipage[];
}
const Pilotes = ({ data }: Props) => {
  const isToggled = true;
  // const [searchQuery, setSearchQuery] = React.useState("");
  //FILTER LES PILOIT ACTIF

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={` p-6 w-full ${isToggled ? "pl-72" : "pl-24"}`}
    >
      {/* Titre et bouton d'ajout */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl text-center font-bold mb-6">
          Gestion des Pilotes
        </h2>
      </div>

      {/* Statistiques globales */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        {[
          {
            label: "Pilotes Actifs",
            value: pilotsData.pilotsActifs,
            // trend: "+5% ce mois",
            color: "text-green-400",
          },
          {
            label: "En Formation",
            value: pilotsData.enFormation,
            // trend: "2 certifications en cours",
            color: "text-yellow-700",
          },
          {
            label: "Qualifications",
            value: pilotsData.qualifications,
            // trend: "+2% ce mois",
            color: "text-slate-400",
          },
        ].map((stat, index) => (
          <div key={index} className="bg-slate-100 rounded-lg p-4">
            {/* <h3 className="text-lg font-thin mb-4">{stat.label}</h3> */}
            <h3 className={`text-lg font-thin mb-4 ${stat.color}`}>
              {stat.label}
            </h3>
            <p className={`text-4xl font-bold mb-4 ${stat.color}`}>
              {stat.value}
            </p>
            {/* <p className="text-sm">
              <span className={stat.color}>{stat.trend}</span>
            </p> */}
          </div>
        ))}
      </div>
      {/* tablae  */}
      <div>
        <AddEquipageForm />
        <div className="flex items-center py-4">
          <Input
            placeholder="Filter par name..."
            value={
              (table.getColumn("nomComplet")?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn("nomComplet")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Pilotes;
