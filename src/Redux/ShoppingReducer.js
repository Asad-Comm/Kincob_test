import { ADD_ITEM, DELETE_ITEM, UPDATE_CART, FETCH_PRODUCTS, SHOW_MODAL, FETCH_PRODUCTS_UNSTITCHED } from '../Redux/types';




const INITIAL_STATE = {

    products: [],
    unstitchedProducts:[],
    items_in_cart: [],
    item_index: 0,
    totalItems: 0,
    currentItem: 'No items yet...',
    price: 0,
    totalAmount: 0,
    delAmount: 0,
    toggleModal: false,
    Order_Id:1
}


export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case FETCH_PRODUCTS:
            console.log('reducerssss stitched', action.products)
            return ({ ...state, products: action.products })

        case FETCH_PRODUCTS_UNSTITCHED:
                console.log('reducerssss unstitched', action.products)
                return ({ ...state, unstitchedProducts: action.products })
    

        case ADD_ITEM:
            console.log("Sending new items", state.items_in_cart)
            let pr_id = action.product_id
            let p_id = pr_id.toString()
            let Order_id = Math.floor(Math.random() * 550)
            let o_id = Order_id.toString()
            const newItem = {

                name: action.currentItem,
                item_index: state.item_index++,
                price: action.item_price,
                source: action.source,
                Product_id: p_id,
                Order_id:o_id


            }



            console.log("2456Sending new items", newItem)

            console.log('Reducer item:', state.totalAmount)

            let pr = parseFloat(action.item_price)
            return ({ ...state, price: action.item_price, currentItem: action.currentItem, totalAmount: state.totalAmount + pr, items_in_cart: [...state.items_in_cart, newItem] })


        case UPDATE_CART:
            return ({ ...state });


        case DELETE_ITEM:
            console.log('Delete item at index : ', action.item_index)
            state.items_in_cart = state.items_in_cart.filter((item) => {


                return (item.item_index !== action.item_index)
            })

            return { ...state, items_in_cart: [...state.items_in_cart], totalAmount: state.totalAmount - action.deduct }

        case "addTT":

            return { ...state, totalAmount: state.totalAmount + action.value }

        case "clearCart":
            for (let fruit of state.items_in_cart) {
                let name = fruit.name
                let price = fruit.price
                let Product_Id = fruit.Product_id
                let Order_Id =  fruit.Order_id 
                const order = {
                    "Order_Id": Order_Id,
                    "Product_Name": name,
                    "Product_Id": Product_Id,
                    "Price": price,
                }
                fetch('https://ah3zewkpw1.execute-api.us-east-1.amazonaws.com/testflight/post', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(
                        order
                        // "Order_Id": "90",
                        // "Product_Id": "5",
                        // "Product_Name": "MOhsin ki Shirt"
                    ),
                }).then(json => json.json()).then(res => {
                    
                    console.log(res)
                }
                ).catch((error) => console.log('error bazzanfgi',error)
                )
            }
            // const  order = {
            //     "Order_Id": '110',
            //     "Product_Name" : name,
            //     "Product_Id": "245",
            //     "Price": price,
            // }
            // fetch('https://ah3zewkpw1.execute-api.us-east-1.amazonaws.com/testflight/post', {
            //     method: 'POST',
            //     headers: {
            //         Accept: 'application/json',
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(
            //         order
            //         // "Order_Id": "90",
            //         // "Product_Id": "5",
            //         // "Product_Name": "MOhsin ki Shirt"
            //     ),
            // }).then(json => json.json()).then(res => {
            //     i++;
            //     console.log(res)}
            // ).catch(() => console.log('error')
            // )
            return { ...state, totalAmount: 0 , items_in_cart : [] }

        case SHOW_MODAL:
            console.log('action payloda', action.payload)

            return { ...state, toggleModal: action.payload }
        default:
            return state;



    }
}