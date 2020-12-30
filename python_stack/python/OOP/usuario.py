class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.amount_balance = 0

    def make_deposit(self, amount):
        self.amount_balance += amount

    def make_withdrawal(self, amount):
        self.amount_balance -= amount

    def display_user_balance(self):
        print("User:" + self.name + " Balance:" + "$" + str(self.amount_balance))

    def transfer_money(self, other_user, amount):
        self.amount_balance -= amount
        other_user.make_deposits(amount)


catalina = User("Catalina", "catalina@gmai.com")
juan = User("Juan", "juan@gmail.com")
marco = User("Marco", "marco@gmail.com.com")


catalina.make_deposit(50)
catalina.make_deposit(50)
catalina.make_deposit(50)
catalina.make_withdrawal(10)
catalina.display_user_balance()

juan.make_deposit(30)
juan.make_deposit(30)
juan.make_withdrawal(10)
juan.make_withdrawal(10)
juan.display_user_balance()

marco.make_deposit(100)
marco.make_withdrawal(10)
marco.make_withdrawal(10)
marco.make_withdrawal(10)
marco.display_user_balance()


