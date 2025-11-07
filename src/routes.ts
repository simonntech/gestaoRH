import { Router } from "express";
import { listAllEmployees } from "./repositories/employees-repository";

export const ROUTER = Router();

ROUTER.get("/employees", async (req, res) => {
    try {
        const employees = await listAllEmployees();
        res.status(200).json(employees);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro ao buscar funcionários.");
    }
})