/* admission number : p2304230
   name : Tan Kee Kiat Jerald 
   class : DISM / FT / 2A / 03 

*/
// ##############################################################
// REQUIRE MODULES
// ##############################################################

const model = require("../models/usersModel.js");
const treesModel = require("../models/treesModel.js")

// ##############################################################
// DEFINE CONTROLLER FUNCTION FOR READ TREE BY USERID
// ##############################################################
module.exports.readTreeByUserId = (req, res, next) =>
    {
        const data = {
            user_id: req.params.user_id
        }
    
        const callback = (error, results, fields) => {
            if (error) {
                res.status(500).json(error);
            } else {
                if(results.length === 0) 
                {
                    res.status(404).json({
                        message: "Tree not found"
                    });
                }
                else res.status(200).json(results);
            }
        }
    
        model.selectByUserId(data, callback);
    }

// ##############################################################
// DEFINE CONTROLLER FUNCTION FOR WATER TREE BY USERID
// ##############################################################
module.exports.waterTreeByUserId = (req, res, next) => {
    const data = {
        userId: req.params.userId,
        treeId: req.params.treeId
    }
    const callback = (error, results, fields) => {
        if (error) {
        console.error("Error waterTreeByUserId:", error);
        res.status(500).json(error);
        } else {
        res.status(204).send();
        }
    };
    
    model.waterTreeByUserId(data, callback);
}


// ##############################################################
// DEFINE MIDDLEWARE FUNCTION FOR CHECK TREE OWNERSHIP
// ##############################################################
module.exports.checkTreeOwnership = (req, res, next) => {
    const data = {
        userId: parseInt(req.params.userId),
        treeId: req.params.treeId,
        id: req.params.treeId
    }
    const callback = (error, results, fields) => {
        if (error) {
        console.error("Error checkTreeOwnership:", error);
        res.status(500).json(error);
        } else {

        // console.log(results[0].user_id);    
        // console.log(data);    
        
        if(results.length === 0) {
            res.status(404).json({
            message: "Tree not found."
            });
            return;
        }
        else if(results[0].user_id != data.userId) {
            res.status(403).json({
            message: "Tree does not belong to user."
            });
            return;
        }
        next();
        }
    };
    
    treesModel.selectById(data, callback);
}

// // since is call back , run asynchronously. the line "treesModel " at the bottom basically refers back 
// the tressModel file , it runs the selectByID function , therefore there is the results.length , the reason
// for results[0] is because the results coming back is actually an array , a object with the result is wrapped inside 
//  hence need to find the first object inside the array. 


// ##############################################################
// DEFINE CONTROLLER FUNCTION FOR GET AVERAGE AGE OF 
// TREES OWNED BY USER
// ##############################################################

module.exports.getAverageAgeofTree = (req, res, next) =>
    {
        const data = {
            userId: req.params.userId
        }
        const callback = (error, results, fields) => {
            if (error) {
            console.error("Error getAverageAgeOfTreesOwnedByUser:", error);
            res.status(500).json(error);
            } else {
                if(results[0].numberOfTrees === 0) {
                    res.status(404).json({
                    message: "No trees found."
                    });
                    return;
                }
                res.status(200).json(results[0]);
            }
            

         
        };
        
        model.selectAverageAgeOfTreesOwnedByUser(data, callback);
    }