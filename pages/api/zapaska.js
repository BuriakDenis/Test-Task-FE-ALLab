import {arrOfData} from "./data/zapaska"

export default function Api(req,res) {
    res.status(200).json(arrOfData)
}