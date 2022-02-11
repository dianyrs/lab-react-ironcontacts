import React from 'react';
const FirstCelebs = (props) => (
    <tr>
        <td><img src={props.pictureUrl} alt="celeb picture" width="40%" /></td>
        <td>{ props.name }</td>
        <td>{ props.popularity.toFixed(2) }</td>
        <td><button type="submit" className="button is-danger delete-button" onClick={props.clickToDelete}>Delete</button></td>
    </tr>
);
export default FirstCelebs;