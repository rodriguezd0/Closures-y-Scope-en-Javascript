export function createPetList() {
    const mascotas = []
    function agregarMascota(nombre) {
      if (nombre) {
        mascotas.push(nombre)
      }
      return mascotas
    }
    return agregarMascota
  }  