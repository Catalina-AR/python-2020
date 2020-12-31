class BankAccount:
    def __init__(self, int_rate, balance):
        self.int_rate = int_rate
        self.balance = balance
    def deposit(self, amount):
        self.balance += amount
        return self
    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance -= amount
        elif self.balance < amount:
            print("Fondos insuficientes: cobrar una tarifa de $ 5")
            self.balance -= 5
        return self
    def display_account_info(self):
        print(f"Balance: ${self.balance}")
    def yield_interest(self):
        self.balance = self.balance * self.int_rate + self.balance
        return self
cuenta1 = BankAccount(0.05,100)
cuenta2 = BankAccount(0.05,1000)
cuenta1.deposit(100).deposit(100).deposit(100).withdraw(50).yield_interest().display_account_info()
cuenta2.deposit(500).deposit(500).withdraw(25).withdraw(25).withdraw(25).withdraw(25).yield_interest().display_account_info()
