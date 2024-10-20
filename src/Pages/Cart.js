import React from 'react';
import { Button, Container, Col, Row, Table } from 'react-bootstrap';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';
import { useCart } from 'react-use-cart';
import { BsCartCheck, BsCartX } from 'react-icons/bs';
const Cart = () => {
    const [theme] = useThemeHook()
    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    return (
        <Container>
            <h1 className={`${theme? 'text-light':"text-light-primary"} my-5 text-center`}>
                {isEmpty? 'Your cart is empty':"The Cart"}
            </h1>
            <Row className='justify-content-center'>
                <Table responsive = "sm" striped bordered hover variant={theme?'dark':"light"} className='mb-5'>
                    <tbody>
                        {items.map((item, index)=>{
                            return (
                                <tr key={index}>
                                    <td>
                                        <div style={{background:'white', height:"8rem",overflow:"hidden", display:"flex",
                                                justifyContent:'center', alignItems:'center'}}>
                                              <div style={{padding:'5rem'}}>
                                                    <img src={item.image} style={{width:'4rem'}} alt={item.title}/>
                                              </div>      
                                        </div>
                                    </td>
                                    <td>
                                        <h6 style={{whiteSpace: "nowrap", width:'14rem', overflow:'hidden', textOverflow:'ellipsis'}}> {item.title}
                                            {item.title}
                                        </h6>
                                    </td>
                                    <td>
                                        Rs. {item.price}
                                    </td>
                                    <td>
                                        Quantity({item.quantity})
                                    </td>
                                    <td>
                                        <Button onClick={()=>updateItemQuantity(item.id, item.quantity-1)} className='ms-2'>-</Button>
                                        <Button onClick={()=>updateItemQuantity(item.id, item.quantity+1)} className='ms-2'>+</Button>
                                        <Button onClick={()=>removeItem(item.id)} className='ms-2 btn btn-danger'>Remove Item</Button>

                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                {!isEmpty&&
                    <Row
                        style={{position:'fixed', bottom:0}}
                        className={`${theme? "bg-light-black text-light":"bg-light text-black"} justify-content-center w-100`}                    
                    >
                        <Col className='py-2'>
                            <h4>
                                Total Price: Rs. {cartTotal}
                            </h4>
                        </Col>
                        <Col className='p-0'md={4}>
                            <Button
                                variant='danger'
                                className='m-2'
                                onClick={() => emptyCart()}
                            >
                                <BsCartX size='1.7rem'/>
                                Clear Cart
                            </Button>
                            <Button
                                variant='success'
                                className='m-2'
                            >
                                <BsCartCheck size='1.7rem'/>
                                Pay All
                            </Button>
                        </Col>
                    </Row>
                }
            </Row>
        </Container>
    );
};

export default Cart;