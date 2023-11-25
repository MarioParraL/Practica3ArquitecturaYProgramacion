// @deno-types="npm:@types/express@4"
import  { Request, Response } from "npm:express@4.18.2";
import { DiscoModel } from "../db/disco.ts";


export const getDiscosByCountry = async (req: Request, res: Response) => {
    try{
        const { country } = req.params;

        const discos = await DiscoModel.find({ country }).exec();
        
        if(!discos){
            res.status(404).send("Disc not found by county");
            return;
        }

        const formattedDiscos = discos.map((disco)=>({
            name: disco.name,
            author: disco.author,
            format: disco.format,
            matriz: disco.matriz,
            country: disco.country,
            art: disco.art,
            id: disco._id.toString(),

        }))

        res.status(200).send(formattedDiscos);
         

    }catch(error){
        res.status(500).send(error.message);
        return;        
    }
};

export default getDiscosByCountry;