import { IconX } from "@tabler/icons-react";
import s from './Message.module.css';

const Message = ({text, status, toggleMessage}) => {
    return (
        <p className={!status? s.error : s.success }>
            {text} <IconX width={20} height={20} onClick={toggleMessage} />
        </p>
    )
};

export default Message;