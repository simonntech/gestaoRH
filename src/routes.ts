import { Router } from "express";
import * as EmployeesController from "./controllers/employees-controller";

export const ROUTER = Router();

ROUTER.get("/", async (req, res) => {
    res.send("Home page")
})
ROUTER.get("/employees", EmployeesController.getEmployees);
ROUTER.post("/employess", EmployeesController.postEmployee);