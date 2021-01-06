class MathDojo(object):
     def __init__(self):
         self.resultado = 0
     def suma(self, *x):
         self.sumale = 0
         for value in x:
             self.sumale += value
         self.resultado += self.sumale
         return self
     def resta(self, *y):
         self.restale = 0
         for value in y:
             self.restale += value
         self.resultado -= self.restale
         return self

md = MathDojo().suma(2).suma(2,5,1).resta(3,2).resultado
print(md)