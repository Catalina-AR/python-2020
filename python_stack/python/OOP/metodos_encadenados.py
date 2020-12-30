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

    class User:
        def make_deposit(self, amount):
            catalina.make_deposit(50).make_deposit(50).make_deposit(50).make_withdrawal(10).display_user_balance()
            juan.make_deposit(30).make_deposit(30).make_withdrawal(10).make_withdrawal(10).display_user_balance()
            marco.make_deposit(100).make_withdrawal(10).make_withdrawal(10).make_withdrawal(10).display_user_balance()
            return self

catalina = User("Catalina", "catalina@gmai.com")
juan = User("Juan", "juan@gmail.com")
marco = User("Marco", "marco@gmail.com.com")



