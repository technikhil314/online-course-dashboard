import { useEffect, useState } from "react";

export default function useCallApi({ url }) {
    const [state, setState] = useState({
        error: null,
        data: null,
        loading: true
    });
    useEffect(() => {
        const doFetch = async () => {
            try {
                const res = await fetch(url);
                const json = await res.json();
                setState({ data: json, loading: false, error: false });
            } catch (err) {
                setState({ data: null, loading: false, error: err });
            }
        }
        doFetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return state;
};
