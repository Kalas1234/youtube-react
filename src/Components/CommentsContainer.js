import React from 'react'
import { commentData } from '../constants';
import Comment from './Comments';

const CommentsContainer = () => {

    return (
        <div className='m-5 p-5'>
            <h1 className='text-2xl font-bold'>Comments: </h1>
            <CommentList comments = {commentData} />
        </div> 
    )
}

//recursion in coomponent
const CommentList = ({comments})=>{
   return(
    <div>
   {comments.map((comment, index)=>(

    <div key={index}>
    <Comment data  = {comment} />
    <div className='pl-5 ml-5 border border-l-black'>
         <CommentList comments={comment.replies} />
        </div>
        </div>
    
   ))}


    </div>
   )


}
export default CommentsContainer;