import mbPic from "../../../../assets/mb/mb-pic.jpg";

export const AboutPic: React.FC<{}> = () => {

    return (
        <div className="about-pic m-2 shadow-lg bg-body rounded overflow-hidden" id="aboutPic">
           <img src={ mbPic } alt="Mashima Button's Picture" />
        </div>
    )
};
