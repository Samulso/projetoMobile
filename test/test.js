
  const STORAGE_KEY = 'agendamentos';

  function carregarAgendamentos() {
    const armazenados = localStorage.getItem(STORAGE_KEY);
    return armazenados ? JSON.parse(armazenados) : [];
  }

  function salvarAgendamentos(agendamentos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(agendamentos));
  }

  function atualizarHistorico() {
    const lista = document.getElementById('lista-agendamentos');
    lista.innerHTML = '';

    const agendamentos = carregarAgendamentos();

    agendamentos.forEach(ag => {
      const item = document.createElement('li');
      item.classList.add('card-agendamento');
      item.innerHTML = `
        <div class="card-data">
          <span class="mes">${ag.mes}</span>
          <span class="dia">${ag.dia}</span>
          <span class="hora">${ag.horario}</span>
        </div>

        <div class="card-infos">
          <h2 class="nome-estabelecimento">${ag.nomeEstabelecimento}</h2>
          <p class="servico">${ag.servico}</p>
          <p class="preco">${ag.preco}</p>
        </div>

        <div class="card-icon">
          <span>➔</span>
        </div>
      `;
      lista.appendChild(item);
    });
  }

  document.getElementById('confirmar-agendamento').addEventListener('click', function (e) {
    e.preventDefault();

    const data = document.getElementById('data-atendimento').value;
    const profissional = document.getElementById('profissional').value;
    const horarioSelecionado = document.querySelector('.horarios input[type="radio"]:checked');

    if (!data || !profissional || !horarioSelecionado) {
      alert('Preencha todos os campos do agendamento.');
      return;
    }

    const horario = horarioSelecionado.value;
    const nomeEstabelecimento = 'Beleza Rápida';
    const servico = 'Corte simples';
    const preco = 'R$50,00';

    const dataObj = new Date(data);
    const mes = dataObj.toLocaleString('pt-BR', { month: 'long' });
    const dia = String(dataObj.getDate()).padStart(2, '0');

    const agendamento = {
      mes,
      dia,
      horario,
      nomeEstabelecimento,
      servico,
      preco
    };

    const agendamentos = carregarAgendamentos();
    agendamentos.push(agendamento);
    salvarAgendamentos(agendamentos);
    atualizarHistorico();

    // Fecha o modal (opcional)
    document.getElementById('AgendarModal').style.display = 'none';
  });

  // Atualiza a tela de histórico ao carregar a página
  document.addEventListener('DOMContentLoaded', atualizarHistorico);