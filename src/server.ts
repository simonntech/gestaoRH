import express, {Request, Response} from "express";

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.listen(PORT, () => {
    console.info(`API funcionando na porta ${PORT}`);
})

app.get('/', 
    (req: Request, res: Response)  => {
        res.status(200).json(
            {message: 'API de gestão de RH'}
        );
    }
)