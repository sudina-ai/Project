import  random

rand1= random.randint(1,10)
rand2 = random.randint(1,10)
result =(rand1,rand2)
user_choice = input("Roll the dice(yes/no):")
if(user_choice == "yes"):
    print("your result is",result)  
elif (user_choice == "no"):
    print("Thank you for playing game!!")
else:
    print("Invalid choice")



