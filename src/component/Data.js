

const Data = (props) => {
  return (
    <div className='Data'>
     <img className="img" src={props.img} alt=" some error " />
     <p>{props.title}</p>
     <p>year: {props.year}</p>
    </div>
  )
}

export default Data