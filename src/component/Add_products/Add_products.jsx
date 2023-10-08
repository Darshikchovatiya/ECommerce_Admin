import React, { useState } from 'react'
import '../Add_products/Add_products.css'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { FaPlus, FaTrashAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { AddproductsAsync } from '../../service/Action/Product_action';
import { useNavigate } from 'react-router';
import validator from 'validator'



function Add_products() {

    const category_D = [
        {
            CategoryName: 'electronics',
            sub_categoryD: [
                {
                    Sub_categoryName: 'smartphones'
                },
                {
                    Sub_categoryName: 'laptops'
                }
            ]
        },
        {
            CategoryName: 'beauty and health',
            sub_categoryD: [
                {
                    Sub_categoryName: 'skincare'
                }
            ]
        },
        {
            CategoryName: 'fashion',
            sub_categoryD: [
                {
                    Sub_categoryName: 'tops'
                },
                {
                    Sub_categoryName: 'womens-dresses'
                },
                {
                    Sub_categoryName: 'womens-shoes'
                },
                {
                    Sub_categoryName: 'mens-shirts'
                },
                {
                    Sub_categoryName: 'mens-shoes'
                },
                {
                    Sub_categoryName: 'mens-watches'
                },
                {
                    Sub_categoryName: 'womens-watches'
                },
                {
                    Sub_categoryName: 'womens-bags'
                },
                {
                    Sub_categoryName: 'womens-jewellery'
                }
            ]
        },
        {
            CategoryName: 'home_decor',
            sub_categoryD: [
                {
                    Sub_categoryName: 'home-decoration'
                }
            ]
        },
        {
            CategoryName: 'home & kitchen',
            sub_categoryD: [
                {
                    Sub_categoryName: 'groceries'
                }
            ]
        }
    ]

    const [Category, setCategory] = useState('--Category');
    const [SubCategory, setSubCategory] = useState('--SubCategory');
    const [sub_Category, setSub_Category] = useState([]);

    const [validated, setValidated] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();



    const [inputVal, setInputVal] = useState({
        title: '',
        description: '',
        price: '',
        discountPercentage: '',
        rating: '',
        thumbnail: '',
        img1: '',
        img2: '',
        img3: '',
        img4: '',
        brand: '',
    })


    const handleChange = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        setInputVal({ ...inputVal, [name]: value });

    }

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        setSub_Category(category_D.find(ctr => ctr.CategoryName === e.target.value).sub_categoryD)
    }

    const handleSubCategoryChange = (e) => {
        setSubCategory(e.target.value);
    }


    const handleProductAdd = async (e) => {
        let form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        setValidated(true);

        e.preventDefault();

        let pro_data = { ...inputVal, category: Category, sub_category: SubCategory };
        // console.log(pro_data, "pro_data");

        if (pro_data.category != "--Category" && pro_data.sub_category != "--SubCategory") {
            // Category
            let cate_form = document.getElementById('form_cate');
            let formcate = document.getElementById('formcate');

            cate_form.classList.remove('cateInvalid');
            formcate.classList.remove('cate_InValid');

            // SubCategory
            let formSubca = document.getElementById('formsubca');
            let form_Subca = document.getElementById('form_subca');

            form_Subca.classList.remove('cateInvalid');
            formSubca.classList.remove('cate_InValid');



            // Images
            // img-1
            let form_Img1 = document.getElementById('formImg1');
            let formimg1 = document.getElementById('form_img1');

            if (validator.isURL(pro_data.img1)) {
                formimg1.classList.remove('cateInvalid');
                form_Img1.classList.remove('cate_InValid');
                setErrorMessage('');
            } else {
                formimg1.classList.add('cateInvalid');
                form_Img1.classList.add('cate_InValid');
                setErrorMessage('Is Not Valid URL');
            }

            // img-2
            let form_Img2 = document.getElementById('formImg2');
            let formimg2 = document.getElementById('form_img2');

            if (validator.isURL(pro_data.img2)) {
                formimg2.classList.remove('cateInvalid');
                form_Img2.classList.remove('cate_InValid');
                setErrorMessage('');
            } else {
                formimg2.classList.add('cateInvalid');
                form_Img2.classList.add('cate_InValid');
                setErrorMessage('Is Not Valid URL');
            }

            // img-3
            let form_Img3 = document.getElementById('formImg3');
            let formimg3 = document.getElementById('form_img3');

            if (validator.isURL(pro_data.img3)) {
                formimg3.classList.remove('cateInvalid');
                form_Img3.classList.remove('cate_InValid');
                setErrorMessage('');
            } else {
                formimg3.classList.add('cateInvalid');
                form_Img3.classList.add('cate_InValid');
                setErrorMessage('Is Not Valid URL');
            }

            // img-4
            let form_Img4 = document.getElementById('formImg4');
            let formimg4 = document.getElementById('form_img4');

            if (validator.isURL(pro_data.img4)) {
                formimg4.classList.remove('cateInvalid');
                form_Img4.classList.remove('cate_InValid');
                setErrorMessage('');
            } else {
                formimg4.classList.add('cateInvalid');
                form_Img4.classList.add('cate_InValid');
                setErrorMessage('Is Not Valid URL');
            }

            // thumbnail img
            let form_Thumb = document.getElementById('formThumb');
            let formthumb = document.getElementById('form_thumb');

            if (validator.isURL(pro_data.thumbnail)) {
                formthumb.classList.remove('cateInvalid');
                form_Thumb.classList.remove('cate_InValid');
                setErrorMessage('');
            } else {
                formthumb.classList.add('cateInvalid');
                form_Thumb.classList.add('cate_InValid');
                setErrorMessage('Is Not Valid URL');
            }


            if (pro_data.title != "" && pro_data.description != "" && pro_data.price != "" && pro_data.discountPercentage != "" && pro_data.rating != "" && pro_data.thumbnail != "" && pro_data.img1 != "" && pro_data.img2 != "" && pro_data.img3 != "" && pro_data.img4 != "" && pro_data.brand != "") {


                await dispatch(AddproductsAsync(pro_data));
                navigate('/view_product');
            }
        }
        else {
            // Category
            let cate_form = document.getElementById('form_cate');
            let formcate = document.getElementById('formcate');

            cate_form.classList.add('cateInvalid');
            formcate.classList.add('cate_InValid');

            // SubCategory
            let formSubca = document.getElementById('formsubca');
            let form_Subca = document.getElementById('form_subca');

            form_Subca.classList.add('cateInvalid');
            formSubca.classList.add('cate_InValid');


            // Images
            // img-1
            let form_Img1 = document.getElementById('formImg1');
            let formimg1 = document.getElementById('form_img1');

            if (validator.isURL(pro_data.img1)) {
                formimg1.classList.remove('cateInvalid');
                form_Img1.classList.remove('cate_InValid');
                setErrorMessage('');
            } else {
                formimg1.classList.add('cateInvalid');
                form_Img1.classList.add('cate_InValid');
                setErrorMessage('Is Not Valid URL');
            }

            // img-2
            let form_Img2 = document.getElementById('formImg2');
            let formimg2 = document.getElementById('form_img2');

            if (validator.isURL(pro_data.img2)) {
                formimg2.classList.remove('cateInvalid');
                form_Img2.classList.remove('cate_InValid');
                setErrorMessage('');
            } else {
                formimg2.classList.add('cateInvalid');
                form_Img2.classList.add('cate_InValid');
                setErrorMessage('Is Not Valid URL');
            }

            // img-3
            let form_Img3 = document.getElementById('formImg3');
            let formimg3 = document.getElementById('form_img3');

            if (validator.isURL(pro_data.img3)) {
                formimg3.classList.remove('cateInvalid');
                form_Img3.classList.remove('cate_InValid');
                setErrorMessage('');
            } else {
                formimg3.classList.add('cateInvalid');
                form_Img3.classList.add('cate_InValid');
                setErrorMessage('Is Not Valid URL');
            }

            // img-4
            let form_Img4 = document.getElementById('formImg4');
            let formimg4 = document.getElementById('form_img4');

            if (validator.isURL(pro_data.img4)) {
                formimg4.classList.remove('cateInvalid');
                form_Img4.classList.remove('cate_InValid');
                setErrorMessage('');
            } else {
                formimg4.classList.add('cateInvalid');
                form_Img4.classList.add('cate_InValid');
                setErrorMessage('Is Not Valid URL');
            }

            // thumbnail img
            let form_Thumb = document.getElementById('formThumb');
            let formthumb = document.getElementById('form_thumb');

            if (validator.isURL(pro_data.thumbnail)) {
                formthumb.classList.remove('cateInvalid');
                form_Thumb.classList.remove('cate_InValid');
                setErrorMessage('');
            } else {
                formthumb.classList.add('cateInvalid');
                form_Thumb.classList.add('cate_InValid');
                setErrorMessage('Is Not Valid URL');
            }

        }
    }


    return (
        <>
            <div className="container" style={{ marginTop: "28px" }}>
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col-sm mb-2 mb-sm-0">
                            <h1 className="page-header-title">Add Product</h1>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <Form noValidate validated={validated} onSubmit={handleProductAdd}>
                        <div className="col-lg-10 mb-3 mb-lg-0" style={{ margin: "0 auto" }}>
                            <div className="card mb-3 mb-lg-5">
                                <div className="card-header">
                                    <h4 className="card-header-title">Product information</h4>
                                </div>


                                <div className="card-body">

                                    {/* Name */}
                                    <div className="mb-4">
                                        <label className="form-label">Name</label>
                                        <input type="text" className="form-control" name="title" placeholder="product name" value={inputVal.title} onChange={handleChange} required />
                                        <Form.Control.Feedback type="invalid">
                                            Please Enter Product Name
                                        </Form.Control.Feedback>
                                    </div>

                                    {/* Description */}
                                    <div className="mb-4">
                                        <label className="form-label">Description</label>
                                        <textarea className="form-control" name="description" placeholder='description' rows={4} style={{ resize: "none" }} value={inputVal.description} onChange={handleChange} required></textarea>
                                        <Form.Control.Feedback type="invalid">
                                            Please Enter Description
                                        </Form.Control.Feedback>
                                    </div>

                                    <Row className="mb-4">
                                        {/* Price */}
                                        <Form.Group as={Col}>
                                            <label className="form-label">Price</label>
                                            <div className="input-group">
                                                <InputGroup.Text>$</InputGroup.Text>
                                                <input type="number" className="form-control" name="price" placeholder="0.00" value={inputVal.price} onChange={handleChange} required />
                                                <Form.Control.Feedback type="invalid">
                                                    Please Enter Price
                                                </Form.Control.Feedback>
                                            </div>
                                        </Form.Group>

                                        {/* Discount Percentage */}
                                        <Form.Group as={Col}>
                                            <label className="form-label">Discount Percentage</label>
                                            <div className="input-group">
                                                <input type="number" className="form-control" name="discountPercentage" placeholder="12" value={inputVal.discountPercentage} onChange={handleChange} required />
                                                <InputGroup.Text>%</InputGroup.Text>
                                                <Form.Control.Feedback type="invalid">
                                                    Please Enter Discount
                                                </Form.Control.Feedback>
                                            </div>
                                        </Form.Group>

                                        {/* Rating */}
                                        <Form.Group as={Col}>
                                            <label className="form-label">Rating</label>
                                            <div className="input-group">
                                                <input type="number" className="form-control" name="rating" placeholder="4.2" value={inputVal.rating} onChange={handleChange} required />
                                                <Form.Control.Feedback type="invalid">
                                                    Please Enter Rating
                                                </Form.Control.Feedback>
                                            </div>
                                        </Form.Group>
                                    </Row>

                                    {/* Thumbnail Image */}
                                    <div className="mb-4">
                                        <label className="form-label">Thumbnail Image</label>
                                        <input type="text" className="form-control" name="thumbnail" placeholder="thumbnail image" id='formThumb' value={inputVal.thumbnail} onChange={handleChange} />
                                        <Form.Control.Feedback type="invalid" id='form_thumb'>
                                            {errorMessage}
                                        </Form.Control.Feedback>
                                    </div>

                                    {/* Images */}
                                    <div className="mb-4">
                                        <label className="form-label">Images</label>

                                        <div className='mb-3'>
                                            <input type="text" className="form-control" placeholder="images" name='img1' id='formImg1' value={inputVal.img1} onChange={handleChange} />
                                            <Form.Control.Feedback type="invalid" id='form_img1'>
                                                {errorMessage}
                                            </Form.Control.Feedback>
                                        </div>

                                        <div className='mb-3'>
                                            <input type="text" className="form-control" placeholder="images" name='img2' id='formImg2' value={inputVal.img2} onChange={handleChange} />
                                            <Form.Control.Feedback type="invalid" id='form_img2'>
                                                {errorMessage}
                                            </Form.Control.Feedback>
                                        </div>

                                        <div className='mb-3'>
                                            <input type="text" className="form-control" placeholder="images" name='img3' id='formImg3' value={inputVal.img3} onChange={handleChange} />
                                            <Form.Control.Feedback type="invalid" id='form_img3'>
                                                {errorMessage}
                                            </Form.Control.Feedback>
                                        </div>

                                        <div>
                                            <input type="text" className="form-control" placeholder="images" name='img4' id='formImg4' value={inputVal.img4} onChange={handleChange} />
                                            <Form.Control.Feedback type="invalid" id='form_img4'>
                                                {errorMessage}
                                            </Form.Control.Feedback>
                                        </div>

                                    </div>

                                    {/* Brand */}
                                    <div className="mb-4">
                                        <label className="form-label">Brand</label>
                                        <input type="text" className="form-control" name="brand" placeholder="brand" value={inputVal.brand} onChange={handleChange} required />
                                        <Form.Control.Feedback type="invalid">
                                            Please Enter Brand
                                        </Form.Control.Feedback>
                                    </div>

                                    {/* Category */}
                                    <div className="mb-4">
                                        <label className="form-label">Category</label>

                                        <Form.Select onChange={handleCategoryChange} value={Category} id='formcate' >
                                            {/* .form-control:invalid */}
                                            <option>Select Category</option>

                                            {
                                                category_D.map((cad) => {
                                                    // console.log(cad,"cad");
                                                    return (
                                                        <option value={cad.CategoryName} style={{ textTransform: "capitalize" }}>{cad.CategoryName}</option>
                                                    )
                                                })
                                            }

                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid" id='form_cate'>
                                            Please Select Category
                                        </Form.Control.Feedback>
                                    </div>

                                    {/* Sub Category */}
                                    <div className="mb-4">
                                        <label className="form-label">Sub Category</label>

                                        <Form.Select onChange={handleSubCategoryChange} value={SubCategory} id='formsubca' >

                                            <option>Select Sub Category</option>

                                            {
                                                sub_Category.map((sud) => {
                                                    // console.log(sud,"sud");
                                                    return (
                                                        <option value={sud.Sub_categoryName} style={{ textTransform: "capitalize" }}>{sud.Sub_categoryName}</option>
                                                    )
                                                })
                                            }

                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid" id='form_subca'>
                                            Please Select Subcategory
                                        </Form.Control.Feedback>
                                    </div>

                                    <Button type='submit' className="btn-primary mt-4">Add Product</Button>
                                </div>
                            </div>
                        </div>

                    </Form>
                </div>
            </div>
        </>
    )
}

export default Add_products;