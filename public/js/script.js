var cont = 0;

function criarNota() {
    const section = document.querySelector('section');

    const container = document.createElement('div');
    container.id = 'container' + cont;
    container.classList = 'blocos';
    section.appendChild(container);

    const barra = document.createElement('div');
    barra.id = 'barra';
    container.appendChild(barra);

    const texto = document.createElement('textarea');
    texto.id = 'texto' + cont;
    texto.classList = 'textos';
    container.appendChild(texto);

    const editar = document.createElement('span');
    editar.className = 'material-symbols-outlined';
    editar.textContent = 'edit_note';
    editar.id = 'editar' + cont;
    barra.appendChild(editar);

    const excluir = document.createElement('span');
    excluir.className = 'material-symbols-outlined';
    excluir.textContent = 'delete';
    excluir.id = 'excluir' + cont;
    barra.appendChild(excluir);

    const guia = document.createElement('span');
    guia.className = 'material-symbols-outlined';
    guia.textContent = 'new_window';
    guia.id = 'abrir' + cont;
    barra.appendChild(guia);

    const print = document.createElement('span');
    print.className = 'material-symbols-outlined classe2';
    print.textContent = 'print';
    print.id = 'print' + cont;
    barra.appendChild(print);

    cont += 1;
}

document.body.addEventListener('click', function (event) {
    for (var i = 0; i < cont; i++) {
        if (event.target.id == 'excluir' + i) {
            document.getElementById('container' + i).style.display = 'none';
        }
        if (event.target.id == 'editar' + i) {
            var editar = document.getElementById('texto' + i);

            if (editar.disabled == true) {
                editar.disabled = false;
                editar.style.fontSize = '20px';
            } else {
                editar.disabled = true;
                editar.style.fontSize = '17px';
            }
        }
    }
});

function pesquisar() {
    var inputValor = document.getElementById('pesquisa').value.toLowerCase();

    if (inputValor != '') {
        document.querySelectorAll('.blocos').forEach(function (blocos) {
            blocos.style.display = 'none';
        });
    } else {
        document.querySelectorAll('.blocos').forEach(function (blocos) {
            blocos.style.display = 'flex';
        });
    }

    document.querySelectorAll('.textos').forEach(function (item) {
        var textoItem = item.value.toLowerCase();
        var divPai = item.parentNode;

        if (inputValor != 0) {
            if (textoItem.includes(inputValor)) {
                divPai.style.display = 'flex';
            }
        }
    });
}


document.body.addEventListener('click', function (event) {
    for (var i = 0; i < cont; i++) {
        if (event.target.id == 'abrir' + i) {
            elementoClonado = document.getElementById('container' + i).cloneNode(true);

            var novaPagina = window.open('../public/pages/nova.html', '_blank');
            
            setTimeout(function () {
                novaPagina.document.body.appendChild(elementoClonado);

                const script = novaPagina.document.createElement('script');
                script.textContent = `const imp = document.querySelector('.classe2');
                imp.addEventListener('click', function () {
                    window.print();
                });`;
                novaPagina.document.body.appendChild(script);
            }, 100);
        }
    }
});



