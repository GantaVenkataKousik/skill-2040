import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './styles/dsatopic.css'

const GFG = ({ user_data }) => {
    return (
        <div className='DSATopic'>
            {Object.keys(user_data.solved_per_difficulty).map((level, index) => (
                <div className='level' key={index}>
                    <p className='difficulty'>{level}</p>
                    <table className='problems'>
                        <thead>
                            <tr>
                                <th>Link</th>
                                <th>Problem</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user_data.questions_per_section[level].map((question, idx) => (
                                <tr key={idx}>
                                    <td>{question.link}</td>
                                    <td>{question.title}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    )
}

export default GFG;