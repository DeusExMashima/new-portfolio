import { Button, Modal } from "react-bootstrap";

export const ProjectModal: React.FC<{project: Project, showModal: boolean, setShowModal: any}> = ({ project, showModal, setShowModal }) => {

    return (
        <>
            <Modal
                show={ showModal }
                onHide={() => setShowModal(false)}
                id={`modal-${project.imageCode}`}
                area-labelledby={`modal-${project.imageCode}`}
                >
                <Modal.Header closeButton>
                    <Modal.Title>{ project.title }</Modal.Title>
                </Modal.Header>
                <Modal.Body>{ project.description }</Modal.Body>
                <Modal.Footer>
                    <Button href="" variant="info">GitHub Repo</Button>
                    <Button href="" variant="warning">Live Demo</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
};
