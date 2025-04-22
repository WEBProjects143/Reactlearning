import VideoUpload from "../VideoUpload";
import CommentSection from "../CommentSection/CommentSection";
const Home=()=>{
    const dummyComments = [
        { id: 1, user: 'Alice', text: 'Nice video!' },
        { id: 2, user: 'Bob', text: 'Loved it 👏' },
      ];
    return(
        <div>
            <VideoUpload/>
            <CommentSection comments={dummyComments}/>
        </div>
    )
}
export default Home