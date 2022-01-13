import { Button} from "react-bootstrap";
export default function DeleteButton(props){

    const deleteLink = () => {
        props.onDeleteLink()
    }
    
    return (
        <>
        <Button variant="danger" onClick={deleteLink}>Delete All!</Button>
        </>
    )
}