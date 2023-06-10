
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const EditPage=()=>{
    const location= useLocation()
    const navigate= useNavigate()
    const [itemNo,setItemNo]= useState(0)
    const [description,setDescription]= useState('')
    const [rate,setRate]= useState(0)
    const [qty,setQty]= useState(0)
    const [amount,setAmount]= useState(0)
    let itemNoOld= location.state.itemNo

    const item:{itemNo:number, unit:string, description:string, rate:number, qty:number,amount:number}=
        {
            itemNo:1.1,
            description:"Clearing of Ordinary Soil, Root and a made up Ground of pe site to an average depth of 20 cm from natural ground level",
            unit:"m2",	 
            rate:840.00,
            qty:18.00,
            amount: 15120.00
        }
        const handleClick=()=>{
            const formData= {itemNo,description,rate,qty,amount}
            console.log(formData)
            fetch('http://localhost:8000/edit',{
                method:'PUT',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(formData)
            }).then(response=>response.json())
            .then((data)=>console.log(data))
            .then(()=>
                navigate('/')
            )
            .catch((error)=>console.error(error))
        }
        useEffect(()=>{
            if(itemNoOld!==null)setItemNo(itemNoOld)
            setDescription(location.state.description)
            setRate(location.state.rate)
            setQty(location.state.qty)
            setAmount(location.state.amount)
            console.log(itemNoOld)

        },[])
    return(
        <div className="flex h-screen items-center justify-center content-center">
            <div>
                <p className="text-center text-2xl font-bold">Edit an Item</p>

                <div className="flex m-4">
                    <p className="font-bold text-xl">Item No</p>
                    <input className= "border-b-slate-400 border-2 ml-4" type="number" value={itemNoOld}/>
                </div>
                 <div className="flex m-4">
                     <p className="font-bold text-xl"> Description</p>
                    <textarea className= "border-b-slate-400 border-2 ml-4"  defaultValue={location.state.description} onChange={(e)=>setDescription(e.target.value)}/>
                </div>
                 <div className="flex m-4">
                     <p className="font-bold text-xl mr-10">Rate</p>
                    <input className= "border-b-slate-400 border-2 ml-4" type="number" defaultValue={location.state.rate} onChange={(e)=>setRate(e.target.valueAsNumber)}/>
                </div>
                 <div className="flex m-4 ">
                 <p className="font-bold text-xl mr-14">Qty</p>
                    <input className= "border-b-slate-400 border-2 ml-4" type="number" defaultValue={location.state.qty} onChange={(e)=>setQty(e.target.valueAsNumber)}/>
                </div>
                    <div className="flex m-4">
                    <p className="font-bold text-xl mr-3">Amount</p>
                <input className= "border-b-slate-400 border-2 ml-4" type="number" defaultValue={location.state.amount} onChange={(e)=>setAmount(e.target.valueAsNumber)}/>
                </div>
                    <div className="flex h-full items-center justify-center">
                    <button className=" bg-slate-300 text-center rounded-2 cursor-pointer place-self-center text-2xl px-3 py-1" onClick={handleClick}>Edit</button>
                </div>
            </div>
        </div>
    )

}
export default EditPage