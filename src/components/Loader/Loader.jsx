import s from './Loader.module.css';

const Loader = () => {
    return (
        <div className={s.overlay}>
            <div className={s.loader}></div>
        </div>
    )
};

export default Loader;