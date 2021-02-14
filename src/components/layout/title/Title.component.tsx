
export const Title: React.FC<{titleText: string}> = ({ titleText }) => {

    return (
            <h3 className={`text-center title ${titleText}`} id={`title-${titleText}`}>
                { titleText }
            </h3>
    )
};
