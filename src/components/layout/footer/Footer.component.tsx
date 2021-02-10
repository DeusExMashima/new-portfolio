export const Footer = () => {

    const d = new Date()
    const year = d.getFullYear()

    return (
        <>
            <footer>
                <p>Copyright { year } &copy; Mashima Buttton</p>
            </footer>
        </>
    )
};
