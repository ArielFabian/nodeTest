const dotenv = require('dotenv')
const axios = require('axios')
const Coin = require('../../models/coinPaprika/coin')
dotenv.config()

exports.getCoinsList = async (req, res) => {
    try {
        const coinsUrl = `${process.env.COIN_PAPRIKA_URL}/coins`
        const response = await axios.get(coinsUrl)
        const coins = response.data.map(coin => new Coin(coin));
        res.status(200).json({
            message: "Ok",
            data: coins
        })
    } catch (error) {
        res.status(500).json({
            message: "Ocurrio un error" + error
        })
    } 
}

exports.getCoin = async (req, res) => {
    try {
        const coinsUrl = `${process.env.COIN_PAPRIKA_URL}/coins/${req.params.id}`
        const response = await axios.get(coinsUrl)
        const coin = new Coin(response.data)
        res.status(200).json({
            message: "Ok",
            data: coin
        })
    } catch (error) {
        res.status(500).json({
            message: "Ocurrio un error" + error
        })
    } 
}

