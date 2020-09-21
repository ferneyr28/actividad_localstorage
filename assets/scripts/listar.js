if(typeof(Storage) !== 'undefined') {
    const mostrar = document.getElementById('mostrarUsuarios');
    const listaUsuarios = JSON.parse(localStorage.getItem('usuarios'));
    console.log(listaUsuarios);

    let dibuajarTabla = `
                        <table>
                        <th>ID</th>
                        <th>Artista</th>
                        <th>Album</th>
                        <th>Año</th>`;

    document.write(dibuajarTabla);
    for(let i=0; i<listaUsuarios.length; i++){
        document.write(`<tr>`);
        document.write(`<td>${i+1}</td>`);
        document.write(`
            <td>${listaUsuarios[i].nombre}</td>
            <td>${listaUsuarios[i].album}</td>
            <td>${listaUsuarios[i].ano}</td>
            </tr>`)
        console.log(listaUsuarios[i].nombre);
    }
}else {
    console.log('Incompatible con localstorage');
}
