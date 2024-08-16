import { Card } from "antd";

const { Meta } = Card;

const ProductCard = ({ products }) => {
  // const {
  //   productName,
  //   brandName,
  //   productImage,
  //   description,
  //   price,
  //   category,
  //   ratings,

  //   productCreationDate,
  // } = products;
  // console.log(brandName);

  const gridStyle = {
    width: "50%",

    textAlign: "center",
  };
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2"> 
    {products.map((data) => (
        <>
          {/* <ProductCard key={data._id} products={products}></ProductCard> */}
          <div key={data._id} >
            <Card
              hoverable
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title={data.ratings}
                description={data.description}
              />
              <Card.Grid style={gridStyle}>{data.productName}</Card.Grid>
              <Card.Grid style={gridStyle}>{data.brandName}</Card.Grid>
              <Card.Grid style={gridStyle}>{data.category}</Card.Grid>
              <Card.Grid style={gridStyle}>{data.price}</Card.Grid>
            </Card>
          </div>
        </>
      ))}
    </div>
     
    </>
  );
};

export default ProductCard;
