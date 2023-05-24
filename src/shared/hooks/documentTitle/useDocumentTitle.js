import { useEffect } from "react";
export const useDocumentTitle = (title) => {

    useEffect(() => {
        document.title = ` BIRDEM :: ${title}`;
    }, [title]);

    return null;
}
