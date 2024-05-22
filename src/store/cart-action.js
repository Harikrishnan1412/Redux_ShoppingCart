import { cartActions } from "./cart-Slice";
import { uiActions } from "./ui-Slice";



export const fetchData = () =>{
    return async(dispatch)=>{
        const fetchHandler = async() =>{
            const res = await fetch("https://redux-http-f7bf4-default-rtdb.firebaseio.com/cartItems.json");
            const data = res.json();
            return data;
        }
        try{
            const  cartData = await fetchHandler();
            dispatch(cartActions.replaceData(cartData))
        }catch(err){
            dispatch(
                uiActions.showNotification({
                    open:true,
                    message:"Sending Request Failed",
                    type:"error",
                })
            )
        }
    }
}


export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            open: true,
            message: "Sending Request",
            type: 'warning'
        }))

        const sendRequest = async () => {

            // call notification state for request
            console.log("Sending request");
            dispatch(uiActions.showNotification({
                open: true,
                message: "Sending Request",
                type: 'warning'
            }))

            const res = await fetch("https://redux-http-f7bf4-default-rtdb.firebaseio.com/cartItems.json",
                {
                    method: "PUT",
                    body: JSON.stringify(cart),
                }
            );
            const data = await res.json();

            // call notification state if request is success
            console.log("Notification sucess");
            dispatch(uiActions.showNotification({
                open: true,
                message: "Send Request To Database Successfully",
                type: 'success'
            }));

        };
        try {
            await sendRequest();
        } catch (err) {
            dispatch(
                uiActions.showNotification({
                    open: true,
                    message: "Sending Request Failed",
                    type: "error",
                })
            );
        }
    }
}