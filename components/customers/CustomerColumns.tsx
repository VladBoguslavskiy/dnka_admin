"use client";

import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<CustomerType>[] = [
  {
    accessorKey: "clerkId",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Імя",
  },
  {
    accessorKey: "email",
    header: "Пошта",
  },
];
