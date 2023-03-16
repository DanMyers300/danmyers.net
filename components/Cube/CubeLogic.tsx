export default function CubeLogic() {
    if (typeof document !== 'undefined') { // Required by Typescript

        const cubeWrapper= document.getElementById('cubewrapper') as HTMLDivElement;
        const info = document.getElementById('cubeText') as HTMLDivElement;
        let isTextOpen = false;

        cubeWrapper?.addEventListener('click', () => {
            handleCubeClick();
        });

        const hideCube = () => {
            info.style.visibility = 'hidden';
            isTextOpen = false;
        }

        const handleCubeClick = () => {
            info.style.visibility = 'visible';
            isTextOpen = true;
            setTimeout(hideCube, 5000);
        }
        // Need to remove event listeners: https://nextjs.org/learn/foundations/from-javascript-to-react/adding-interactivity-with-state
        cubeWrapper?.addEventListener('mouseover', () => {info.style.visibility = 'visible';});
        cubeWrapper?.addEventListener('mouseout', () => {
            if (isTextOpen === false){info.style.visibility = 'hidden'};
        });
    }
}