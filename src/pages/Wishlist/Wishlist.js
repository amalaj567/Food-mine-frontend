import React from 'react';
import { Link } from 'react-router-dom';
import Price from '../../components/Price/Price';
import Title from '../../components/Title/Title';
import { useWishlist } from '../../hooks/useCart';
import classes from './cartPage.module.css';
import NotFound from '../../components/NotFound/NotFound';
export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  return (
    <>
      <Title title="Wishlist Page" margin="1.5rem 0 0 2.5rem" />

      {wishlist.length === 0 ? (
        <NotFound message="Wishlist Page Is Empty!" />
      ) : (
        <div className={classes.container}>
          <ul className={classes.list}>
            {wishlist.map(item => (
              <li key={item.food.id}>
                <div>
                  <img src={`${item.food.imageUrl}`} alt={item.food.name} />
                </div>
                <div>
                  <Link to={`/food/${item.food.id}`}>{item.food.name}</Link>
                </div>

                <div>
                  <Price price={item.food.price} />
                </div>

                <div>
                  <button
                    className={classes.remove_button}
                    onClick={() => removeFromWishlist(item.food.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

