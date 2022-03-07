function Todo({todo,index,remove}){
    function handle(){
      console.log('Ping:',index);
      remove(index);
    }
  
    return <button className="todo btn btn-info btn-lg" onClick={handle}>{todo.text} <span className="badge badge-secondary"> X </span></button>
  }
  