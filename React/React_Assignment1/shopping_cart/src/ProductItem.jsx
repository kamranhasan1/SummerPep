import React, {useState} from "react";

const ProductItem = ({ productData }) => {
  const [product, setProduct] = useState(productData);

  function handleIncrement(index) {
    const updatedData = [...productData];
    updatedData[index].total += 1;
    console.log(updatedData);
    setProduct(updatedData);
  }
  function handleDecrement(index) {
    const updatedData = [...productData];
    if (updatedData[index].total > 0) {
      updatedData[index].total -= 1;
    }
    console.log(updatedData);
    setProduct(updatedData);
  }
  return (
    <>
      {product.map((data, index) => (
        <div key={data.item} className="card m-1" style={{ width: 30 + "rem" }}>
          <div className="card-body">
            <h5 className="card-title">{data.item}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              &#8377; {data.price} each
            </h6>
            <p className="card-text">
              <button
                className="btn btn-danger mx-2"
                onClick={() => handleDecrement(index)}
              >
                -
              </button>
              <span>{data.total}</span>
              <button
                className="btn btn-success mx-2"
                onClick={() => handleIncrement(index)}
              >
                +
              </button>
              <br />
              Total: &#8377; {data.price * data.total}
            </p>
          </div>
        </div>
      ))}
      <div style={{ width: 30 + "rem" }}>
        <h3 className="text-center">
          Total Amount: &#8377;{" "}
          {productData.reduce((acc, curr) => acc + curr.price * curr.total, 0)}
        </h3>
      </div>
    </>
  );
};

export default ProductItem;