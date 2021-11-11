import { PORT } from "../server.js";
import {logger} from "../utils/logger.util.js";

export const renderRandom = async (req, res) => {
  try {
    const {
      query: { cant },
    } = req;

    const datos = {
      id: process.pid,
      puerto: PORT,
    };

    const quantity = Number(cant) || 100000000;
    let c = 0;
    const numeros = {};

    while (c < quantity) {
      const randomNum = Math.round(Math.random() * 999) + 1;
      if (numeros[randomNum]) {
        numeros[randomNum] += 1;
      } else {
        numeros[randomNum] = 1;
      }
      c += 1;
    }

    logger.info(`cantidad de números calculados: ${quantity} `)

    res.status(200).json({
      NUMEROS: numeros,
      DATOS: datos,
    });
  } catch (error) {
    logger.error('error al ejecutar función Random Numbers')
    res.status(400).json({ error: error.message });
  }
};


/* import { fork } from "child_process";
import {logger} from "../utils/logger.util.js";

const aleatorios = fork("./src/services/random.service.js");

export const renderRandom = async (req, res) => {
  try {
    const {
      query: { cant },
    } = req;

    const quantity = Number(cant) || 100000000;

    aleatorios.on("message", (message) => {
      if (message === "Ready") {
        logger.info(`cantidad de números calculados: ${quantity} `)
        aleatorios.send(quantity);
      } else {
        res.json(message);
      }
    });
    aleatorios.send("Ready");
  } catch (error) {
    logger.error('error al ejecutar función Random Numbers')
    res.status(400).json({ error: error.message });
  }
};
 */