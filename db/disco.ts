import mongoose from "npm:mongoose@8.0.0"
import { Disco } from "../types.ts"

const Schema =  mongoose.Schema;

const discoSchema = new Schema(
 {
    name: { type: String, required: true},
    author: { type: String, required: true},
    format: { type: String, required: true},
    matriz: { type: Boolean, required: true},
    country: { type: String, required: true},
    art: { type: String, required: true},  
 },
 { timestamps: true}
);

export type DiscoModelType = mongoose.Document & Omit<Disco, "id">;
export const DiscoModel = mongoose.model<DiscoModelType>("Disco", discoSchema);