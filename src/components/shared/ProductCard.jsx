import { Card } from "antd";
import PropTypes from "prop-types";
import { BiSolidCategory } from "react-icons/bi";
import { IoIosPricetag } from "react-icons/io";
import { PiShootingStarFill } from "react-icons/pi";
import { TbBrandAppgallery } from "react-icons/tb";
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
            <div key={data._id} className="">
              <Card
                hoverable
                style={{ width: 300 }}
                cover={
                  <img
                    className="h-52  bg-cover"
                    alt="example"
                    src={data.productImage}
                  />
                }
              >
                <div className="flex p-2 items-center gap-2">
                  <PiShootingStarFill />
                  <Meta  title={data.ratings} />
                  
                </div>
                <Meta className="p-2" description={data.description} />
                <Card.Grid style={gridStyle}>{data.productName}</Card.Grid>
                <Card.Grid style={gridStyle}>
                  <div className="flex items-center gap-2">
                    <TbBrandAppgallery /> {data.brandName}
                  </div>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <div className="flex items-center gap-2">
                    <BiSolidCategory /> {data.category}
                  </div>
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                  <div className="flex items-center gap-2">
                    <IoIosPricetag /> ${data.price}
                  </div>
                </Card.Grid>
              </Card>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

ProductCard.propTypes = {
  products: PropTypes.any,
};

export default ProductCard;
