import { Title } from "../../layout";
import { TITLE } from "../../../data"
import { UserStory } from "./user-story/UserStory.component";

export const UserStories: React.FC<{ myUserStories: UserStories}> = ({ myUserStories }) => {
    
    return (
        <section className="user-stories " id="user-stories">
            <Title titleText={ TITLE.MY_USER_STORIES }/>
            <div className="d-flex flex-wrap justify-content-center">
            {
                myUserStories.map((userStory: UserStory)=> (<UserStory userStory={ userStory }/>))
            }
            </div>
        </section>
    );
};