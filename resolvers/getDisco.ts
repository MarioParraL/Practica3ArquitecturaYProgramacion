// @deno-types="npm:@types/express@4"
import  { Request, Response } from "npm:express@4.18.2";
import { DiscoModel } from "../db/disco.ts";

export const getDisco = async (req: Request, res: Response) => {
    try{

        const { id } = req.params;
        const disco = await DiscoModel.findById(id).exec();
        if(!disco){
            res.status(404).send("Disc not found");
            return;
        }

        res.status(200).send({
            name: disco.name,
            author: disco.author,
            format: disco.format,
            matriz: disco.matriz,
            country: disco.country,
            art: disco.art,
            id: disco._id.toString(),
        });

    }catch(error){
        res.status(500).send(error.message);
        return;
    }
};

export default getDisco;