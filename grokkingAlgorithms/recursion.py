# all recursive functions must have these TWO PARTS:
# - a BASE case
# - a RECURSIVE case
# the recursive case is when the function calls itself. the base case is when the
# function doesn't call itself again, so it doesn't go into an infinite loop!

# a simple example of recursion
def countdown(i):
    print(i)
    if i <= 1:
        return
        #base case
    else:
        countdown(i-1)
        #recursive case

# countdown(5)

# the call stack: where you computer saves variables for multiple functions. visually,
# the initial function is on the bottom, what is called next goes "on top", when it
# is returned, it's pulled off the top of the "stack" and the intial function can resume
# running. it might call another function, which would then also be placed on top, then
# removed. when there is nothing else to be called, you return from the initial function, too.

# example of the call stack in action!
def greet(name):
    print("hello " + name + "!") #runs first
    greet2(name) #runs second
    print("getting ready to say bye...") #runs third
    bye() #runs last

def greet2(name):
    print("how are you " + name + "?")

def bye():
    print("ok bye!")

# greet("horace")


# in a recursive function, the  calls pile on top of one another until the base case
# is reached. so there's not a 'one at a time addition and removal' as with the previous 
# non-recursive function. In recursion, no call is finished until the base case is reached, 
# then they're returned from top to bottom!

# simple recursive function to calculate factorials & examine the call stack:
def fact(x):
    if x == 1:
        return 1
        # base case!
    else:
        return  x * fact(x-1)
        # recursive case!

# print(fact(6))
