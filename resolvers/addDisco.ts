// @deno-types="npm:@types/express@4"
import { Request, Response } from "npm:express@4.18.2";
import { DiscoModel } from "../db/disco.ts";

export const addDisco = async (req: Request, res: Response) => {
    try{
        const { name, author, format, matriz, country, art} = req.body;
        if(!name || !author || !author || !format || !matriz || !country || ! art){
            res.status(400).send("All the fields are required");
            return;
        }

        const newDisco = new DiscoModel({
            name,
            author,
            format,
            matriz,
            country,
            art});

        await newDisco.save();

        res.status(200).send({
            name: newDisco.name,
            author: newDisco.author,
            format: newDisco.format,
            matriz: newDisco.matriz,
            country: newDisco.country,
            art: newDisco.art,
            id: newDisco._id.toString(),
        });

    }catch(error){
        res.status(500).send(error.message);
        return;
        
    }
};

export default addDisco;