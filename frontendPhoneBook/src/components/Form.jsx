import Input from "./Input"

const Form = ({addName, newName, newPhone, handleChangeName, handleChangePhone}) => {
  return (
    <form onSubmit={addName}>
    <div>
      Name:<Input value={newName} action={handleChangeName}/>
    </div>
    <div>
      Phone:<Input value={newPhone} action={handleChangePhone}/>
    </div>
    <div>
      <button type='submit'>Add</button>
    </div>
  </form>
  )
}

export default Form