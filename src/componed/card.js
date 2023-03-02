import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Example from './modalupdate';
import axios from "axios"
import Button from 'react-bootstrap/Button';


function Product({card}) {
  const deleteproduct=(id) =>{
    axios.delete("http://192.168.3.202:3333/api/deletepost/"+id)
    .then((res)=>{Set.data(res)})
  }
  return (
    <Card className='CA' style={{ width: '18rem' }}>
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
      <Button  onClick={()=>deleteproduct(card.id)}>
        Delete
      </Button>
      
    </Card>
  );
}

export default Product;