
export const Title: React.FC<{titleText: string}> = ({ titleText }) => {

    return (
            <h2 className={`text-primary text-center title ${titleText}`} id={`title-${titleText}`}>
                { titleText }
            </h2>
    )
};



