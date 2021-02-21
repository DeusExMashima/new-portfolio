
export const Title: React.FC<{titleText: string}> = ({ titleText }) => {

    return (
            <h2 className={`m-5 text-primary text-center title ${titleText}`} id={`title-${titleText}`}>
                { titleText }
            </h2>
    )
};



