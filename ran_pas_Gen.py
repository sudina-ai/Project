import random
import string
n =int(input("enter the length of password:"))
pass_len = n
charValues = string.ascii_letters + string.digits + string.punctuation
# #list comprehension[functio fpr i in range(n)]
# password = "".join(random.choice(charValues) for i in range(pass_len))
password = ""
for i in range(pass_len):
    password += random.choice(charValues)

print("your random password is:",password)


