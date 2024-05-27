/* admission number : p2304230
   name : Tan Kee Kiat Jerald 
   class : DISM / FT / 2A / 03 

*/

// ##############################################################
// REQUIRE MODULES
// ##############################################################

const model = require("../models/treesModel.js");

// ##############################################################
// DEFINE CONTROLLER FUNCTION FOR CREATE TREE
// ##############################################################
module.exports.createNewPlayer = (req, res, next) =>
    {
        if(!req.body.species || !req.body.age ||!req.body.height  || !req.body.user_id  ){
            res.status(400).json({"message" : "Missing required data."});
            return;
        }
    
        const data = {
            species: req.body.species,
            age: req.body.age,
            height: req.body.height,
            user_id:req.body.user_id
      
        }
    
        const callback = (error, results, fields) => {
            if (error) {
                
                res.status(500).json({"message":"Internal server error."});
            } else {
                res.status(201).json({"message" : "Tree created successfully",
                treeId:results.insertId})
                ;
            }
        }
    
        model.insertSingle(data, callback);
    }

// ##############################################################
// DEFINE CONTROLLER FUNCTION FOR READ ALL TREES
// ##############################################################


// ##############################################################
// DEFINE CONTROLLER FUNCTION FOR READ TREE BY ID
// ##############################################################
module.exports.readTreeById = (req, res, next) =>
    {
        const data = {
            id: req.params.id
        }
    
        const callback = (error, results, fields) => {
            if (error) {
                res.status(500).json(error);
            } else {
                if(results.length == 0) 
                {
                    res.status(404).json({
                        message: "Tree not found"
                    });
                }
                else res.status(200).json(results);
            }
        }
    
        model.selectById(data, callback);
    }

// ##############################################################
// DEFINE CONTROLLER FUNCTION FOR UPDATE TREE BY ID
// ##############################################################
module.exports.updateById = (req, res, next) =>
    {
        if(req.params.id==undefined || req.body.species == undefined || req.body.age == undefined || req.body.height == undefined || req.body.user_id == undefined) 
        {
            res.status(400).json({
                message: "Missing required data."
            });
            return;
        }
    
        const data = {
            id: req.params.id,
            species: req.body.species,
            age: req.body.age,
            height: req.body.height,
            user_id: req.body.user_id,
        }
    
        const callback = (error, results, fields) => {
            if (error) {
                res.status(500).json(error);
            } else {
                if(results.affectedRows == 0) 
                {
                    res.status(404).json({
                        message: "Tree not found"
                    });
                }
                else res.status(204).send(); // 204 No Content
            }
        }
    
        model.updateTreeById(data, callback);
    }


// ##############################################################
// DEFINE CONTROLLER FUNCTION FOR DELETE TREE BY ID
// ##############################################################

module.exports.deleteTreeById = (req, res, next) =>
    {
        const data = {
            id: req.params.id
        }
    
        const callback = (error, results, fields) => {
            if (error) {
                res.status(500).json(error);
            } else {
                if(results.affectedRows == 0) 
                {
                    res.status(404).json({
                        message: "Tree not found"
                    });
                }
                else res.status(204).send(); // 204 No Content            
            }
        }
    
        model.deleteById(data, callback);
    }
