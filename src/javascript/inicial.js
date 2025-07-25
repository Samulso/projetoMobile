
//logica do navigation bar

const menuList = document.querySelector("nav ul")

menuList.addEventListener("click", (event) => {
    const clickedMenuItem = event.target.closest("li");

    if(clickedMenuItem) {
        const activeMenuItem = menuList.querySelector(".active");
        if(activeMenuItem) {
            activeMenuItem.classList.remove("active");
        }

        clickedMenuItem.classList.add("active");
    };
});


        // Lógica do Modal
        
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

        //barra de pesquisa

const searchInput = document.getElementById('search');

searchInput.addEventListener('input', (event) => {
    const value = formatString(event.target.value);

    const items = document.querySelectorAll('.items .item');
    const noResults = document.getElementById('no_results');

    let hasResults = false;

    if (value != '') {
    items.forEach(item => {
        const itemTitle = item.querySelector('.item-title').textContent;
        const itemTitleSubtitle = item.querySelector('.item-price').textContent;


        if (formatString(itemTitle).indexOf(value) !== -1 
            || formatString(itemTitleSubtitle).indexOf(value) !== -1
        ) {
            item.style.display = 'flex';

            hasResults = true;
        } else {
            item.style.display = 'none';
        }
    })

    if (hasResults) {
        noResults.style.display = 'none';
    } else {
        noResults.style.display = 'block';
    }
  } else {
    items.forEach(item => item.style.display = 'flex');

    noResults.style.display = 'none';
  }
});

function formatString(value) {
    return value
        .trim()
        .toLowerCase() 
        .normalize('NFD') 
        .replace(/[\u0300-\u036f]/g, ''); 
}