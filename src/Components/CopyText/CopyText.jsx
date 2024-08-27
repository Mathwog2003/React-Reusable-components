import React, { useState } from "react";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const CopyText = ({text}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1500);
    };
    return (
        <>
            <button
                className="copy-btn"
                onClick={() => handleCopy(text)}
            >
                {copied ? (
                    <ContentCopyIcon sx={{ color: 'primary.main', fontSize: 15, animation: 'fadeOut 1.5s' }} />
                ) : (
                    <ContentCopyIcon sx={{ color: 'inherit', fontSize: 15 }} />
                )}
            </button>
        </>
    )
}

export default CopyText
