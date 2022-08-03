import React,{useState} from 'react'


type Props = {
    onSaveData: (enteredData: any) => void
}





    const ShoppingForm = ({onSaveData}:Props) => {
        const [pic,setPic] = useState<string>("");
        const [titles,setTitle] = useState<string>("");
        const [description,setDesc] = useState<string>("");
        const [price,setPrice] = useState<number|string>();

        const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
            setPic(event.target.value);
            console.log(event.target.value);
        }

        const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(event.target.value);
            console.log(event.target.value);
        }
        const handleDesc = (event: React.ChangeEvent<HTMLInputElement>) => {
            setDesc(event.target.value);
            console.log(event.target.value);
        }
        const  handlePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
            setPrice(event.target.value);
            console.log(event.target.value);
        }

       
        function handleSubmit(e:React.FormEvent)
        {
            e.preventDefault();
          const data = {
    
            id:1,
            image:pic,
            title:titles,
            desc:description,
            price
    
            
    
    
    
          }
          onSaveData(data);
          setPic("");
          setTitle("");
          setDesc("");
          setPrice("");
          console.log(data);
        }
    
  return (
    <div className="Form">

    <form onSubmit={handleSubmit}>
        <div>
        <input placeholder="imageLink" type="text" className="form__img" value={pic} onChange = {handleImage}></input>
        </div>
        <div>
        <input placeholder="title" className="form__title"value={titles} onChange = {handleTitle}></input>
        </div>
        <div>
        <input placeholder="description" className="form__desc"value={description} onChange = {handleDesc}></input></div>
        <input placeholder="price" type="number" className="form__price"value={price} onChange = {handlePrice}></input>
        <button type="submit">Submit to HomePage</button>

    </form>
    </div>
   
  )
}

export default ShoppingForm