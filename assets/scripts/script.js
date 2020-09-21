const formReg = document.getElementById('formReg');
const listarUsuarios = [];

formReg.addEventListener('submit', (e)=> {
    e.preventDefault();
    const nombre   = document.getElementById('nombre').value;
    const album = document.getElementById('album').value;
    const year   = document.getElementById('ano').value;

    const usuario = {
        nombre: nombre,
        album: album,
        ano: year
    }
    console.log(usuario);
    guardarForm(usuario);

})

function guardarForm(usuario) {
    if(typeof(Storage) !== 'undefined') {
        if(localStorage.getItem('usuarios') == null){
            listarUsuarios.push(usuario);
            const convertirString = JSON.stringify(listarUsuarios);
            localStorage.setItem('usuarios', convertirString);
        }else {
            const listaUsuarios = JSON.parse(localStorage.getItem('usuarios'));
            listaUsuarios.push(usuario);
            const usuarioStirng = JSON.stringify(listaUsuarios);
            localStorage.setItem('usuarios', usuarioStirng);
        }
    }else {
        console.log('Incompatible con localstorage');
    }
    
}


