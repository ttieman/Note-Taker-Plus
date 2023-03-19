const mlog = (req, res, next) => {  // return function for switch statment 
    const fgMagenta = "\x1b[35m";  // console color code for magenta
    switch (req.method) {
        case 'GET': {  // logs all get requests to console
            console.info(`${fgMagenta}📗 ${req.method} request to ${req.path}`);
            break;
        }
        case 'POST': {// logs all post requests to console
            console.info(`${fgMagenta}📘 ${req.method} request to ${req.path}`);
            break;
        }
        case 'DELETE': { // logs all delete requests to console 
            console.info(`${fgMagenta}❌ ${req.method} request to ${req.path}`);
            break;
        }
        default:  //defaults
            console.log(`${fgMagenta}📙 ${req.method} request to ${req.path}`);
            break
        }
        next(); //next call
    };

exports.mlog = mlog;

