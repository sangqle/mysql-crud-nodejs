const getTime = (req, res, next) => {
    console.log('Time:', new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''));
    next();
}

module.exports = { getTime };