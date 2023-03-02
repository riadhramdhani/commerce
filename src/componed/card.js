import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Example from './modalupdate';


function Product({card}) {
  return (
    <Card style={{ width: '18rem' }}>
            {console.log(card)}

      <Card.Img variant="top" src={card.imageUrl} alt="" />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Title>{card.namee}</Card.Title>
        <Card.Text>
          {card.body}
        </Card.Text>
        <Card.Text>
          {card.created_at}
        </Card.Text>
      </Card.Body>
      
      
      <Example card= {card}/>
    </Card>
  );
}

export default Product;