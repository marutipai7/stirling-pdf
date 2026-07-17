import { useEffect } from "react";

export default function ExternalPdfLoader() {

    useEffect(() => {
        console.log("EXTERNAL PDF LOADER OPENED");
    }, []);

    return <div>Loading PDF...</div>;
}