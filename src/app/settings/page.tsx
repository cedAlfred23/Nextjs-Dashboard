// import React from 'react'

// type Props = {}

// export default function OrdersPage({}: Props) {
//   return (
//     <div>Orders Page</div>
//   )
// }

'use client'
import { DataTable } from '@/components/DataTable'
import PageTitle from '@/components/PageTitle'
import { cn } from '@/lib/utils'
import { ColumnDef } from '@tanstack/react-table'
import React from 'react'

type Props = {}


interface Setting {
  category: string;
  value: string | number | boolean;
}

export const columns: ColumnDef<Setting>[] = [
  // {
  //   accessorKey: "order",
  //   header: "Order",
  //   // cell: ({row}) => {
  //   //   return <div className=' flex gap-2 items-center'>
  //   //     <img className='h-10 w-10' src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue("name")}`} alt="user-image" />
  //   //      <p>{row.getValue("name")}</p>
  //   //      </div>
  //   // }
  // },
  // {
  //   accessorKey: "status",
  //   header: "Status",
  //   cell: ({row}) => {
  //   return <div className={cn("font-medium w-fit px-4 py-2 rounded-lg", 
  //   {
  //     "bg-red-200": row.getValue("status") === "Pending",
  //     "bg-orange-200": row.getValue("status") === "Processing",
  //     "bg-green-200": row.getValue("status") === "Completed",
  //   })}>{row.getValue("status")}</div>}
  // },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "value",
    header: "Value",
  },
]

const data: Setting[] = [
  {
    category: "Account",
    value: true
  },
  {
    category: "Notifications",
    value: false
  },
  {
    category: "Language",
    value: "English"
  },
  {
    category: "Theme",
    value: "Dark"
  }
];
export default function SettingsPage({}: Props) {
  return (
    <div className=' flex flex-col gap-5 w-full'>
      <PageTitle title='Settings'/>

      <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
    </div>
  )
}