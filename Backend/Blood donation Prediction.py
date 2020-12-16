#!/usr/bin/env python
# coding: utf-8

# In[1]:


import pandas as pd
import numpy as np
dataset=pd.read_csv(r"blood.csv")

x=dataset.iloc[:,:-1]
y=dataset.iloc[:,10]


# In[2]:


x


# In[3]:


from sklearn.preprocessing import LabelEncoder
labelencoder_x=LabelEncoder()
x=x.apply(LabelEncoder().fit_transform)


# In[4]:


x


# In[5]:


from sklearn.tree import DecisionTreeClassifier
Reg = DecisionTreeClassifier()


# In[6]:


Reg.fit(x,y)


# In[7]:


dataset2=pd.read_csv(r"bloodtest.csv")
x1=dataset2.iloc[:,:]
#get = https://gfmd1.sse.codesandbox.io/
BGROUP = "A-"
from sklearn.preprocessing import LabelEncoder
labelencoder_x=LabelEncoder()
x1=x1.apply(LabelEncoder().fit_transform)


# In[8]:


predTree = Reg.predict(x1)


# In[9]:


predTree


# In[10]:


y


# In[11]:


for i in range(90):
    if(predTree[i]=="Yes" and dataset2['blood_group'][i] == BGROUP):
        print(dataset2['id'][i],dataset2['name'][i],dataset2['gender'][i],dataset2['blood_last_donated'][i])


# In[ ]:





# In[ ]:




