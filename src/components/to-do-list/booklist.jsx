import React, { Component } from 'react'
import Message from './message'
import csx from "../../assets/styles/booklist.module.scss";

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      list: [],
    }
  }
  inputRef = React.createRef();

  handleSubmit = async () => {
  const list = [...this.state.list];
  const inputValue = this.inputRef.current.value;
  console.log(inputValue);
  if (inputValue) {
    list.push(inputValue);
  }
  await this.setState({list});
  console.log(this.state.list);
  this.inputRef.current.value = "";
  }

  deleteItem = async (item) => {
   const deleteIndex = this.state.list.findIndex((ite) => ite === item);
   const list = [...this.state.list];
   list.splice(deleteIndex, 1);
   await this.setState({list})
  }

  editItem(item) {
    this.inputRef.current.value = item;
    this.deleteItem(item);
  }
 render() {
  return (
    <div className={csx.bookList}>
       <h1>To Do List</h1>
        <div className={csx.form}>
        <input ref={this.inputRef} type="text" name='text' onChange={this.handleChange} id={csx.formControl} placeholder='Name...'/>
        <button className={csx.addBtn} onClick={this.handleSubmit}>Add Item</button>
        </div>
       <ul className="books">
       {this.state.list.map((item, i) =>
        <li  key={item} className={csx.book} style={{cursor: "pointer"}}>
        {item}
        <div>
         <button className={csx.elm1}>✅</button>
         <button onClick={() => this.editItem(item)} className={csx.elm3}>💬</button>
         <button onClick={() => this.deleteItem(item)} className={csx.elm2}>❌</button>
        </div>
        </li>)
       }
       </ul>
       <button style={{marginTop: "20px"}} className={csx.addBtn}>Clear Items</button>
      </div>
    )
  }
}
