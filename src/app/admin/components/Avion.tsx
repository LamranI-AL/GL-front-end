"use client";

import * as React from "react";
import {
  ColumnDef,
  SortingState,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avion } from "@/interfaces/Interfaces";
import { AddAvionForm } from "./addAvion";

// Définition des colonnes pour l'interface Avion
export const avionColumns: ColumnDef<Avion>[] = [
  {
    accessorKey: "avion_id",
    header: "ID",
    cell: ({ row }) => <div>{row.getValue("avion_id")}</div>,
  },
  {
    accessorKey: "typeAvion",
    header: "Type",
    cell: ({ row }) => <div>{row.getValue("typeAvion")}</div>,
  },
  {
    accessorKey: "capacite",
    header: "Capacité",
    cell: ({ row }) => <div>{row.getValue("capacite")}</div>,
  },
  {
    accessorKey: "creat_at",
    header: "Date de Création",
    cell: ({ row }) => (
      <div>{new Date(row.getValue("creat_at")).toLocaleDateString()}</div>
    ),
  },
  {
    accessorKey: "anneeFabrication",
    header: "Année de Fabrication",
    cell: ({ row }) => <div>{row.getValue("anneeFabrication")}</div>,
  },
  {
    accessorKey: "model",
    header: "Modèle",
    cell: ({ row }) => <div>{row.getValue("model")}</div>,
  },
  {
    accessorKey: "codeIATA",
    header: "Code IATA",
    cell: ({ row }) => <div>{row.getValue("codeIATA")}</div>,
  },
];

interface Props {
  data: Avion[];
}

const AvionsTable = ({ data }: Props) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns: avionColumns,
    state: { sorting },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 w-full"
    >
      {/* Titre */}
      {/* <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Gestion des Avions</h2>
      </div> */}
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-6">Gestion des Avions</h2>
        <AddAvionForm />
      </div>

      {/* Filtre */}
      <div className="flex items-center py-4">
        <Input
          placeholder="Rechercher par modèle..."
          value={(table.getColumn("model")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("model")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>

      {/* Tableau */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : header.column.columnDef.header}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {cell.column.columnDef.cell
                        ? cell.column.columnDef.cell(cell.getContext())
                        : cell.render("Cell")}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={avionColumns.length}
                  className="h-24 text-center"
                >
                  Aucun résultat trouvé.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Précédent
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Suivant
        </Button>
      </div>
    </motion.div>
  );
};

export default AvionsTable;
