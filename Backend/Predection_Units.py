#importing lib
import pandas as pd

#Reading csv data
blood_df=pd.read_csv("blood.csv")
#blood_df

#Blood units per person inserted using random
import random
from random import randint
units=[]
for i in range(blood_df.shape[0]):
    value = randint(1, 10)
    units.append(value)
blood_df["units"]=units
#blood_df

#Insert month in dataframe using random
months_t=["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"]
months_col=[]
for i in range(blood_df.shape[0]):
    months_col.append(random.choice(months_t))
blood_df["month_donation"]=months_col
#blood_df

#Create another dataframe for predection with all months associated blood groups
data={ "Bloodgp":["A+","A-","B+","B-","O+","O-","AB+","AB-"],
       "Jan":[0,0,0,0,0,0,0,0],
       "Feb":[0,0,0,0,0,0,0,0],
       "March":[0,0,0,0,0,0,0,0],
       "April":[0,0,0,0,0,0,0,0],
       "May":[0,0,0,0,0,0,0,0],
       "June":[0,0,0,0,0,0,0,0],
       "July":[0,0,0,0,0,0,0,0],
       "Aug":[0,0,0,0,0,0,0,0],
       "Sept":[0,0,0,0,0,0,0,0],
       "Oct":[0,0,0,0,0,0,0,0],
       "Nov":[0,0,0,0,0,0,0,0],
       "Dec":[0,0,0,0,0,0,0,0],
       "Sum":[0,0,0,0,0,0,0,0]
     }
data_total=pd.DataFrame(data)

#Assigning key as bloodgroup and value ID for future use
keyforgp={"A+":0,"A-":1,"B+":2,"B-":3,"O+":4,"O-":5,"AB+":6,"AB-":7}
#data_total

#Subset of main dataframe to use efficiently
blood_df2=blood_df[["blood_group","month_donation","units"]]
#blood_df2

#Assigning all units blood to new dataframe which created earlier
for i in range(blood_df2.shape[0]):
    data_total[blood_df2['month_donation'][i]][keyforgp[blood_df2['blood_group'][i]]]+=blood_df2["units"][i]
#data_total


#Calculating sum
for j in range(8):
    for i in months_t:
        data_total["Sum"][j]+=data_total[i][j]
    j=j+1

Bloodgp_id=[0,1,2,3,4,5,6,7]
data_total["Bloodgp_id"]=Bloodgp_id
#data_total

#--------------------------

# PREDICTING UNITS OF BLOOD
#Time analysis
#months_t=["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"]
#input('enter month from ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"]   :')
months_d={1:"Jan",2:"Feb",3:"March",4:"April",5:"May",6:"June",7:"July",8:"Aug",9:"Sept",10:"Oct",11:"Nov",12:"Dec"}
from datetime import date
current_date = date.today()
# printing the current date
#print("Current date: ", current_date)
# extracting the current year, month and day
#print("Current year:", current_date.year)
#print("Current month:", current_date.month)
#print("Current day:", current_date.day)
current_month=current_date.month
current_month=months_d[current_month]
#print(current_month)
if current_month in months_t:
    months_t.remove(current_month)
#print(months_t)

#Import sklearn for model
from sklearn import linear_model
import math
#keyforgp={"A+":0,"A-":1,"B+":2,"B-":3,"O+":4,"O-":5,"AB+":6,"AB-":7}
indep_value=[i for i in months_t]
indep_value.insert(0,"Bloodgp_id")
#print(indep_value)
reg=linear_model.LinearRegression()
reg.fit(data_total[indep_value],data_total[current_month])
#print(reg.coef_)
#print(reg.intercept_)
print(current_month)
keys=["A+","A-","B+","B-","O+","O-","AB+","AB-"]
sum_next=0
for i in range(8):
        values=[i]
        #values=[keyforgp[input('enter blood group from ["A+","A-","B+","B-","O+","O-","AB+","AB-"]: ')]]
        for k in range(11):
            #values.append(int(input("Blood_Units "+str(k)+": ")))
            values.append(randint(1, 10))
        sum_next+=math.ceil(reg.predict([values]))
        print(keys[i]+" had unit: "+str(abs(math.ceil(reg.predict([values])))))

print("total units: "+ str(abs(sum_next)))
