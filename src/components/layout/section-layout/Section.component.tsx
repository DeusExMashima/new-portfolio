import { Title } from "../title/Title.component"

export const Section:React.FC<{ children: React.FC, text: string}> = ({ children, text }) => {

    return (
        <section>
            <Title text={ text }/>
            { children }
        </section>
    )
};
