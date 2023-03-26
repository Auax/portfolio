import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export const useSectionController = (initialIdx) => {
    // React Router's navigate hook
    const navigate = useNavigate();
    const [section,setSection] = useState("")
    const [idx, setIdx] = useState(initialIdx || 0);

    const updateSection = (name, idx) => {
        if (name === undefined) return;
        setSection(name);
        setIdx(idx);
    };

    useEffect(() => {
        navigate(`#${section}`);
    }, [section])

    return [idx, updateSection];
}