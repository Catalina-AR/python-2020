class Zoo:
    def __init__(self, zoo_name):
        self.animals = []
        self.name = zoo_name

    def add_animal(self, name, edad, tipo):
        if str(tipo)=='leon':
            self.animals.append(Leones(name, edad))
        elif str(tipo)=='tigre':
            self.animals.append(Tigres(name, edad))
        elif str(tipo) == 'oso':
            self.animals.append(Osos(name, edad))
        else:
            print('tipo no implementado')
        return self.animals[len(self.animals)-1]

    def print_all_info(self):
        print("-"*30, self.name, "-"*30)
        for animal in self.animals:
            animal.display_info()

class Animals(Zoo):
    def __init__(self, name, edad, salud, felicidad):
        self.name = name
        self.edad =edad
        self.nivel_salud=salud
        self.nivel_felicidad=felicidad

    def display_info(self):
        print('\nNombre:\t', self.name, '\nEdad:\t', self.edad, '\nNivel de salud:\t', self.nivel_salud, '\nNivel de felicidad:\t', self.nivel_felicidad)
        return self

    def alimentacion(self):
        self.nivel_salud += 10
        self.nivel_felicidad += 10

class Leones(Animals):
    def __init__(self, name, edad, velocidad=200):
        self.velocidad = velocidad
        super().__init__(name, edad, 100, 500)

    def display_info(self):
        print('\nNombre:\t', self.name, '\nEdad:\t', self.edad, '\nNivel de salud:\t', self.nivel_salud, '\nNivel de felicidad:\t', self.nivel_felicidad, '\nNivel de velocidad:\t', self.velocidad)
        return self

    def alimentacion(self):
        self.nivel_salud += 100
        self.nivel_felicidad += 500

class Tigres(Animals):
    def __init__(self, name, edad):
        super().__init__(name, edad, 50, 300)

    def alimentacion(self):
        self.nivel_salud += 50
        self.nivel_felicidad += 150

class Osos(Animals):
    def __init__(self, name, edad):
        super().__init__(name, edad, 100, 500)



zoologico=Zoo('zoologico metropolitano')
zoologico.add_animal('Nala',3,'leon').alimentacion()
zoologico.add_animal('Tambor',7, 'tigre')
zoologico.add_animal('Baloo',5,'oso')
zoologico.print_all_info()