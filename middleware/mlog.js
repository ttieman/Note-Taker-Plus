const mlog = (req, res, next) => {
    const fgMagenta = "\x1b[35m";
    switch (req.method) {
        case 'GET': {
            console.info(`${fgMagenta}📗 ${req.method} request to ${req.path}`);
            break;
        }
        case 'POST': {
            console.info(`${fgMagenta}📘 ${req.method} request to ${req.path}`);
            break;
        }
        case 'DELETE': {
            console.info(`${fgMagenta}❌ ${req.method} request to ${req.path}`);
            break;
        }
        default:
            console.log(`${fgMagenta}📙 ${req.method} request to ${req.path}`);
            break
        }
        next();
    };

exports.mlog = mlog;

