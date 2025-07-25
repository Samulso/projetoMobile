const AgendarModal = document.getElementById('AgendarModal');
const AgendarButton = document.querySelectorAll('.button-02');
const modalCloseBtn = AgendarModal.querySelector('.modal-close-btn');

AgendarButton.forEach(btn => {
    btn.addEventListener('click', () => {
        AgendarModal.classList.add('active');
    });
  });

modalCloseBtn.addEventListener('click', () => {
    AgendarModal.classList.remove('active');
});

window.addEventListener('click', (event) => {
    if (event.target == AgendarModal) {
        AgendarModal.classList.remove('active');
    }
});

        //form de agendar

const dataInput = document.getElementById('data-atendimento');
const profContainer = document.getElementById('profissionais-container');
const horariosContainer = document.getElementById('horarios-container');
const profissionalSelect = document.getElementById('profissional');
const horariosDiv = document.querySelector('.horarios');

dataInput.addEventListener('change', () => {
  if (dataInput.value) {
    profContainer.style.display = 'block';
  }
});

profissionalSelect.addEventListener('change', () => {
  if (profissionalSelect.value) {
    horariosContainer.style.display = 'block';

    // Simulando horários (poderia vir de um banco de dados)
    const horarios = ["09:00", "10:30", "13:00", "15:30"];
    horariosDiv.innerHTML = ''; // Limpa os anteriores

    horarios.forEach(hora => {
      const btn = document.createElement('button');
      btn.textContent = hora;
      btn.onclick = () => alert(`Horário escolhido: ${hora}`);
      horariosDiv.appendChild(btn);
    });
  }
});