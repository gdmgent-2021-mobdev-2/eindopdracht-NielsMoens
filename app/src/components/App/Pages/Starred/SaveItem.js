import Button from "../../../Design/Button";
import {useAuth} from "../../../Auth/AuthProvider";
import useAuthApi from "../../../../core/hooks/useAuthApi";
import {createStarredItems, deleteStarredItemsByProjectId} from "../../../../core/modules/StarredProject/api";
import {useStarredProjects} from "../../MainRouting";

const SaveItem = ({ project, onUpdate }) => {
    const withAuth = useAuthApi();
    const {user} = useAuth();
    const {starredItems, setStarredItems} = useStarredProjects();

    // special thanks to kobeDev for helping me with this part
    const toggleStarItem = () =>{
        let collection = starredItems;
        if(starredItems.some((p) => p.projectId === project._id )) {
            collection = collection.filter((starred) => {
                if(starred.project._id === project._id) {
                    deleteStarredItemsByProjectId(project._id, user)
                }
                return starred.projectId !== project._id
            });
            setStarredItems(collection);
        }else {
            withAuth(createStarredItems({
                projectId: project._id,
                name: project.name
            }))
            .then(() => {
                collection.push({
                    projectId: project._id,
                    project:{
                    ...project,
                        }
                    })
                    setStarredItems(collection);
                }
            )
        }
    }
    if(starredItems.some((p) => p.projectId === project._id )){
        return <Button onClick={toggleStarItem}>❌</Button>
    } else {
        return <Button onClick={toggleStarItem}>⭐</Button>
    }



}
export default SaveItem;