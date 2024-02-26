import { Item } from './components/Item'
import { Cart } from './components/Cart'
import "./App.css"
function App() {


  return (

    <>
    <p>ITEMS</p>
    <div className='box_div1'>
       <Item name="Laptop" price={200}/>
       <Item name="Keyboard" price={200}/>
       <Item name="Mouse" price={100}/>
       <Item name="Phone" price={300}/>
       </div>
    <div className='box_div'>
       <Cart/>
       </div>
    </>
  )
}

export default App
