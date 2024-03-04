import express from "express";
import cors from "cors";
import morgan from "morgan";
import colors from "colors";
import dotenv from "dotenv";
import path from 'path';
import bodyParser from "body-parser";
import { exec } from 'child_process';
import fs from 'fs';
import pkg from 'body-parser';
const { json } = pkg;
const app = express();
const PORT = 9002 
const MODE = "development"

// Set the view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views')); // Use process.cwd() to resolve the path relative to the project's root


app.use(cors());
// Parses JSON data in incoming requests.
app.use(express.json());
// Logs HTTP requests in a developer-friendly format.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), 'public')));

app.get('/skill2040/coding/leetcode',(req,res)=>{
    exec('python ./scraped-content/leetcode-data.py', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
        // You can handle the stdout data (sc
        try {
            // Read the contents of the JSON file
            fs.readFile('leetcode_data.json', 'utf8', (err, data) => {
                if (err) {
                    console.error('Error reading JSON file:', err);
                    res.status(500).json({ success: false, error: 'Error reading JSON file' });
                    return;
                }
                // Parse the JSON data
                const jsonData = JSON.parse(data);
                // Send the JSON data as the response
                res.json(jsonData);
            });
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            res.status(500).json({ success: false, error: 'Error parsing JSON' });
        }
    });
})



app.get('/skill2040/coding/GFG',(req,res)=>{
    exec('python ./scraped-content/GFG.py', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        try {
            // Read the contents of the JSON file
            fs.readFile('GFG_stats.json', 'utf8', (err, data) => {
                if (err) {
                    console.error('Error reading JSON file:', err);
                    res.status(500).json({ success: false, error: 'Error reading JSON file' });
                    return;
                }
                // Parse the JSON data
                const jsonData = JSON.parse(data);
                // Send the JSON data as the response
                console.log(jsonData)
                res.json(jsonData);
            });
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            res.status(500).json({ success: false, error: 'Error parsing JSON' });
        }
    });
})

app.listen(9002, () => {
    console.log("BE started at port 9002");
})