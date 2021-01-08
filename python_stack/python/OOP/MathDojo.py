class MathDojo:
    def __init__(self):
    	self.result = 0

    def add(self, num, *nums):
        self.result += num
        for a in nums:
            self.result += a
        return self

    def subtract(self, num, *nums):
        self.result -= num
        for a in nums:
            self.result -= a
        return self

md1 = MathDojo()
md2 = MathDojo()
md3 = MathDojo()
md4 = MathDojo()

x1 = md1.add(2).add(2, 5, 1).subtract(3, 2).result
print(x1)
x2 = md2.add(330).subtract(15,15).add(30).subtract(10).result
print(x2)
x3 = md3.add(500,100,100).subtract(100, 100).result
print(x3)
x4 = md4.add(1000,300).subtract(500,500).result
print(x4)


