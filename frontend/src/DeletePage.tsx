import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import { useNavigate } from "react-router-dom"
const DeletePage=()=>{
    const location= useLocation()

    const navigate= useNavigate()
    const [description,setDescription]= useState('')
    const itemNo= location.state.itemNo

    useEffect(()=>{
        setDescription(location.state.description)
    },[])

    const handleClick=()=>{
        const formData= {itemNo,description}
            fetch('http://localhost:8000/delete',{
                method:'DELETE',
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
                <p className="text-center text-2xl font-bold">Delete an Item</p>
                <div className="flex m-4">
                    <p className="font-bold text-xl">Item No</p>
                    <input className= "border-b-slate-400 border-2 ml-4" type="number" value={itemNo}/>
                </div>
                <div className="flex m-4">
                    <p className="font-bold text-xl"> Description</p>
                    <textarea className= "border-b-slate-400 border-2 ml-4" value={location.state.description} />
                </div>
                <div className="flex m-4">
                    <p className="font-bold text-xl">Rate</p>
                    <input className= "border-b-slate-400 border-2 ml-4" type="number" value={location.state.rate} />
                </div>
                <div className="flex m-4">
                    <p className="font-bold text-xl">Qty</p>
                    <input className= "border-b-slate-400 border-2 ml-4" type="number" value={location.state.qty} />
                </div>
                <div className="flex m-4">
                    <p className="font-bold text-xl">Amount</p>
                    <input className= "border-b-slate-400 border-2 ml-4" type="number" value={location.state.amount}/>
                </div>
                
                <p className="font-bold text-xl">Are you sure you want to delete?</p>
                <div className="flex m-4">
                    <button className="bg-slate-300 text-center rounded-md cursor-pointer place-self-center text-2xl px-3 py-1" onClick={handleClick}>Yes</button>
                    <button className="bg-slate-300 text-center rounded-md cursor-pointer place-self-center text-2xl px-3 py-1 ml-4" onClick={()=>navigate('/')}>Go Back</button>
                </div>
            </div>
        </div>
    )
}
export default DeletePage