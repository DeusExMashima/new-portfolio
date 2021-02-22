export const Footer = () => {

    const d = new Date()
    const year = d.getFullYear()

    return (
        <>
            <footer className="footer text-center text-white bg-info m-0 p-1">
                <p>Copyright { year } &copy; Mashima Buttton</p>
            </footer>
        </>
    )
};
