import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/category';
import '../styles/categories.css';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories);
  const checkForStatus = () => {
    dispatch(checkStatus());
  };
  return (
    <div className="categoriesPage">
      <p>{status}</p>
      <button type="button" onClick={checkForStatus} className="checkStatus">
        CHECK STATUS
      </button>
    </div>
  );
};

export default Categories;
