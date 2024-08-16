import { Card } from 'antd';

const { Meta } = Card;


const ProductCard = ({products}) => {
    const {
        productName,
        brandName,
        productImage,
        description,
        price,
        category,
        ratings,

        productCreationDate,
    } = products
    const gridStyle= {
        width: '33%',
        
        textAlign: 'center',
      };
    return (
        
        <Card
        hoverable
        style={{ width: 300 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
        <Meta title="Europe Street beat" description="www.instagram.com" />
        <Card.Grid style={gridStyle}></Card.Grid>
        <Card.Grid style={gridStyle}></Card.Grid>
        <Card.Grid style={gridStyle}></Card.Grid>
      </Card>
    );
};

export default ProductCard;