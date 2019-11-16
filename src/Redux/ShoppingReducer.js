import { ADD_ITEM, DELETE_ITEM, UPDATE_CART, FETCH_PRODUCTS, SHOW_MODAL } from '../Redux/types';




const INITIAL_STATE = {

    products: [],
    items_in_cart: [],
    item_index: 0,
    totalItems: 0,
    currentItem: 'No items yet...',
    price: 0,
    totalAmount: 0,
    delAmount: 0,
    toggleModal: false
}


export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case FETCH_PRODUCTS:
            console.log('reducerssss', action.products)
            return ({ ...state, products: action.products })

        case ADD_ITEM:
            console.log("Sending new items", state.items_in_cart)

            const newItem = {

                name: action.currentItem,
                item_index: state.item_index++,
                price: action.item_price,
                source: action.source


            }



            console.log("2456Sending new items", state.items_in_cart)

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
            return INITIAL_STATE

        case SHOW_MODAL:
            console.log('action payloda', action.payload)
            
            return { ...state, toggleModal: action.payload }
        default:
            return state;



    }
}