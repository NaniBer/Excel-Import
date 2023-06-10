

import { error } from "console";
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const TablePage : React.FC =()=>{
    type item={
        itemNo:string;
        unit:string;
        description:string;
         rate:string;
         qty:string;
         amount:number;
    }
    const [items ,setItems]= useState<item[]>([])
    useEffect(()=>{
        fetch('http://localhost:8000/')
        .then(response=>response.json())
        .then(data=>
            setItems(data))
        .catch ((error)=> {
            console.error(error); 
      })
      
      
  }, []);


    const navigate= useNavigate()
    const data:{itemNo:number, unit:string, description:string, rate:number, qty:number,amount:number}[]=[
        {
            itemNo:1.1,
            description:"Clearing of Ordinary Soil, Root and a made up Ground of the site to an average depth of 20 cm from natural ground level",
            unit:"m2",	 
            rate:840.00,
            qty:18.00,
            amount: 15120.00
        },
        {
            itemNo:1.2,
            description:"Bulk excavation in an ordinary soil  to a depth not exceeding 150 cm from  Cleared Level",
            unit:"m3",	 
            rate:1247.09,
            qty:122.00 ,
            amount: 15120.00
        }


    ]


    const handleEdit=(itemNo:string, description:string, rate:string, qty:string, amount:number)=>{
        console.log(itemNo)
        navigate("/edit",{
            state:{
                itemNo:itemNo,
                description:description,
                rate:rate,
                qty:qty,
                amount:amount
            }
        })

    }

    const handleDelete=(itemNo:string, description:string, rate:string, qty:string, amount:number)=>{
        console.log(itemNo)
        navigate("/delete",{
            state:{
                itemNo:itemNo,
                description:description,
                rate:rate,
                qty:qty,
                amount:amount
            }
        })
    }
    
    return(
        <div className="m-8">
            <table className="border-2 border-slate-400">
                <tr className="text-xl">
                    <th>Item No</th>
                    <th> Description</th>
                    <th>Rate</th>
                    <th>Qty</th>
                    <th>Amount</th>
                    <th className="cursor-pointer" onClick={()=>navigate('/add')}>Add </th>
                </tr>
            
                    {items.map((item)=>(
                        <tr className="border-2 border-slate-300 border-r-slate-400 border-l-slate-400" >

                            <td className="pl-9">{item.itemNo}</td>
                            <td className="text-center">{item.description}</td>
                            <td>{item.rate}</td>
                            <td>{item.qty}</td>
                            <td>{item.amount}</td>
                            <div className="flex">
                                <tr className="mr-4 bg-slate-300 w-14 text-center rounded-2 cursor-pointer" onClick={()=>handleEdit(item.itemNo, item.description,item.rate, item.qty, item.amount)}>Edit</tr>
                                <tr className="mr-4  bg-slate-300 w-24 text-center rounded-2 cursor-pointer" onClick={()=>handleDelete(item.itemNo, item.description,item.rate, item.qty, item.amount)}>Remove</tr>
                            </div>
                        </tr>

                    ))}


                
               


            </table>
        </div>
    )

}
export default TablePage