import { IconX } from "@tabler/icons-react";
import s from './BookCarMessage.module.css';

const BookCarMessage = ({text, toggleMessage}) => {
    return (
        <p className={s.error}>
            {text} <IconX width={20} height={20} onClick={toggleMessage} />
        </p>
    )
};

export default BookCarMessage;