import React, {useState, useEffect} from 'react'
import axios from 'axios'

const CommentList = ({comments}) => {
    const renderedComments = comments.map(comment => {
        let content;
        console.log("comment: ",comment)
        if(comment.status === 'approved'){
            content = comment.content;
        }
        if(comment.status === 'pending'){
            content = 'The comment is awaiting moderation';
        }
        if(comment.status === 'rejected'){
            content = 'The comment has been rejected';
        }

        return <li key={comment.id}>{comment.content} </li>
    })
    
    return <ul>{renderedComments}</ul>;
};

export default CommentList;