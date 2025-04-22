const CommentSection=({comments})=>{
    return(
        <>
        <div className="comment">
            <h3>comment</h3>
                <form className="comment_form">
                    <input type="text" placeholder="write a comment..."/>
                    <button>post</button>
                </form>
            <ul className="comment_list">
                {comments.map((c)=>(
                    <li className="" key={c.id}>
                        <strong>{c.user}</strong>
                        <p>{c.text}</p>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}
export default CommentSection