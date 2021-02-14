const {Router} = require("express")
const router = Router()

//////////////////////
// CORS Headers
//////////////////////
// router.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "*");
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
//     next()
// })

/////////////////////////
// Routers
////////////////////////
//router.use("/dog", dogRouter) // "/api/dog" routes

/////////////////////
// /api routes
/////////////////////
router.get("/", (req, res) => {
    res.status(200).json({Result: "it works"})
})

module.exports = router