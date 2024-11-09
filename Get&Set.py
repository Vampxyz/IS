import random

class Person:
    def __init__(self, name, age, registration):
        self.__name = name
        self.__age = age
        self.__registration = registration
    
# Name field
    def get_name(self):
        return self.__name
    
    def set_name(self, new_name):
        if new_name:
            self.__name = new_name

# Age field
    def get_age(self):
        return self.__age
    
    def set_age(self, new_age):
        if new_age:
            self.__age = new_age

# Registration field
    def get_registration(self):
        return self.__registration
    
    def set_registration(self, new_registration):
        if new_registration:
            self.__registration = new_registration

# Creating instances
person = Person(str(input("Type your name: ")), (input("Type your age: ")), random.randint(100000000000, 999999999999))

# Getting name attribute
name = person.get_name()
print("Nome -", name)

age = person.get_age()
print("Age -", age)

registration = person.get_registration()
print("Registration ->", registration)