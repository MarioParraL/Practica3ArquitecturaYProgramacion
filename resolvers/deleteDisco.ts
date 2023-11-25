// @deno-types="npm:@types/express@4"
import { Request, Response } from "npm:express@4.18.2";
import { DiscoModel } from "../db/disco.ts";

export const deleteDisco = async (req: Request, res: Response) => {
    try{
        const _id = req.params.id;
        const disco = await DiscoModel.findByIdAndDelete(_id);
        if(!disco){
            res.status(404).send("disc not found");
            return;
        }
            res.status(200).send("disc deleted correctly");
        
    }catch(error){
        res.status(500).send(error.message);
        return;
    }
};

export default deleteDisco;