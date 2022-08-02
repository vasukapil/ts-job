import React,{useState} from 'react'
import Header from '../Header/Header'
import ShoppingCard from '../ShoppingCard/ShoppingCard'


const HomePage : React.FC = () => {

  const [del,setDelete] = useState<boolean>(true);
  const [details,setDetails]=useState<string>("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex,in pretium orci vestibulum eget.");
  
    
  
  return (
    <div>
      <Header/>
      <ShoppingCard del = {del} setDelete={setDelete} details={details}/>
    </div>

  )
}

export default HomePage