

interface Prop{
    children:string
}

const Alert=({children}:Prop)=> {
  return (
    <div className="alert alert-primary">{children}</div>
  )
}

export default Alert