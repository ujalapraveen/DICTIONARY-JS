




list=[2,4,8,3]
list2=[6,8,4,3]
i=-1
c=[]
while i>=(-len(list)):
    c.append(list[i])
    j=-1
    d=[]
    while j>=(-len(list2)):
        d.append(list2[j])
        j-=1
    i-=1
x=c
print(x)
y=d
print(y)

list3=[]
m=0
while m<len(x):
    list3.append(x[m]+y[m])
    m+=1
v=list3
print(v)
g=-1
b=[]
while  g>=(-len(v)):
    b.append(v[g])
    g-=1
print(b)





