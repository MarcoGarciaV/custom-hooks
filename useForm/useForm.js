import { useState } from 'react';

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }) => {
        const { name, value} = target;
        setFormState({
            ...formState,
            [ name ] : value //[name] se refiere al atributo name del input
        });
    }

    const onResetForm= () => {
        setFormState(initialForm);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
