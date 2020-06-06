import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProducts } from '../action';
import Header from './Header';

const Products = ({ getProducts, loading, products }) => {
  React.useEffect(() => {
    getProducts();
  }, [getProducts]);

  if (loading) return <h2 className='section-title'>loading...</h2>;

  const {
    productDetail: {
      productName,
      productDescription,
      productKeyFeatures,
      productSpecification,
    } = {},
  } = products;

  const {
    productDetail: { productResources: [{ resourceURL } = URL] = [] } = {},
  } = products;
  const { productDetail: { variants: [{ mrp } = URL] = [] } = {} } = products;

  if (!productKeyFeatures && !productSpecification)
    return <h2 className='section-title'>loading...</h2>;

  return (
    <>
      <section className='single-product'>
        <img src={resourceURL} className='single-product-image' />
        <article>
          <h1>{productName}</h1>
          <ul>
            {productKeyFeatures.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
          <h2> ₹{mrp}</h2>
          <div className>
            <button className='bblock'>Buy Now</button>
            <button className='bblock'>add to cart</button>
          </div>
        </article>
      </section>
      <br />
      <div className='container'>
        <br />
        <ul class='nav nav-tabs' role='tablist'>
          <li class='nav-item'>
            <a class='nav-link active' data-toggle='tab' href='#home'>
              Specifications
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' data-toggle='tab' href='#menu1'>
              Description
            </a>
          </li>
        </ul>
        <div class='tab-content'>
          <div id='home' class='container tab-pane active'>
            <br />
            <ul>
              {Object.entries(productSpecification).map((item) => {
                return (
                  <li>
                    {item[0]}: {item[1]}
                  </li>
                );
              })}
            </ul>
          </div>
          <div id='menu1' class='container tab-pane fade'>
            <br />
            <p>{productDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
};

Products.propTypes = {
  loading: PropTypes.bool.isRequired,
  products: PropTypes.objectOf(PropTypes.object).isRequired,
  getProducts: PropTypes.func.isRequired,
};
const mapStateToProps = ({ productState: { products, loading } }) => {
  return { loading, products };
};
export default connect(mapStateToProps, { getProducts })(Products);
