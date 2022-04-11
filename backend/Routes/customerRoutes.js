import express from "express";
import db from '../config'


const customerRouter = express.Router();

customerRouter.get("/createAdmin", async(req, res)=>{
    db.query("INSERT INTO customersTable (firstName, lastName, email, password, isAdmin) VALUES" + 
    "('Siren', 'Ocean', 'sireno@gmail.com', 'password','1');",
    (err, results) =>{
        console.log(err);
        res.send(results);
    }
    );
});

module.exports = customerRouter;