/* admission number : p2304230
   name : Tan Kee Kiat Jerald 
   class : DISM / FT / 2A / 03 

*/
// ##############################################################
// REQUIRE MODULES
// ##############################################################
const treesRoutes = require('./treesRoutes');
 const usersRoutes = require('./usersRoutes')

const express = require('express');
// ##############################################################
// CREATE ROUTER
// ##############################################################
const router = express.Router();



// ##############################################################
// DEFINE ROUTES
// ##############################################################


router.use("/tree", treesRoutes);
router.use("/users", usersRoutes);

// ##############################################################
// EXPORT ROUTER
// ##############################################################

module.exports = router;