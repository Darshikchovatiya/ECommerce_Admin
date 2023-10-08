import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";



export const AddproductsAsync = (data) => {
    return async dispatch => {
        const docRef = await addDoc(collection(db, "products"), data);
        // console.log(docRef.id,"docRef");
        dispatch(GetproductsAsync(docRef));
    }
}


export const GetproductsAsync = () => {
    return async dispatch => {

        let al_data = [];

        const querySnapshot = await getDocs(collection(db, "products"));

        querySnapshot.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());

            let fb_data = { ...doc.data(), id: doc.id };
            al_data = [...al_data, fb_data];

            dispatch(all_products(al_data));
        });
    }
}

const all_products = (data) => {
    return {
        type: 'Allproducts',
        payload: data
    }
}



export const Singleproduct = (id) => {
    return async dispatch => {
        const docRef = doc(db, "products", `${id}`);
        const docSnap = await getDoc(docRef);
        // console.log("docsnap", docSnap.data());
        let d = { ...docSnap.data(), id };
        // console.log("d>>>>>",d);
        dispatch(singleData(d));

    }
}

const singleData = (d) => {
    return {
        type: 'Single_data',
        payload: d
    }
}



export const Updateproduct = (id, data) => {
    return async dispatch => {

        await updateDoc(doc(db, "products", `${id}`), data);
        dispatch(GetproductsAsync());
    }
}



export const Deleteproduct = (id) => {
    return async dispatch => {

        await deleteDoc(doc(db, "products", `${id}`));
        dispatch(GetproductsAsync());
    }
}

export const Stockproduct = (id, che_stock, products) => {

    // console.log(che_stock);
    // console.log(products,"r");

    // return{
    //     type: 'stock_ch',
    //     payload: {id, che_stock}
    // }


    return dispatch => {

        //     // console.log(id);

        //     // let out_st = 

        //     products.filter((pr) => {
        //         console.log(pr);
        //         // return pr.id == id
        //         // out of stock
        //     })
        //     // console.log(out_st);
        // }

        products.filter((pr) => {
            // console.log(pr);
            if (pr.id === id) {
                // console.log(pr.id === id,"lo");
                dispatch(stockpro(che_stock));

                // che_sto = action.payload.che_stock
                // console.log("return", che_sto);
                // return che_sto;
            }
            // return che_sto

            // return pr.id == id
            // out of stock
        })

    }


}

const stockpro = (che_stock) => {

    // console.log(che_stock);

    return{
        type: 'stock_ch',
        payload: che_stock
    }
}