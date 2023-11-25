// @deno-types="npm:@types/express@4"
import  { Request, Response } from "npm:express@4.18.2";
import { DiscoModel } from "../db/disco.ts";

export const updateDisco = async (req: Request, res: Response)=> {
    try{
        const _id = req.params.id;
        const { name, author, format, matriz, country, art } = req.body;
        if(!name || !author || !author || !format || !matriz || !country || ! art){
            res.status(400).send("All the fields are required");
            return;
        }

        const updatedDisco = await DiscoModel.findByIdAndUpdate(
            {_id},
            { name, author, format, matriz, country, art},
            { new: true }            
            ).exec();

            if(!updatedDisco){
                res.status(404).send("disc not founded");
                return;
            }


            res.status(200).send({
                name: updatedDisco.name,
                author: updatedDisco.author,
                format: updatedDisco.format,
                matriz: updatedDisco.matriz,
                country: updatedDisco.country,
                art: updatedDisco.art,
                id: updatedDisco._id.toString(),
            });

    }catch(error){
        res.status(500).send(error.message);
        return;
    }
};

export default updateDisco;