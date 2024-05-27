/* admission number : p2304230
   name : Tan Kee Kiat Jerald 
   class : DISM / FT / 2A / 03 

*/
// ##############################################################
// REQUIRE MODULES
// ##############################################################
const express = require('express');

const controller = require('../controllers/usersController');
const model = require('../models/usersModel');


// ##############################################################
// CREATE ROUTER
// ##############################################################

const router = express.Router();
// ##############################################################
// DEFINE ROUTES
// ##############################################################
router.get('/:user_id/trees/', controller.readTreeByUserId);
//router.put('/:id/trees/:treeId/water',controller.checkTreeOwnership,controller.waterTreeByUserId)
router.put('/:userId/trees/:treeId/water', controller.checkTreeOwnership,  controller.waterTreeByUserId);
router.get('/:userId/trees/average-age' , controller.getAverageAgeofTree )
// ##############################################################
// EXPORT ROUTER
// ##############################################################
module.exports = router;