const initialState = {
        product: [],
        categories: [],
        products: {},
        productShow: []
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                productShowed: action.payload,
                product: action.payload
            }
        
        
        case 'ADD_PRODUCTS':
            const product = state.product.filter((item) => {
                return  item.id  ===  state.payload ; 
            })
            return {
                ...state,
                product,
            }
        
        
        
        case 'DELETE_PRODUCT':
            const newProduct = state.product.filter((product) => {
                return product.id !== state.payload
            })
            return {
                ...state,
                product: newProduct,
                productShowed: newProduct
            }
    
        default:
            return state;
    }
}
