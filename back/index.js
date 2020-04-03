const express = require('express');

const app = express();

app.get('/',(request, response) => {
  return response.json({
      evento: "Semana Omni",
      aluno: "Baesse"
  });
});

app.listen(3333);
