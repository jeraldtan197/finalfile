/* admission number : p2304230
   name : Tan Kee Kiat Jerald 
   class : DISM / FT / 2A / 03 

*/
// ##############################################################
// REQUIRE MODULES
// ##############################################################
const pool = require('../services/db');

// ##############################################################
// DEFINE SELECT TREES BY USER ID
// ##############################################################
module.exports.selectByUserId = (data, callback) =>
    {
        const SQLSTATMENT = `
        SELECT * FROM tree WHERE user_id = ?;
        `;
    const VALUES = [data.user_id];
    
    pool.query(SQLSTATMENT, VALUES, callback);
    }

// ##############################################################
// DEFINE WATER TREE BY USER ID
// ##############################################################
module.exports.waterTreeByUserId = (data, callback) => {
    const SQLSTATEMENT = `
    UPDATE tree 
    SET watered_on = NOW() 
    WHERE user_id = ? 
    AND id = ?;`;
    const VALUES = [data.user_id, data.treeId];
    
    pool.query(SQLSTATEMENT, VALUES, callback);
};


// ##############################################################
// DEFINE MODEL FOR GET AVERAGE AGE OF TREES OWNED BY USER
// ##############################################################

module.exports.selectAverageAgeOfTreesOwnedByUser = (data, callback) => {
    const SQLSTATEMENT = `
    SELECT AVG(age) AS averageAge, COUNT(id) AS numberOfTrees 
    FROM tree 
    WHERE user_id = ?;
    `;
    const VALUES = [data.userId];
    
    pool.query(SQLSTATEMENT, VALUES, callback);
}