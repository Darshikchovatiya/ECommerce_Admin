const initialState = {
    products: [],
    product: '',
    stock: 'available'
}

export const productRe = (state = initialState, action) => {
    switch (action.type) {
        case 'Allproducts':
            return {
                ...state,
                products: action.payload,
                product: ''
            }

        case 'Single_data':
            return {
                ...state,
                product: action.payload
            }

        case 'stock_ch':
            // console.log(action.payload);

            let che_sto = action.payload;
            let sto_msg;
            // console.log(che_sto);
            
            if(!che_sto){
                // console.log("Out of Stock");
                sto_msg = 'out of stock'
            }

            // console.log(sto_msg);




            // let pros = state.products
            // let che_sto;

            // console.log(pros, "pros");

            // let out_st = 
            
            // pros.filter((pr) => {
            //     // console.log(pr);
            //     if(pr.id == action.payload.id){
            //         che_sto = action.payload.che_stock
            //         // console.log("return", che_sto);
            //         // return che_sto;
            //     }
            //     // return che_sto

            //     // return pr.id == id
            //     // out of stock
            // })
            // console.log(out_st, "out_st");

            // if(che_sto){
            //     console.log("Out of Stock");
            // }

            




        return{
            ...state,
            stock: sto_msg
        }

        default:
            return state
    }
} 