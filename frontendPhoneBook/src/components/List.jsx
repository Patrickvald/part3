import Button from "./Button"

const List = ({list, deleted}) => {
  return (
    <div>
        <p>
            <strong>{list.name}</strong> : {list.phone}  <Button handle={deleted} text='Delete'/>
        </p>
        
        
    </div>
  )
}

export default List