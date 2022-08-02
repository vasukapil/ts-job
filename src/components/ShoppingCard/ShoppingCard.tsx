import React, { useState } from 'react'
import './ShoppingCard.css'
import {AiFillDelete,AiOutlineHeart,AiFillCloseCircle} from 'react-icons/ai'
import {FcPlus} from 'react-icons/fc'


type MyType = {
    id:number;
    image:string;
    title:string;
    desc:string;
  }

  type Props = {
      del : boolean;
      setDelete : React.Dispatch<React.SetStateAction<boolean>>;
      details : string
  }
  
  let arr: MyType[] = [
    { id: 0, image: "./Images/shoe.jpg",title:"shoes",desc :"Air Jordan" },
    { id: 1, image: "./Images/shirt.jpg",title:"shoes",desc :"Air Jordan" },
    { id: 2,  image: "./Images/mobile.jpg",title:"shoes",desc :"Air Jordan"  },
    { id: 3,  image: "./Images/laptop.jpg",title:"shoes",desc :"Air Jordan"  }
  ];
  

const ShoppingCard = ({del,setDelete,details}:Props) => {

    const [lists,setLists] = useState(arr);
    const [show, setShow] = useState(false);

    const [pic,setPic] = useState<string>("");
    const [title,setTitle] = useState<string>("");
    const [desc,setDesc] = useState<string>("");
    const [price,setPrice] = useState<number|string>();
    

    function handleDelete(id:number){

        setLists(lists.filter((list)=>

            list.id!==id

        ))

    }

    function handleSubmit(e:React.FormEvent)
    {
       setLists([ ...lists,
        {
        id:lists.length,    
        image:pic,
        title,
        desc
        }
        


    ])
    console.log(pic,title,desc)
  
    

    }

 
  
  return (
    <div className="Card__Container">

        <div className="Form">

            <form onSubmit={(e)=>handleSubmit}>
                <input placeholder="imageLink" className="form__img" value={pic} onChange = {(e)=>{setPic(e.target.value)}}></input>
                <input placeholder="title" className="form__title"value={title} onChange = {(e)=>{setTitle(e.target.value)}}></input>
                <input placeholder="description" className="form__desc"value={desc} onChange = {(e)=>{setDesc(e.target.value)}}></input>
                {/* <input placeholder="price" className="form__price"value={price} onChange = {(e)=>{setPrice(e.target.value)}}></input> */}
                <button type="submit">Submit to HomePage</button>

            </form>
           
        </div>

        {
            lists.map((item)=>{
                return <div className="SingleCard" key = {item.id} onClick={()=>{setShow(!show)}}>
                    {
                        show && (<><div className="Card__Modal">{details}
                        
                        </div><span className="modal__close"><AiFillCloseCircle/></span></>) 
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
                           <span>
                              < AiOutlineHeart />
                           </span>
                           </>

                            ) :(

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