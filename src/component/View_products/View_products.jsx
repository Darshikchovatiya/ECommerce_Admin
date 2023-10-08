import React, { useEffect, useState } from 'react'
import { Button, Container, Form, Row, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Deleteproduct, GetproductsAsync, Singleproduct } from '../../service/Action/Product_action';
import { useNavigate } from 'react-router';
import '../View_products/View_products.css'


function View_products() {


    const { products, stock } = useSelector(state => state.productRe);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const allData = () => {
        dispatch(GetproductsAsync());
    }

    const handleEdit = async (id) => {
        // console.log(id,"id");
        await dispatch(Singleproduct(id));
        navigate('/edit_product');
    }

    const handleDelete = async (id) => {
        // console.log(id,"id");
        await dispatch(Deleteproduct(id));
    }


    useEffect(() => {
        allData()
    }, [])



    return (
        <>
            <Container>
                <Row>
                    <Table striped bordered hover className='mt-4'>
                        <thead>
                            <tr>
                                <th>image</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Discount Per</th>
                                <th>Rating</th>
                                <th>Brand</th>
                                <th>Category</th>
                                <th>Sub Category</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((prod) => {
                                    return (
                                        <tr>
                                            <td>
                                                <div style={{ width: "100px", height: "100px" }}>
                                                    <img src={prod.thumbnail} alt="img" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                                </div>
                                            </td>
                                            <td>{prod.title}</td>
                                            <td>${prod.price}</td>
                                            <td>{prod.discountPercentage}%</td>
                                            <td>{prod.rating}</td>
                                            <td>{prod.brand}</td>
                                            <td>{prod.category}</td>
                                            <td>{prod.sub_category}</td>
                                            <td>{prod.description}</td>
                                            <td>
                                                <Button onClick={() => handleEdit(prod.id)}>Edit</Button>
                                                <Button onClick={() => handleDelete(prod.id)} className='btn-danger mt-2'>Delete</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </Row>
            </Container>
        </>
    )
}

export default View_products;