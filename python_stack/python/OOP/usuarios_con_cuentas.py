class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.amount.balance = 0
        self.account = BankAccount(int_rate=0.02, balance=0)

    def make_deposit(self, amount):
        self.account.deposit(100)

    def make_withdrawal(self, amount):
        self.amount.balance -= amount

    def display_user_balance(self):
        print("User:" + self.name + " Balance:" + "$" + str(self.amount_balance))

    def transfer_money(self, other_user, amount):
        self.amount.balance -= amount
        other_user.make_deposits(amount)


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
cuenta1.deposit(100).deposit(150).deposit(150).withdraw(50).yield_interest().display_account_info()
cuenta2.deposit(300).deposit(300).withdraw(100).withdraw(100).withdraw(50).withdraw(50).yield_interest().display_account_info()

