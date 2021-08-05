import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const params = useParams()
  console.log(params.productId)

  return (
    <section>
      <h1>Product Detail</h1>
      <h2>{params.productId}</h2>
    </section>
  )
}

export default ProductDetail
