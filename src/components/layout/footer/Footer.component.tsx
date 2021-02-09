export const Footer = () => {

    const d = new Date()
    const year = d.getFullYear()

    return (
        <>
            <footer>
                <p>Copyright &copy; { year } Mashima Buttton</p>
            </footer>
        </>
    )
};
