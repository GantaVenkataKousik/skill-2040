import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './styles/dsatopic.css'

const DSATopic = ({topic}) => {


    return (
        <div className='DSATopic'>
            <div className='topic-name'>
                <p>{topic.topicName}</p>
                <div className='expand'>+</div>
            </div>

            <div className='level'>
                <p className='difficulty'>Easy
                    <span>+</span>
                </p>
                <table className='problems'>
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Problem</th>
                            <th>Link1</th>
                            <th>Solution</th>
                            <th>Link2</th>
                            <th>Notes</th>
                            <th>Company</th>
                        </tr>
                    </thead>

                       

                    {topic.questions ? (
                                topic.questions.map((question, index) => (
					<tbody>
                                    <tr key={index}>
                                    <td>
                                        <select value={question.Done ? 'Done' : 'Not Done'}>
                                            <option value="Done">Done</option>
                                            <option value="Not Done">Not Done</option>
                                            <option value="Done">Done</option>
                                        </select>
                                    </td>
                                    <td>{question.Problem}</td>
                                    <td><a href={question.URL}></a>
                                        <img src="https://play-lh.googleusercontent.com/ZI21NMObsjB7DbPU_EXRymHJL3HQpfsrB2N4CWb-diXm4xjl_13mmetYQZvcpgGf-64
                                    " alt="" />
                                    </td>
                                    <td><a href='https://www.youtube.com/watch?v=h3uDCJ5mvgw&list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz'><img src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png" alt="" /></a>
                                        </td>
                                    <td><a href={question.URL2}><img src="https://files.codingninjas.in/article_images/favicon-and-cherrypy-1-1660924366.webp
                                    " alt="" /></a></td>
                                    <td>+</td>
                                    <td></td>
                                </tr>
</tbody>
        ))
                            ) : (
                                <tr>
                                    <td colSpan={6}>No questions available</td>
                                </tr>
                            )}

                </table>
            </div>

        </div>
    )
}

export default DSATopic;