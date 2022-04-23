const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () =>console.log(`Pausando canción...`),
    borrar: id =>console.log(`Borrando canción con id ${id}`),
    crear: nombre =>console.log(`Creando una playlist con nombre ${nombre}`),
    reproducirPlayList: nombre =>console.log(`Reproduciendo la playlist con nombre ${nombre}`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
    },

    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = "Shakira";
reproductor.obtenerCancion;
reproductor.reproducir(30);
reproductor.crear("Arcane");
reproductor.reproducirPlayList("Arcane");

