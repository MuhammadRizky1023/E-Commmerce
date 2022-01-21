import BajuWanita from '../images/baju wanita.jpg';
import SepauWanita from '../images/sepatu wanita.jpg';
import Kacamata from "../images/kacamta.jpeg";
import BajuPria from '../images/baju pria.jpg';
import sepatuPelajar from '../images/sepatu pelajar.jpg';
import topi from'../images/topipanama.jpg'
import sepatuPantofel from '../images/sepatu pantofel.jpg';
import JamTangan from '../images/jamtangan.jpg';
import PakaianWanita from '../images/pakaianbatik.jpg'
const initialState = {
  categories: [
    {
      title: "All Categories",
      key: "all",
      is_active: false,
    },
    {
      title: "Pakaian",
      key: "pakaian",
      is_active: false,
    },
    {
      title: "Jam",
      key: "jam",
      is_active: false
    },
    {
      title: "Kacamata",
      key: "kacamata",
      is_active: false
    },
    {
      title: "Sepatu",
      key: "sepatu",
      is_active: false,
    },
    {
        title: "Topi",
        key: "topi",
        is_active: false,
    }
  ],
  product: [
    {
      id: 1,
      title: "Baju Pria",
      category: "pakaian",
      image: [BajuPria],
      price: "Rp580.000"
      
    },
    {
      id: 2,
      title: "Pakain Wanita",
      category: "pakaian",
      filter: "wanita",
      image: [BajuWanita],
      price:"Rp550.00"
    },
    {
      id: 3,
      title: "Pakaian Muslimah",
      category: "pakaian",
      filter: "wanita",
      image: [PakaianWanita],
      price:"Rp225.000"
    },
      {
        id: 4,
        title: "Topi",
        category: "topi",
        image: [topi],
        price:"Rp125.000"
      },
      {
        id: 5,
        title: "Jam Tangan",
        category: "jam",
        image: [JamTangan],
        price: "Rp120.000"
      },
      {
        id: 6,
        title: "Kacamata",
        category: "kacamata",
        filter: "dewasa",
        image: [Kacamata],
        price: "Rp350.000"
      },
      {
        id: 7,
        title: "sepatu Pantofel",
        category: "sepatu",
        filter: "laki-laki",
        image: [sepatuPantofel],
        price: "Rp420.000",
      },
      
      {
        id: 8,
        title: "sepatu Sekolah",
        category: "sepatu",
        filter: "anak-anak",
        image: [sepatuPelajar],
        price: "Rp320.000",
    },
   
      {
        id: 9,
        title: "Sepatu  Wanita",
        category: "sepatu",
        image: [SepauWanita],
        price:"Rp350.000",
      },

    ],
  
  filter: [
    {
      title: "Rp250.000",
      key: "big",
    },
    {
      
      title: "Rp100.000",
      key: "small",

    },
    
  ],
  detail: null,
  subTotal: null,
  cart:{
    total: null,
    priceTotal: null,

  },
  cartItem: [],
  productShow: [],
  order: [],
  orderProduct: [],
  userCheckout: [],
  totalPayment: 0,
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {

    
    case "CHANGE_ACTIVE_CATEGORY":
      const newCategories = state.categories.map(item => {
        if (item.key === action.payload) {
          return {
            ...item,
            active: true
          };
        } else {
          return {
            ...item,
            active: false
          };
        }
      });

      console.log(newCategories, "INI NEW CATEGORIES");
      return {
        ...state,
        productShow: newCategories
      };
      
    case "SET_SHOW_PRODUCTS":
      let productFilter;
      if (action.payload === "all") {
        productFilter = state.product
      } else {
        productFilter = state.product.filter(item => item.category === action.payload)
      }

      return {
        ...state,
        productShow: productFilter
      }
    
    case "HANDLE_SEARCH":
      const filterProducts = state.product.filter(item => item.category === action.payload.category && item.title.toLowerCase() === action.payload.title.toLowerCase())
      return { ...state, productShow: filterProducts }
    
    case "FILTER_PRODUCTS":
      const filtered = state.product.filter(item => {
        if (action.payload === "big") {
          return item.price >= "Rp250.000"
        } 
        else {
          return item.price > "Rp100.000"
        }
      })
      return {
        ...state,
        productShow: filtered
      }
    
      case "GET_Detail_PRODUCTS":
         const findProduct = state.product.find(item => item.id ===  Number(action.payload))
         return {
            ...state,
            detail: findProduct
         }
    
    case "CART":
      const totalNow = state.cart.total
         const updateNow = totalNow + 1
         console.log(action, "Ini Keranjang")
         const newCart = []
         state.product.forEach((item) => {
            if (item.id === action.payload) {
              newCart.push(item)
            }
         })

      
      return {...state,cart: {
        total: updateNow,
      }, cartItem: [
        ...state.cartItem,
      ...newCart]
      }
    
     case "REMOVE_CART_ITEM":
      return {
        ...state,
        product: state.product.map(product =>
          product.id === action.id
            ? {...product, selected: false, quantity: 1}
            : product,
        ),
      };
    

    

    default:
      return state;
  }
};
