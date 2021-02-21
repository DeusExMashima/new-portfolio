import { Card, ListGroup } from "react-bootstrap";

export const UserStory: React.FC<{ userStory: UserStory}> = ({ userStory }) => {
    
    return (
        <Card className={`us-card m-2 shadow`} border="light">
            <Card.Header className={`us-card-header us-${userStory.code}`}><h4>{ userStory.name }</h4></Card.Header>
                <ListGroup variant="flush">
                    {
                        userStory.stories.map((story: Story) => (<ListGroup.Item key={story.id}>I want to { story.text }</ListGroup.Item>))
                    }
                </ListGroup>
        </Card>
    );
};