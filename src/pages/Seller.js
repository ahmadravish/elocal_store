import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSeller } from '../action';

const Seller = ({ getSeller, loading, seller }) => {
  React.useEffect(() => {
    getSeller();
  }, [getSeller]);

  if (loading && !seller) return <h2 className='section-title'>loading...</h2>;

  const { otherSellerList } = seller;

  if (!otherSellerList) return <h2 className='section-title'>loading...</h2>;

  const sellerList = otherSellerList.map((item) => {
    return item.sellerDetails.sellerResources.map((item) => {
      return item.resourceURL;
    });
  });
  console.log(sellerList);
  return (
    <section className='section'>
      <h2 className='section-title'>Sellers</h2>
      <ul className='products'>
        <table class='table table-borderless'>
          <thead>
            <tr>
              <th scope='col'>seller information</th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <th scope='col'>Seller Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>
                {otherSellerList.map((item) => {
                  return item.sellerDetails.sellerResources.map((item) => {
                    return (
                      <li key={item.id} className='product'>
                        <img src={item.resourceURL} alt='img' />
                      </li>
                    );
                  });
                })}
              </th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                {otherSellerList.map((item) => {
                  return (
                    <li key={item.id} className='product'>
                      {item.sellerDetails.name}
                      <br />
                      <b>Adress:</b>
                      <p> {item.sellerDetails.address}</p>
                    </li>
                  );
                })}
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                {' '}
                {otherSellerList.map((item) => {
                  return (
                    <li key={item.id} className='product'>
                      <p> {item.sellerPrice}</p>
                    </li>
                  );
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </ul>
    </section>
  );
};

Seller.propTypes = {
  loading: PropTypes.bool.isRequired,
  seller: PropTypes.objectOf(PropTypes.object).isRequired,
  getSeller: PropTypes.func.isRequired,
};
const mapStateToProps = ({ sellerState: { seller, loading } }) => {
  return { loading, seller };
};
export default connect(mapStateToProps, { getSeller })(Seller);
