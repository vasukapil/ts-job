import React, { useEffect, useState } from 'react'
import './ShoppingCard.css'
import {AiFillDelete,AiOutlineHeart,AiFillCloseCircle} from 'react-icons/ai'
import {FcPlus} from 'react-icons/fc'
import ShoppingForm from '../Form/ShoppingForm'


type MyType = {
    id:number;
    image:string;
    title:string;
    desc:string;
    price?:number;
  }


  type Props = {
      del : boolean;
      setDelete : React.Dispatch<React.SetStateAction<boolean>>;
      details : string
      onCartNumber:(num: number) => void
  }
  
  let arr: MyType[] = [
    { id: 0, image: "./Images/shoe.jpg",title:"shoes",desc :"20$" },
    { id: 1, image: "./Images/shirt.jpg",title:"shirt",desc :"25$" },
    { id: 2,  image: "./Images/mobile.jpg",title:"mobile",desc :"60$"  },
    { id: 3,  image: "./Images/laptop.jpg",title:"Laptop",desc :"100$"  }
  ];
  

const ShoppingCard = ({del,setDelete,details,onCartNumber}:Props) => {

    const [lists,setLists] = useState(arr);
    const [show, setShow] = useState<number>();
    const [wish,setWishList] = useState<number>();
    const [check,setCheck] = useState<boolean>(false);
    const [cartItems,setCartItems]=useState<number>(lists.length);


    useEffect(()=>{

        setCartItems(lists.length)

    },[lists])

    const handleClick = (idx:number) => 
    {
        setShow(idx)
    }

    
    const saveDataHandler = (enteredData:MyType) =>
    {
        const data = {
            ...enteredData,
            id:lists.length

            
            
            
        };

        setLists([data,...lists])

       
        
       
    }

    function handleDelete(id:number){

        setLists(lists.filter((list)=>

            list.id!==id

        ))
        

    }

    // const DataHandler = (enteredData) => {

    //     const data = {
    //         ...enteredData,

    //     }

    // }

    const handleWish = (id:number) =>{

     setWishList(id)

    setCheck(!check);

        

     

       
    

       

        

       
    }
        
    onCartNumber(cartItems);
    


    
 
  
  return (
    <div className="Card__Container">

       <ShoppingForm onSaveData={saveDataHandler} />

        {
            
            lists.map((item,idx)=>{

            
                return <div className="SingleCard" key = {item.id} onClick={()=>handleClick(idx)}>
                    {
                        
                        show==idx && (<>
                       
                        <div className="Card__Modal">{details}
                        
                        </div><span className="modal__close" onClick={()=>setShow}><AiFillCloseCircle/></span></>) 
                    }
                    <div className="list__icons">
                        {
                          del ? (
                              <>
                              
                                <span onClick={()=>handleDelete(item.id)} > 
                                <AiFillDelete/>
                                
                             </span>
                              <span>
                              < FcPlus />
                           </span>
                           <span onClick={()=>handleWish(idx)}>
                                    {
                                        show==idx ?
                                         <>
                                        <p className="wishlist__text">Added to Wishlist</p> 
                                        
                                        </>
                                        : (

                                           
                                             < AiOutlineHeart /> )
                                        
                                    }
                                
                             </span>
                           </>

                            ) :
                            
                            (

        

                                <span>
                                < FcPlus />
                             </span>

                            )
                        }
                      
                       
                        </div>
                    <img className="card__img" src={item.image}></img>
                    
                    <h2 className="card__title">{item.title}</h2>
                    <p className="card__desc">{item.desc}</p>
                    
                </div>

            })
        }


    </div>
  )
}

export default ShoppingCard