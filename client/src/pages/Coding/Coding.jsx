import React, { useEffect, useState } from "react";
import CodingCard from "./CodingCard"; // Assuming you have a CodingCard component
import "./styles/Coding.css"; // Import your CSS file for styling if needed
import topics from "./Topics";
import { Link } from 'react-router-dom';
import './styles/DSA.css';
import axios from 'axios';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GFG from './GFG.jsx'

const Coding = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingGFG, setIsLoadingGFG] = useState(true);
    const [leetcodeData, setLeetcodeData] = useState(null);
    const [userData, setGFGData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const resLeetCode = await axios.get('http://localhost:9002/skill2040/coding/leetcode');
                // setLeetcodeData(resLeetCode.data);
                const resGFG = await axios.get('http://localhost:9002/skill2040/coding/GFG');
                console.log(resGFG.data);
                setGFGData(resGFG.data);
                setIsLoadingGFG(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false);
                setIsLoadingGFG(false);
            }
        };

        fetchData();
    }, []);


    const showConfettiToast = () => {
        toast.success("Your DSA journey is started now!!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            style: {
                fontWeight: "bold",
                fontSize: "1.2rem",
            },
        })
    }
    const codingCardData = [
        // You can provide data for each card if needed
        // For simplicity, I'm using an array of 9 null values
        // You can replace this with actual data for each card
        ...Array(9).fill(null),
    ];



    return (
        <>
            <div className="coding-scores">

                <div className="coding-scores-leetcode">

                    <h2>LeetCode</h2>
                    <div className="leetcode">
                        <div className="user-info">
                            <div className="photo">
                                <img src="https://i.postimg.cc/KYpK1cMf/gvk.png" alt="" />
                            </div>

                        </div>
                        <div className="stats-info">
                            <div>
                                <p className="username h">Name :
                                    <span className="data">GantaVenkataKousik</span>
                                </p>
                                <p className="rank h"> Rank : <span className="data">111,201</span> </p>
                            </div>
                            <div className="overall">
                                <span className="data"> <span className="num">450</span> problems sovled</span>
                            </div>
                            <div className="levels">
                                <div className="easy">Easy : <span className="data">183 / 776 </span><span className="outofdata"> <span></span></span></div>

                                <div className="easy">Medium : <span className="data">227 / 1608  </span><span className="outofdata"><span></span></span></div>

                                <div className="easy">Hard : <span className="data">40 / 680</span><span className="outofdata"><span></span></span></div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>




            <div className="coding-heading-container" style={{ background: "rgb(53, 168, 38)" }}>
                <p>

                    Code your way to top and win big  DSA coding challenge by  <span>  solving 450 DSA problems</span>

                </p>

                <button class="button-47" role="button" onClick={showConfettiToast}>Start Now</button>
            </div>
            <div className="coding-container">
                {topics.map((topic, index) => (
                    <Link to='/skill2040/coding/DSATopics'>
                        <CodingCard key={index} topic={topic} /></Link>

                ))}
            </div>
        </>
    );
};

export default Coding;
