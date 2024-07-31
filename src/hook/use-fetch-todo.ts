import { useEffect, useState } from "react";

const useFetchTodo = (): any => {
    const [value, setValue] = useState();

    useEffect(() => {
        fetch('https://dummyjson.com/todos')
            .then((res) => res.json())
            .then((res) => setValue(res))
    }, [])

    return value;
}

export { useFetchTodo }