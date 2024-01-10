module.exports = function (app) {
	app.get('/formulario_inclusao_noticia', function (req, res) {
		var mysql = require('mysql');

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '2748',
            database: 'portal_noticias'
        });

        connection.query("SELECT * FROM noticias", function(error, result){
            res.send(result);
        });
		res.render('admin/form_add_noticia');
	});
};
