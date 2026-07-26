'use client'
import { Fragment, useState } from "react"

export default function Status({ items }: { items: any[] }) {
    const [current,setCurrent]=useState(0)
 const [statusOverrides,setStatusOverrides]=useState<Record<string, boolean>>({})
const status = items.map(item => ({
    ...item,
    st: statusOverrides[item.id] ?? item.st,
}))

const HanlderClick =(id:any)=>{
    const selectedItem = status.find(item => item.id === id)

    if (!selectedItem) {
        return
    }

    if (selectedItem.number === current + 1 || selectedItem.number === current) {
        setCurrent(selectedItem.number)
        setStatusOverrides(previous => ({
            ...previous,
            [id]: !selectedItem.st,
        }))
    }
}

    return (<>
        <div className='mt-2 flex flex-col gap-3 relative'>
            {status.map((item: any, index: any) => (
                <Fragment key={item.id}><div onClick={()=>HanlderClick(item.id)} className='flex flex-row gap-3 items-center cursor-pointer'>
                    <div className={`${item.st? "border-beamin":''}  w-10 h-10 rounded-full border border-solid flex justify-center items-center`}>
                        <span className={`  ${item.st? "text-beamin":'text-gray-600'}     ` }>{item.number}</span>
                    </div>
                    <div className={` text-wrap text-[14px] ${item.st? "text-beamin":'text-gray-600'}     ` }>
                        {item.name}
                    </div>
                </div>
                {status.length - 1 !== index &&
                <div className='relative flex flex-col left-4 bottom-5 text-xl font-bold gap-1 '>
                        <span className={` h-2  ${item.st? "text-beamin":'text-gray-600'}     ` }>.</span>
                        <span className={` h-2 ${item.st? "text-beamin":'text-gray-600'}     ` }>.</span>
                        <span className={` h-2 ${item.st? "text-beamin":'text-gray-600'}     ` }>.</span>
                        <span className={` h-2 ${item.st? "text-beamin":'text-gray-600'}     ` }>.</span>
                        <span className={` h-2 ${item.st? "text-beamin":'text-gray-600'}     ` }>.</span>
                    </div>
                    }
                    </Fragment>
            ))}
        </div>


    </>)


}
