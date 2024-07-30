import "./productList.css";
import Product from "../product/product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="product_list">
      <div className="list_texts">
        <h1 className="list_title">Recent Projects</h1>
        <h4>
          <em className="project_subhead">Think, Code, Build & Launch...</em>
        </h4>
        <p className="list_desc">
          Explore a collection of beautiful and immersive websites and web
          applications.
        </p>
      </div>
      <div className="all_list">
        
          {products.map((item) => (
            <Product
              key={item.id}
              img={item.img}
              link={item.link}
              className="each_boxes"
            />
          ))}
        {/* {products.map((item) => (
					<Product key={item.id} img={item.img} link={item.link} />
				))} */}
      </div>
    </div>
  );
};

export default ProductList;
