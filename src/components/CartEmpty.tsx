import React from 'react';
import { Link } from 'react-router-dom';
const CartEmpty: React.FC = () => {
  return (
    <>
      <div className="cart cart--empty">
        <h2>
          Корзина пустая <span>😕</span>
        </h2>
        <p>
          Вероятней всего, вы не заказывали ещё кроссовки.
          <br />
          Для того, чтобы заказать кроссовки, перейди на главную страницу.
        </p>
        <img
          src="https://react-pizza-v2.vercel.app/static/media/empty-cart.db905d1f4b063162f25b.png"
          alt="Empty cart"
        />
        <Link to="/" className="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </>
  );
};

export default CartEmpty;
