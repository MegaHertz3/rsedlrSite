timer = False
while timer == False:
  inpt = str(input("Enter \'deploy\' to go live\n> "))
  if inpt.upper() == 'DEPLOY':
    timer = True
  else:
    print('\ninvalid command...\n\n')