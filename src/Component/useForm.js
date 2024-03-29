import React,{useState,useEffect} from 'react';

const useForm=(initialFieldValues,validate,setCurrentId)=>{
  
    const [values,setValues]=useState(initialFieldValues)
    const [errors,setErrors]=useState({})

const handleInputChange=(event)=>{
    const {name,value}=event.target
    const fieldValue={[name]:value}
    setValues({
        ...values,
       // [name]:value
       ...fieldValue
    })
  //  validate(fieldValue)
}

const resetForm=()=>{
    setValues({
        ...initialFieldValues
    })
    setErrors({});
    setCurrentId(0);
}

   return{
       values,
       setValues,
       errors,
       setErrors, 
       handleInputChange,
       resetForm
   } 
 
}

export default useForm;