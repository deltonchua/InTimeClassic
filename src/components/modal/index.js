import { hideModal } from './utils';
import Close from '../../icons/Close';
import styles from './Modal.module.scss';

const Modal = ({ id, title, Content }) => {
  return (
    <div
      id={id}
      className={styles['overlay']}
      onClick={(e) => {
        if (e.target.id === id) hideModal(id);
      }}
    >
      <div className={styles['modal']}>
        <header>
          <h3>{title}</h3>
          <button onClick={() => hideModal(id)} title='Close'>
            <Close />
          </button>
        </header>
        <div className={styles['body']}>{Content && <Content />}</div>
      </div>
    </div>
  );
};

export default Modal;
