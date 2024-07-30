import "./product.css"

const Product = ({img,link}) => {
  return (
		<div className="diff_product">
			<div className="product_browser">
				<div className="product_circle"></div>
				<div className="product_circle"></div>
				<div className="product_circle"></div>
			</div>
			<a href={link} target="_blank" rel="noreferrer">
				<img src={img} alt="" className="product_img" />
			</a>
		</div>
	);
}

export default Product
