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

type Payment = {
  order: string;
  status: string;
  lastOrder: string;
  method: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "order",
    header: "Order",
    // cell: ({row}) => {
    //   return <div className=' flex gap-2 items-center'>
    //     <img className='h-10 w-10' src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue("name")}`} alt="user-image" />
    //      <p>{row.getValue("name")}</p>
    //      </div>
    // }
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({row}) => {
    return <div className={cn("font-medium w-fit px-4 py-2 rounded-lg", 
    {
      "bg-red-200": row.getValue("status") === "Pending",
      "bg-orange-200": row.getValue("status") === "Processing",
      "bg-green-200": row.getValue("status") === "Completed",
    })}>{row.getValue("status")}</div>}
  },
  {
    accessorKey: "lastOrder",
    header: "Last Order",
  },
  {
    accessorKey: "method",
    header: "Method",
  },
]


const data: Payment[] = [
  {
    order: "ORD001",
    status: "Pending",
    lastOrder: "2023-01-15",
    method: "Credit Card"
  },
  {
    order: "ORD002",
    status: "Processing",
    lastOrder: "2023-02-20",
    method: "PayPal"
  },
  {
    order: "ORD003",
    status: "Completed",
    lastOrder: "2023-03-10",
    method: "Stripe"
  },
  {
    order: "ORD004",
    status: "Pending",
    lastOrder: "2023-04-05",
    method: "Venmo"
  },
  {
    order: "ORD005",
    status: "Completed",
    lastOrder: "2023-05-12",
    method: "Bank Transfer"
  },
  {
    order: "ORD006",
    status: "Processing",
    lastOrder: "2023-06-18",
    method: "Apple Pay"
  },
  {
    order: "ORD007",
    status: "Completed",
    lastOrder: "2023-07-22",
    method: "Google Pay"
  },
  {
    order: "ORD008",
    status: "Pending",
    lastOrder: "2023-08-30",
    method: "Cryptocurrency"
  },
  {
    order: "ORD009",
    status: "Processing",
    lastOrder: "2023-09-05",
    method: "Alipay"
  },
  {
    order: "ORD010",
    status: "Completed",
    lastOrder: "2023-10-18",
    method: "WeChat Pay"
  },
  {
    order: "ORD011",
    status: "Pending",
    lastOrder: "2023-11-25",
    method: "Square Cash"
  },
  {
    order: "ORD012",
    status: "Completed",
    lastOrder: "2023-12-08",
    method: "Zelle"
  },
  {
    order: "ORD013",
    status: "Processing",
    lastOrder: "2024-01-15",
    method: "Stripe"
  },
  {
    order: "ORD014",
    status: "Completed",
    lastOrder: "2024-02-20",
    method: "PayPal"
  },
  {
    order: "ORD015",
    status: "Pending",
    lastOrder: "2024-03-30",
    method: "Credit Card"
  }
];

export default function OrdersPage({}: Props) {
  return (
    <div className=' flex flex-col gap-5 w-full'>
      <PageTitle title='Orders'/>

      <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
    </div>
  )
}