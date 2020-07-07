import api from './api';

export const ACTION_TYPES={
    CREATE:'CREATE',
    UPDATE:'UPDATE',
    DELETE:'DELETE',
    FETCH_ALL:'FETCH_ALL'
}
const formateData=data=>({
    ...data,
    Staff_Id:5,
    Contact_No:"011111111",
    Role_Id:1


})

export const create=(data,onSuccss)=>dispatch=>{
    data=formateData(data);
    console.log("AAAAAA")
    console.log(data);
    console.log("Bhashitha")
    api.user().create(data)
                    .then(res=>{
                        console.log(res.data)
                        dispatch({
                            type:ACTION_TYPES.CREATE,
                            payload:res.data
                        })
                        onSuccss();
                    })
                    .catch(err=>console.log(err))
}