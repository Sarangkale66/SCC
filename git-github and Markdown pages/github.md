# GITHUB Commands

### 1. Setup : 
list down all the following commands in command prompt for the git configuration globally,

```
git config --global user.name "name"
git config --global user.email "example@gmail.com"
git config --global core.editor "code --wait"
git config --global core.autocrlf "input"
git config --global -e
```

>---
>
>yaha <u style="background-color: green">--global</u> ye configurations ko windows / mac pe all over the operating system, applications ke environment me set karta hai
>
>---
<table border=black>
  <tr>
    <th>command list </th>
    <th>explaination</th>
  </tr>

  <tr>
    <td>git config --global user.name "${user_name}"</td>
    <td>set user name globally</td> 
  </tr>

  <tr>
      <td>git config --global user.email `${user_email}`</td>
    <td>set user email globally</td> 
  </tr>

  <tr>
    <td>git config --global core.editor "code --wait"</td>
    <td>set the git for respective code editor
    globally</td> 
  </tr>

  <tr>
    <td>git config --global core.autocrlf "input"</td>
    <td>set operating system configuration of ending of each line</td>
  </tr>
  </table>

>---
>koi bhi configuration ko edit karne ke liye ham niche dii gayi command ko use karte hai i.e,<br>
`git config --global -e`, <u style="color :crimson">Here **-e** stands for edit</u> <br>
jab ye command chalti hai tab ek naii window open hoti hai jo hame sare configurations ki jankari deti hai aur in configuration ko edit karke wapas save kar sakte hai, aur wo sare configurations save hoo jayenge <u>--globally </u>  
>
>---

## 2. Stages :
- Initialize the repository from Source Control option in vs-code. 
- there  are three types of stages for configuring the files 

  1. U - Untracked files
  2. A - Added files
  3. M - Modfied files  

>
> `U` - Untracked files wo files hoti hai jo git hub ko nahi pata hoti hai<br> 
> `A` - Added files wo files hoti hai jo git ko pata hoti hai<br> 
> `M` - Modified file wo files hoti hai jis me kuch modifications hua hota hai 

agar ham chahate hai ki hamri file ignore hoo jaye then ek file hoti hai  jis kaa naam hai

----------- 
> <p style="color:red">.gitignore</p> if you write the name of file inside of it with extension like,
>
-----------
```
padhai.txt
wallpaperflare.com_wallpaper (1).jpg
```
-----------
>then the file is going to ignore by the git
-------
In VS-code if you want to add the untrack file then simply go to the Source Control option and then select the untracked file and click on the + options in that selected files 
and your file is added 

if you want to commit your file or want to save the checkpoints then type the commit message and click on the commit button 

if you want to see all the commited files then type the following commands:

for single few line of information type

    git log --oneline

for detailed information type

    git log  

Type the following command for checking the stages in detailed:

    git status

Type the following command for only required stages information:

    git status -s


## 3. Reset
if I want to go back to the previous check points 
then we use the following command
```
git reset --Hard HEAD~(number_of_backward_steps)
```

this command will delete the previous commits / checkpoints

## 4. Revert
if I want to go back to the previous check points 
then we use the following command
```
git revert address_of_that_commit_message
```
this command is also able to delete the previous commit

## 5. Branch 
<u>**Story</u>:** Company A was the SAS company who just build their software for their customer, aabhi company A me ek employee hai sarang jisko project ka kaam mila hai, to sarang ne github pe repository ko banaya aur project ko finish kardiya and sathme github pe upload bhi kar diya with no error <br>
aab usko bola gaya ki ek naya feature add karo toh usne woh kiya main/master branch me ye hone ke baad aab jab project me error aaya to us project ne kaam karna band kar diya isski wajah se company ki reputation pe sawal uthaye gaye aur company ki market me bejjati ki gayi aur isske wajah se sarang ko job se nikal diya gaya<br>
issliye github ne branching kaa concept use kiya jata hai<br>
Agar sarang github me Branching kaa concept use karke kaam karta toh ye nahi hota isme ham employee ki ek branch banate hai aur waha code push karke check karte hai ki koi error toh nahi aaraha hai aur uske baad hi ham main / master branch me uss code ko merge karte hai

For making new Branch: we use the following command:
```
git branch __branch_name___
```
for checking the number of branches: we use the following command:
```
git branch
```
suppose we have the following branches: </br>
1. main/master branch
2. sarang_bk branch
3. prajwal_bk branch

har ek branch me ek employee kam kar raha hai. leader ko hi right hota hai ki woh ek branch se main branch me code merge kar sake
to pahile hame main branch me rahana compulsory hai to konsi bhi branch me switch karne ki command hai
```
git switch __branch_name__
```
and main branch me aane ke baad  merge karne ki command hai:
```
git merge __branch__name__
```

issme ek ayesi condition aati hai ki jab kisi branch ke ek file ki kisi bhi line number pe kuch  likha hai aur koi alag branch ke ussi same file me ussi line number pe kuch alag likha hai tab hame git puch hai ki main konse changes dalu
toh uss samay git hame options deta hai

- Accept Current Change
- Accept Incoming Change
- Accept Both Changes

koi bhi option select karne se ussi same line pe change dikh jayenge 

Techniques of Merge :
1. Fast Forward Merge
2. Threeway Merge
3. Squash Merging
4. Recursive strategy Merging
5. Rebase and merge

Deleting a Branch is done by following command:
```
git branch -D __branch__name
```

## 6. Stashing:
jab aap kisi branch mein kaam kar rahe hoo and aapne kuch code likha hai and aapne us code ko commit nahi kiya hai aur aap dusri branch me jaane ki koshish karte hoo toh git bolta hai saved nahi hai changes delete hoo jaayenge hum chahe to un changes ko delete hone de yaa fir un changes koo draft karlenge to wo changes nah hi delete honge nah hi add honge bas bich me kahi dale rahenge jab aap us branch mein jab waapas aaye to wo changes  waapas se apply kr skte ho

the following command are use:
```
git stash 
```
it draft those changes now you will be able to move to another branch.
<br>After getting back to your branch you are now able to apply the before saved draft by the following commands:
```
git stash apply
```

# Comman Steps: 
- ### Main banda folder and initail files banayega ab usse github par dal denga
  local system me file initialize karne ke baad aab uss bande koo github pe jaake repository banani hai and use apne us folder me wapas aana hai jaha usne file initailize ki thi
  aur waha ye commands type karni hai
  ~~~
  echo "# testingTest" >> README.md
  git init
  git add README.md
  git commit -m "first commit"
  git branch -M main
  git remote add origin https://github.com/Chekaj9022/testingTest.git
  git push -u origin main
  ~~~ 

  **copy all the above commands from git pallet**

- ### Collaborator add karenga
  Add the project collaborator from setting

  ![github image](./Screenshot%202024-05-14%20155157.png)

  and collaborator also has to accept the invitation in order to join in the project
- ### Sare bande us repository se clonning karenge
  we can clone the repository by the following command:
  ```
  git clone __url_of_repo__
  ```
  this will going to clone the repository as it was
- ### <b style="color:green">[ Very Important ]</b> Apni branch create karein 
  create the branch and switch using a single command as follows:
  ```
  git switch -C __branch_name__
  ```
  Now perform your work
- ### Apna code ussi branch me likhein
  write down your code and get ready for next step
- ### Complete hone par commit dein
  now commmit your changes by the following command 
  ```
  git commit -m "__message__"
  ```
- ### inform karein teammates ko about the commit
  Tell your teammetes about the last changes and commit
- ### Merger banda fetch karega and merge karega and re-push
  the person who want to get the changes uses the ***FETCH*** command as follows
  ```
  git fetch
  ```
  and it give the information about the new branch
  now switch to that branch and check the changes
  if you want to merge the changes you can by switching into main branch and follow the merge command
  ```
  git merge __branch_name__
  ```
  and again push the changes to the repository by the following command
  ```
  git push -u origin main
  ```
  all the teammates will use ***Fetch*** command and if it doesn't show the changes then it will use the following command:

  ```
  git pull
  ```

  and the all the steps are continue till the end of the project