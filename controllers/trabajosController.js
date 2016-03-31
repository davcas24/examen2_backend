var trabajo = require('../schemas/trabajo');

exports.gettrabajos = {
  handler: function(request, reply){
    var trabajos = trabajo.find({});
    reply(trabajos);
  }
}


exports.createtrabajo = {
  handler: function(request, reply){
    var newtrabajo = new trabajo({
      id: request.payload.id,
      titulo: request.payload.titulo,
      cargo: request.payload.cargo,
      info: request.payload.info,
      salario: request.payload.salario,
      fecha: request.payload.fecha,
      archivado: request.payload.archivado
    });
    newtrabajo.save();
    console.log('trabajo saved');
    return reply('ok');
  }
}

exports.updatetrabajo = {
  handler: function(request, reply){
    trabajo.findOneAndUpdate(
      {id : request.params.id},
        {
          titulo: request.payload.titulo,
          cargo: request.payload.cargo,
          info: request.payload.info,
          salario: request.payload.salario
        },
        function(err, trabajos){
      trabajos.save(function(err){
        if(err){
          console.log("Shit");
        }
      });
    });
    reply("ok");
  }
}

exports.archivetrabajo = {
  handler: function(request, reply){
    trabajo.findOneAndUpdate(
      {id : request.params.account},{
        archivado : false
      },function(err, trabajos){
    trabajos.save(function(err){
      if(err){
        console.log("Shit");
      }
    })
    reply("ok");
  });
}
}
