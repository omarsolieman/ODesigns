# #Exercise 1
# n1=int(input('Enter a number :'))
# n2=int(input('Enter another one :'))

# n3=input('A sum for M for Multiple:' )
# if n3 =='A':
#     print(n1+n2)
# elif n3 == 'M':
#     print(n1*n2)
# else:
#     print('Invalid choice')
#     pass

# #question2
# h=float(input('enter the height of rectangle: '))
# w=float(input('enter the width of the rectangle: '))

# ans=input('Enter A for Area and M for perimeter: ')
# if ans =='A':
#     print(h*w,'cm^2')
# elif  ans == 'M':
#     print(2*h+2*w, 'cm')
# else:
#     print('invalid choice')
#     pass



w = float(input('Weight in kilograms: '))
h = float(input('Height in meters: '))
         
BMI = w/(h*h)
if BMI < 18.5:
    category = 'Underweight'
elif BMI < 25:
    category = 'Normal'
elif BMI < 30:
             
    category = '0verweight'
else:
    category = 'obesity'
print(f'Your BMI is: {BMI}')
print(f'you are currently: {category}')