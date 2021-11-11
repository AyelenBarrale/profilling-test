import {logger} from "../utils/logger.util.js";

export async function renderLoginForm(req, res) {
  try {
    logger.info('acceso a main page')
    res.render("main");
  } catch (error) {
    logger.error('error al renderizar main page')
    res.status(400).send(error.message);
  }
}

export async function facebookAuthentication(req, res) {
  try {
    if (req.isAuthenticated()) {
      logger.info('usuario autenticado')
      res.redirect("/welcome");
    } else {
      res.redirect("/");
    }
  } catch (error) {
    logger.error('error al autenticar usuario')
    res.status(400).send(error.message);
  }
}

export async function failLog(req, res) {
  try {
    logger.info("Credenciales no válidas");
    res.render("failLog", {});
  } catch (error) {
    logger.error('error en logueo')
    res.status(400).send(error.message);
  }
}

export async function logOk(req, res) {
  try {
    if (req.isAuthenticated()) {
      logger.info('usuario autenticado')
      res.redirect("welcome", {
        nombre: req.user.displayName,
        foto: req.user.photos[0].value,
        mail: req.user.email,
      });
    }
  } catch (error) {
    logger.error('no se pudo autenticar el usuario')
    res.status(400).send(error.message);
  }
}

export async function renderWelcome(req, res) {
  try {
    logger.info('bienvenido')
    res.render("welcome", {
      nombre: req.user.displayName,
      foto: req.user.photos[0].value,
      mail: req.user.email,
    });
  } catch (error) {
    logger.error('no se pudo ejecutar el acceso')
    res.status(400).send(error.message);
  }
}

export async function renderLogout(req, res) {
  try {
    logger.info('deslogueo satisfactorio')
    res.render("logout", {
      nombre: req.user.displayName,
    });
  } catch (error) {
    logger.error('no se pudo ejecutar el deslogueo')
    res.status(400).send(error.message);
  }
}

export async function logout(req, res) {
  try {
    res.render("logout", {
      nombre: req.user.displayName,
    });
    req.logout()
    req.session.destroy((err) => {
      if (!err) {
        logger.info("logout realizado");
      } else {
        res.json({ message: err });
      }
    });
  } catch (error) {
    logger.error('no se pudo ejecutar el deslogueo')
    res.status(400).send(error.message);
  }
}
