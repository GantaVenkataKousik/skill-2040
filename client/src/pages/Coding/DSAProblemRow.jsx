import React from 'react';

const DSAProblemRow = ({ questions }) => {
    return (
        <tbody>
            {questions.map((question, index) => (
                <tr key={index}>
                    <td>
                        <select>
                            <option value="in-progress">Not Tried</option>
                            <option value="not-visited">Completed</option>
                            <option value="visited">Tried</option>
                        </select>
                    </td>
                    <td>{question.Problem}</td>
                    <td>
                        <a href={question.URL} target="_blank"> <img src="https://play-lh.googleusercontent.com/ZI21NMObsjB7DbPU_EXRymHJL3HQpfsrB2N4CWb-diXm4xjl_13mmetYQZvcpgGf-64" alt="" /></a>
                    </td>
                    <td>
                        <a href='https://www.youtube.com/watch?v=h3uDCJ5mvgw&list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz' target="_blank">
                            <img src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png" alt="" />
                        </a>
                    </td>
                    <td>
                        <a href={question.URL2} target="_blank"> <img src="https://files.codingninjas.in/article_images/favicon-and-cherrypy-1-1660924366.webp" alt="" /></a>
                    </td>
                    <td>+</td>
                    <td></td>
                </tr>
            ))}
        </tbody>
    );
}

export default DSAProblemRow;
