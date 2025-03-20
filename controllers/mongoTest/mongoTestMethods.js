const client = require("../../common/mongoConnection")

exports.getTestConnection = async (req, res) => {
    try {
        await client.connect()
        await client.db("admin").command({
            ping: 1
        })
        res.status(200).json({
            message: "Ok",
            data: "Ahi van 200!"
        })
    } catch (error) {
        await client.close
        res.status(500).json({
            message: "Error",
            data: `Ocurrio un error: ${error}`
        })
    } finally {
        await client.close
    }
}