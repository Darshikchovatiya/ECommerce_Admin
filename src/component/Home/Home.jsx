import React, { useEffect } from 'react'
import { Card, Container, Row } from 'react-bootstrap';
import '../Home/Home.css'
import { useDispatch, useSelector } from 'react-redux';
import { GetproductsAsync } from '../../service/Action/Product_action';

function Home() {

    const {products} = useSelector(state => state.productRe)
    const dispatch = useDispatch();


    const allData = () => {
        dispatch(GetproductsAsync());
    }


    useEffect(() => {
        allData()
    }, [])

    return (
        <>
            <Container>
                <Row>
                    <Card style={{ width: '18rem' }} className='mt-4 me-3'>
                        <Card.Body>
                            <Card.Title>Total Products</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{products.length}</Card.Subtitle>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} className='mt-4'>
                        <Card.Body>
                            <Card.Title>Out of Stock</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{0}</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    )
}

export default Home;