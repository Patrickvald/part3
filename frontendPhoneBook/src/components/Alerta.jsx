
const Alerta = ({message, error}) => {
    if(message === ''){
        return null
    }

  return (
    <>
        {error? (<div className="error">{message}</div>) : (<div className="alert">{message}</div>)}
    </>
  )
}

export default Alerta