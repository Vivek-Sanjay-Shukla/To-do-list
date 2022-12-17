import React, { useEffect, useState } from 'react'
import './style.css'

// get the local storage data back

const getLocalData = () => {
  const lists = localStorage.getItem("mytodolist");

  if(lists){
    return JSON.parse(lists);
  }
  else{
    return [];
  }
}

const Todo = () => {

   const [inputdata, setinputdata] = useState("");
   const [items, setItems] = useState(getLocalData());
   const [isEditItem, setIsEditItem] = useState("");
   const [toggleBtn, setToggleBtn] = useState(false);

  //  add the items  in the list

  const addItem = () => {
          if(inputdata.length === 0){
            alert("Please enter some data");
          }
          else if(inputdata && toggleBtn){
             setItems(
              items.map((ele) => {
                if(ele.id === isEditItem){
                  return {...ele,name:inputdata}
                }

                return ele;
              })

             )

             setinputdata("");
             setToggleBtn(false);
          }
          else{

            // unique id for each element
            const myNewData = {
              id:new Date().getTime().toString(),
              name:inputdata,
            }

            // ...items means the data which is already their
            setItems([...items,myNewData]);
            setinputdata("");
          }

  };


  //  Delete the item
  const deleteItem = (id) => {
    const updatedItems = items.filter((ele) => {
      return ele.id !== id;
    });

    setItems(updatedItems);
  };

  //  remove all the items
  
  const removeAll = () => {
    setItems([]);
  }

  // for local storage
  useEffect(() => {
    localStorage.setItem("mytodolist",JSON.stringify(items));
  }, [items]);


  // editing the items

  const editItem = (id) => {

    const item_in_list = items.find((ele) => {
      return ele.id === id;
    });
  
    setinputdata(item_in_list.name);
    setIsEditItem(id);
    setToggleBtn(true);
     
  }


  //  console.log(inputdata);
  return (
    <>
      <div className="main_div">
          <div className="child_div">
            <figure>
                <img src="./images/PngItem_2456104.png" alt="Todologo"/>
                <figcaption>Add Your List Here 👍</figcaption>
            </figure>

            <div className="addItems">
                <input type="text" placeholder='Add Items'
                 className='form_control'
                  value = {inputdata}
                  onChange = {(e) => setinputdata(e.target.value)}
                 />

                 
                {!toggleBtn ? (<i onClick={addItem} className="fa fa-plus add-btn"></i>) : 
                              (<i  onClick={addItem} className="far fa-edit add-btn"></i>) }

                
            </div>

{/* show the items */}
            <div className="showItems"> 
          {items.map((element,index)=>{
               return(
               <div className="eachItem" key={index}s>
               <h3>{element.name}</h3>
               <div className="todo-btn">

                 <i onClick={() => editItem(element.id)} className="far fa-edit add-btn"></i>
                 <i onClick={() => deleteItem(element.id)} className="far fa-trash-alt add-btn"></i>
               </div>
             </div>
               )
          })}
          </div>

            <div className="showItems">
              <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll}><span>Checklist</span></button>
            </div>
            
          </div>
      </div>
    </>
  )
}

export default Todo