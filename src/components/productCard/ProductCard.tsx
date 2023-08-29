import styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';

// interface productDataObject {
//   product: {};
// }

export function ProductCard({ product }: any) {
  const productDataObject = {
    name: `${product.masterData.current.name.en}`,
    imageURL: `${product.masterData.current.masterVariant.images[0].url}`,
    price: 345,
    productId: '85574',
    brand: 'Coton',
    color: 'green',
    size: 'L',
    description: 'bla bla bla',
    categorie: 'clothes',
    subcategorie: 'sjhskjvskjnvs',
    currency: 'USD',
    discount: '-10%',
  };

  const cartHandler = () => {
    console.log('добавить товар в корзину');
  };
  return (
    <Link className={styles.link} to="/productItem">
      <div className={styles.container}>
        <h2 className={styles.title}>{productDataObject.name}</h2>
        <div className={styles.topWrapper}>
          <span className={styles.topProps}>{`Brand: ${productDataObject.brand}`}</span>
          <span className={styles.topProps}>{`Size: ${productDataObject.size}`}</span>
        </div>
        <div className={styles.imgContainer}>
          <img src={productDataObject.imageURL} alt="фото товара" className={styles.imgCard}></img>
          <span className={styles.discount}>{productDataObject.discount}</span>
        </div>
        <h2 className={styles.price}>{`${productDataObject.price} ${productDataObject.currency}`}</h2>
        <ul className={styles.optionsList}>
          <li className={styles.options}>{`Color: ${productDataObject.color}`}</li>
          <li className={styles.options}>{`Cat: ${productDataObject.categorie}/ Subcat: ${
            productDataObject.subcategorie || '-'
          }`}</li>
        </ul>
        <Link className={styles.link} to="/basket">
          <button className={styles.btn} onClick={cartHandler}>
            add to <img className={styles.iconsvg} src="/cart.svg" alt="cart" />
          </button>
        </Link>
      </div>
    </Link>
  );
}
