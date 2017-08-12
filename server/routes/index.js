
module.exports = function(app) {
    //app.use('/api', route);
    app.get('/api', (req, res) => {
        res.send('API is ready');
    });

};

