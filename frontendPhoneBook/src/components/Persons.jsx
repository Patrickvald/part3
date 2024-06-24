import List from "./List"
const Persons = ({condition, normalList, searchedList, deleted}) => {
  return (
    <ul>
    {condition? 
    searchedList.map(person=>
      <List key={person.id} list={person} deleted={()=>deleted(person.id)}/>
    ):
    normalList.map(person=>
      <List key={person.id} list={person} deleted={()=>deleted(person.id)}/>
    )}
  </ul>
  )
}

export default Persons