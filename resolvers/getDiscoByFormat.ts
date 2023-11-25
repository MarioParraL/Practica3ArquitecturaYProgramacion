// @deno-types="npm:@types/express@4"
import  { Request, Response } from "npm:express@4.18.2";
import { DiscoModel } from "../db/disco.ts";

export const getDiscosByFormat = async (req: Request, res: Response) => {
    try{
        const { format } = req.params;

        const discos = await DiscoModel.find({ format }).exec();
        
        if(!discos){
            res.status(404).send("Disc not found by format");
            return;
        }

        const formattedDiscos = discos.map((discos)=>({
            name: discos.name,
            author: discos.author,
            format: discos.format,
            matriz: discos.matriz,
            country: discos.country,
            art: discos.art,
            id: discos._id.toString(),

        }))

        res.status(200).send(formattedDiscos);
         

    }catch(error){
        res.status(500).send(error.message);
        return;        
    }
};

export default getDiscosByFormat;