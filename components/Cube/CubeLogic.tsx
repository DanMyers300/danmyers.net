import { useRef } from 'react';

function CubeLogic() {
    const info = useRef<HTMLDivElement>(null);
    let isOpen = false;
    
    const hideCubeInfo = () => {
        if (info.current) {
            info.current.style.visibility = 'hidden';
            isOpen = false;
        }
    }

    const endCubeHover = () => {
        if (info.current) {
            if (!isOpen) {
                info.current.style.visibility = 'hidden';
            }
        }
    }

    const handleCubeHover = () => {
        if (info.current) {
            info.current.style.visibility = 'visible';
        }
    }

    const handleCubeClick = () => {
        if (info.current) {
            info.current.style.visibility = 'visible';
            isOpen = true;
            setTimeout(hideCubeInfo, 5000);
        }
    }
    return { handleCubeClick, handleCubeHover, endCubeHover, info }
}

export default CubeLogic;