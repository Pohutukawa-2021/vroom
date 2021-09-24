const express = require('express')

// const dbUser = require('../db/users')
const dbRides = require('../db/rides')
// const dbCar = require('../db/cars')

const router = express.Router()

// ROUTE api/v1/drivers/

router.get('/', (req, res) => {
  dbRides.getRides()
    .then(async rides => {
      res.json({ rides })
      return null
    })
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

router.post('/', async (req, res) => {
  const { startLocation, destination, date, leavingTime, arrivalTime, seatsAvailable, cost } = req.body
  const ride = { startLocation, destination, date, leaving_time: leavingTime, estimated_arrival_time: arrivalTime, seatsAvailable, cost }
  try {
    await dbRides.addRide(ride)
    res.sendStatus(201)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'unable to insert user into the database' })
  }
})

module.exports = router