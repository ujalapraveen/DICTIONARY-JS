# list=[1,2,3,4,7,8]
# i=0
# a=[]
# b=[]
# while i<len(list):
#     if list in list[i]:
#         a.append([i])
#         a.append(list[i+1])
#         b.append(a)
#     i+=2
# print(b)


# list=[1,2,3,4,7,8]
# i=0
# a=[]
# while i<len(list)-1:
#     c=[]
#     c.append(list[i])
#     c.append(list[i+1])
#     a.append(c)
#     i=i+2
# print(a)
    


# num=1234
# n=str(num)
# s=""
# i=1
# while i<=len(n):
#     a=(n[-i])
#     s=s+a
#     i+=1
# print(int(s))
 




# num=1234
# n=str(num)
# s=""
# i=1
# while i<=len(n):
#     a=(n[-i])
#     s=s+a
#     i+=1
# print(int(s))

# def even(num):
#     if num>9:
#         i=0
#         s=0
#         while i<num:
#             rem=num%10
#             s=s+rem
#             num=num//10
#         return even(s)
#     else:
#         if num%2==0:
#             print("very even",num)
#         else:
#             print("not even",num)
# even(num=int(input("enter a num =")))

myDict= {
    1: 'NAVGURUKUL',
    2: 'IN',
    3:{  
         'A' : 'WELCOME',
         'B' : 'To',
         'C' : 'DHARAMSALA'
        }
    }

# d = { 'title': 'Nested Dictionary Python',
#       'lang': {'name':'python', 'version': '3.+'}}
