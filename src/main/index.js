import React from 'react';
import './index.css';
import axios from 'axios';


function MainPage(){
    const [produtcs, setProducts] = React.useState([]);
    React.useEffect(
        function(){
            axios
            .get("https://deb5b2f1-79ce-4219-ab8b-53d9fe9f558b.mock.pstmn.io/products")
            .then(function(reseult){
                const products = reseult.data.products;
                setProducts(products);
            }).catch(function(error){
                console.error("에러 발생", error);
            });
        } ,[]);
            
        return (
            <div>
                <div id="header">
                    <div id="header-area">
                        <img src="images/icons/logo.png" />
                    </div>
                </div>
                <div id="body">
                    <div id="banner">
                        <img src="images/banners/banner1.png" />
                    </div>
                    <h1>판매되는 상품들</h1>
                    <div id="product_list">
                        {produtcs.map(function(product, index){
                            return (
                            <div className='product-card'>
                                <div>
                                    <img className='product-img' src={product.imageUrl}/>
                                </div>
                                <div className='product-contents'>
                                    <span className='product-name'>{product.name}</span>
                                    <span className='product-price'>{product.price}</span>
                                    <div className='product-seller'>
                                        <img className='product-avatar' src='images/icons/avatar.png'/>
                                        <span>{product.seller}</span>
                                    </div>
                                </div>
                            </div>
                            );
                        })}
                    </div>
                </div>
            <div id="footer"></div>
            </div>
    );
}

export default MainPage;