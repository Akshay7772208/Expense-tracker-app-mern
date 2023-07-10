const express=require('express')
const {addTransaction,getAllTransactions,editTransaction,deleteTransaction}=require('../controllers/transactionController.js')

//router object
const router=express.Router()

//routes
//add transaction post method
router.post('/add-transaction',addTransaction)
//edit transacation post method
router.post('/edit-transaction',editTransaction)
//delete transacation post method
router.post('/delete-transaction',deleteTransaction)

//get transactions
router.post('/get-transaction',getAllTransactions)


module.exports = router