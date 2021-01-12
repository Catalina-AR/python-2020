class animal(object):
    def __init__(self, nombre: str, edad, salud: int, felicidad: int):
        self.nombre = nombre
        self.edad = edad
        self.salud = salud
        self.felicidad = felicidad
        self.especie = str()

    def display_info(self):
        s = f"This {self.especie} is named {self.nombre}, is {self.salud}, and is {self.felicidad}."
        return s

    def alimentar(self):
        self.salud += 10
        self.felicidad += 10


class leon(animal):
    def __init__(self, nombre: str, edad="5", salud: int = 3, felicidad: int = 3, macho: bool = True):
        super().__init__(nombre, edad, salud, felicidad)
        self.macho = macho


class oso(animal):
    def __init__(self, nombre: str, edad="unknown", salud: int = 2, felicidad: int = 10, color: str="gris"):
        super().__init__(nombre, edad, salud, felicidad)
        self.color = color


class tigre(animal):
    def __init__(self, nombre: str, edad="desconocida", salud: int = 4, felicidad: int = 5):
        super().__init__(nombre, edad, salud, felicidad)


class Zoo:
    def __init__(self, zoologico):
        self.animal = []
        self.nombre = zoologico

    def add_leon(self, nombre):
        self.animal.append(leon(nombre))

    def add_oso(self,nombre):
        self.animal.append(oso(nombre))

    def add_tigre(self, nombre):
        self.animal.append(tigre(nombre))

    def print_all_info(self):
        print("-" * 30, self.nombre, "-" * 30)
        for animal in self.animal:
            animal.display_info()
zoo1 = Zoo("John's Zoo")
zoo1.add_leon("Nala")
zoo1.add_leon("Simba")
zoo1.add_oso("Lolo")
zoo1.add_oso("Kira")
zoo1.add_tigre("Rajah")
zoo1.add_tigre("Shere Khan")
zoo1.print_all_info()
