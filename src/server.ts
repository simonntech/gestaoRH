import createApp from "./app";

const APP = createApp();

const PORT = process.env.PORT;

APP.listen(PORT, () => {
    console.info(`API funcionando na porta ${PORT} ...`);
})