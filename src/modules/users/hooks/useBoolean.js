import { useCallback, useState } from 'react';

export default function useBoolean(defaultValue = false) {
    const [value, setValue] = useState(defaultValue);

    const toggle = useCallback(
        (newValue) => {
            setValue((value) => {
                if (newValue === undefined) {
                    newValue = !value;
                }

                return newValue;
            });
        },
        [setValue]
    );

    return [value, toggle];
}