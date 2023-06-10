
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const AddPage=()=>{
    const location= useLocation()
    const navigate= useNavigate()
    const [itemNo,setItemNo]= useState(0)
    const [description,setDescription]= useState('')
    const [unit,setUnit]= useState('')
    const [rate,setRate]= useState(0)
    const [qty,setQty]= useState(0)
    const [amount,setAmount]= useState(0)

    const handleClick=()=>{
        const formData= {itemNo,description,unit,rate,qty,amount}
        console.log(formData)
        fetch('http://localhost:8000/add',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(formData)
        }).then(response=>response.json())
        .then((data)=>console.log(data))
        .then(()=>
            navigate('/')
        )
        .catch((error)=>console.error(error))
        }
    return(
       <div className="flex flex-col h-screen items-center justify-center content-center">
            

            <div>
                <p className="text-center text-2xl font-bold">Add a new Item</p>
                <div className="flex m-4">
                    <p className="font-bold text-xl">Item No</p>
                    <input className= "border-b-slate-400 border-2 ml-4" type="number" onChange={(e)=>setItemNo(e.target.valueAsNumber)}/>
                </div>
                 <div className="flex m-4">
                     <p className="font-bold text-xl"> Description</p>
                    <textarea className= "border-b-slate-400 border-2 ml-4"  onChange={(e)=>setDescription(e.target.value)}/>
                </div>

                <div className="flex m-4">
                     <p className="font-bold text-xl mr-10">Unit</p>
                    <input className= "border-b-slate-400 border-2 ml-4" type="text" onChange={(e)=>setUnit(e.target.value)}/>
                </div>
                 <div className="flex m-4">
                     <p className="font-bold text-xl mr-10">Rate</p>
                    <input className= "border-b-slate-400 border-2 ml-4" type="number" onChange={(e)=>setRate(e.target.valueAsNumber)}/>
                </div>
                 <div className="flex m-4 ">
                    <p className="font-bold text-xl mr-14">Qty</p>
                    <input className= "border-b-slate-400 border-2 ml-4" type="number" onChange={(e)=>setQty(e.target.valueAsNumber)}/>
                </div>
                <div className="flex m-4">
                    <p className="font-bold text-xl mr-3">Amount</p>
                    <input className= "border-b-slate-400 border-2 ml-4" type="number" onChange={(e)=>setAmount(e.target.valueAsNumber)}/>
                </div>
                <div className="flex items-center justify-center mt-6">
                    <button className=" bg-slate-300 text-center rounded-2 cursor-pointer text-2xl px-3 py-1" onClick={handleClick}>Add</button>
                </div>
                </div>
        
        </div>
    )

}
export default AddPage