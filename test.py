r = 0.09
name = input('Please enter your fullname:')
pv = int(input('please enter your loan value:'))
n = int(input('please enter the  number of payments:'))
p = (r*(pv)) / (1-(1+r)**(-n))

print('Mr/Mrs', name, 'your  monthly  payment for loan of', pv, 'is :', p)


while r == 0.09:
    user_question = input('would you want to calculate again?')
    if user_question == 'yes':
        pv = int(input('please enter your loan value:'))
        n = int(input('please enter the  number of payments:'))
        p = (r*(pv)) / (1-(1+r)**(-n))
        print('Mr/Mrs', name, 'of', pv, 'is :', p)

    elif user_question == 'no':
        print('Thank you for using our service!')
        break
    else:
        if user_question != 'no' or user_question != 'yes':
            print("Invalid entry,Please answer yes or no:")
