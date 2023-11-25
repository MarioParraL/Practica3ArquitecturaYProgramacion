// @deno-types="npm:@types/express@4"
import  { Request, Response } from "npm:express@4.18.2";
import { DiscoModel } from "../db/disco.ts";

export const getDiscosByName = async (req: Request, res: Response) => {
    try{
        const { name } = req.params;

        const discos = await DiscoModel.findOne({ name: name }).exec();
        
        if(!discos){
            res.status(404).send("Disc not found by name");
            return;
        }
        res.status(200).send({
            name: discos.name,
            author: discos.author,
            format: discos.format,
            matriz: discos.matriz,
            country: discos.country,
            art: discos.art,
            id: discos._id.toString(), 
        });       
    }catch(error){
        res.status(500).send(error.message);
        return;        
    }
};

export default getDiscosByName;