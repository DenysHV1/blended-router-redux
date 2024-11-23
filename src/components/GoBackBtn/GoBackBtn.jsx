import { Link } from 'react-router-dom';
import style from './GoBackBtn.module.css';

export const GoBackBtn = ({ path, children }) => {
  return (
    <Link className={style.link} to={path}>
      {children}
    </Link>
  );
};
