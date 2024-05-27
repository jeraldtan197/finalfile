/* admission number : p2304230
   name : Tan Kee Kiat Jerald 
   class : DISM / FT / 2A / 03 

*/
// ##############################################################
// REQUIRE MODULES
// ##############################################################

const express = require('express');

const controller = require('../controllers/treesController');



// ##############################################################
// CREATE ROUTER
// ##############################################################
const router = express.Router();

// ##############################################################
// DEFINE ROUTES
// ##############################################################

// router.get('/', controller.readAllPlayer);
router.post('/',controller.createNewPlayer)
 router.get('/:id', controller.readTreeById);
router.put('/:id', controller.updateById);
  router.delete('/:id', controller.deleteTreeById);

// ##############################################################
// EXPORT ROUTER
// ##############################################################

module.exports = router;