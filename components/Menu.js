export default function Menu({ categories }) {
  return (
    <>
      {typeof categories !== undefined && categories.data.map(category => {
        return (<div><h1>{category.id}</h1></div>)
      })}
    </>
  )
}
