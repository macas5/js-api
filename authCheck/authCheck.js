import jwt from "jsonwebtoken";

const verifyUser = (req, res, next) => {
    if((req.user.id === req.params.id) || req.user.isAdmin){
        next();
    } else {
        return res.status(406).send('You are not logged in');
    }
}

const verifyAdmin = (req, res, next) => {
    if(req.user.isAdmin){
        next();
    } else {
        return res.status(406).send('You are not an admin');
    }
}

export const verifySessionTokenUser = (req, res, next) => {
    const token = req.cookies.session_token;

    if(!token) {
        return res.status(401).send('User is not authorized');
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err) {
            return res.status(404).send('Token is not valid');
        }  
        req.user = user;
        verifyUser(req, res, next);
    });
}

export const verifySessionTokenAdmin = (req, res, next) => {
    const token = req.cookies.session_token;

    if(!token) {
        return res.status(401).send('User is not authorized');
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err) {
            return res.status(404).send('Token is not valid');
        }  
        req.user = user;
        verifyAdmin(req, res, next);
    });
}

