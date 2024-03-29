import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "src/contexts/App.context";
import styles from "./category-item.module.scss";

const CategoryItem = (props) => {
  const { category } = props;
  const { trackNum, setTrackNum, name } = useContext(AppContext);

  const history = useHistory();

  console.log(name);

  const handleClick = () => {
    setTrackNum(trackNum + 1);
    history.push(`/shop/${category.routeName}`);
  };

  console.log(trackNum);

  return (
    <li className={styles.container} onClick={handleClick}>
      <div className={styles.wrapper}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${category.imageUrl})` }}
        />
        <div className={styles.content}>
          <div className={styles.title}>{category.title}</div>
          <div className="u-uppercase">shop now</div>
        </div>
      </div>
    </li>
  );
};

export default CategoryItem;
