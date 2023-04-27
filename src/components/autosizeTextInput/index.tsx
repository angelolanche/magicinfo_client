import { useCallback, useEffect, useRef, useState } from 'react';
import { StyledTextarea, StyledDiv } from './style'
import useAutosizeTextArea from './useAutosizetextArea';

type Props = {
    id: string;
    placeholder: string;
    register: any;
    maxRows: number;
};

const TextAreaAutosize = ({ id, placeholder, register, maxRows }: Props) => {
    const [value, setValue] = useState("");
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useAutosizeTextArea(textAreaRef.current, value);

    const handleChange = useCallback((evt: React.ChangeEvent<HTMLTextAreaElement>) => {
        const val = evt.target?.value;

        if (maxRows) {
            const numLines = val.split(/\n|\r/).length;
            if (numLines > maxRows) {

                evt.preventDefault();
                return;
            }
            else {

                setValue(val);
            }

        }

    }, [maxRows])

    return (
        <StyledTextarea
            {...register(id, { required: false })}
            id={id}
            rows={1}
            value={value}
            ref={textAreaRef}
            placeholder={placeholder}
            onChange={handleChange}
        />
    );
};
export { TextAreaAutosize };
