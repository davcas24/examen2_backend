var mongoose = require('mongoose');

var trabajoSchema = new mongoose.Schema({
  id : {type: Number, unique: true, required : true},
  titulo : {type:String, required : true},
  descripcion: {type:String, required : true},
  cargo : {type:String, required : true},
  info : {type:String, required : true},
  salario: {type:String, required : true},
  fecha : {type:String, required : true},
  archivado : {type:Boolean, required : true}
});

module.exports = mongoose.model('Trabajo', trabajoSchema);
