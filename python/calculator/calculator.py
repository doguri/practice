# calc.py
#
#

from Tkinter import *
import time

fontLarge=("Courier New",20)

btnHt="2"
btnHt="2"
btnWd="7"

colorGray="#888888"
colorLightGray="#aaaaaa"
colorBlack="#111111"
colorOrange="#eea500"
colorRed="#aa2222"
colorWhite="#eeeeee"

rows="4"
cols="5"

accumulator=0
entry=""
operator=""

#------------------------------------------------------------------------------

def inputNumber(s): 
  global entry
  global accumulator
  #...update clear button...
  if (entry == ""):
    btnClear["text"]="CE"
  #...handle leading zero...
  if (entry == "0"):
    entry=""
  #...handle decimal...
  if (s == "."):
    if ("." in entry):
      return
  #...update number...
  entry += str(s)
  display.set(entry)

def inputOperator(s): 
  global accumulator
  global entry
  global operator
  #...blink display to acknowledge operator...
  temp=str(display.get())
  display.set("")
  gui.update()
  time.sleep(0.1)
  actionDisplay(temp)
  if (entry == ""):
    btnClear["text"]="CE"
  #...set operator...
  if (operator != ""):
    operator=str(s)
    return
  operator=str(s)
  if (entry != ""):
    accumulator=float(entry)
  entry="";

#...functions..................................................................

def fnSign():
  global entry
  if (entry == ""):
    entry=str(display.get())
  entry=str(float(entry)*-1)
  actionDisplay(str(entry))

def fnPercent():
  global entry
  if (str(display.get()) == "0.0"):
    return
  if (entry == ""):
    entry=str(display.get())
  entry=str(float(entry)/100)
  actionDisplay(entry)

#...actions....................................................................

def actionCalculate(): 
  global accumulator
  global entry
  global operator
  try:
    if (operator == "+"):
      accumulator += float(entry)
      operator=""
    if (operator == "-"):
      accumulator -= float(entry)
      operator=""
    if (operator == "*"):
      accumulator *= float(entry)
      operator=""
    if (operator == "/"):
      accumulator /= float(entry)
      operator=""
    entry=str(accumulator)
    actionDisplay(str(accumulator))
    entry=""
  except:
    entry=""

def actionClear():
  global accumulator
  global entry
  global operator
  if (entry == ""):
    accumulator=0
    operator=""
    btnClear["text"]="CE"
  else:
    entry=""
    btnClear["text"]="C"
  actionDisplay("0")

def actionDisplay(s):
  global accumulator
  global entry
  global operator
  if (s.endswith(".0")):
    display.set(s[:-2])
  else:
    display.set(s)

#------------------------------------------------------------------------------

if __name__ == "__main__": 

  gui=Tk()
  gui.configure(background=colorLightGray)
  gui.title("Calc")
  gui.geometry(str(60*rows)+"x"+str(40*cols))

  display=DoubleVar()
  blank=""

  display_field=Entry(
    gui,
    font=fontLarge,justify="right",width=14,
    textvariable=display
  )
  display_field.grid(columnspan=4,ipadx=2)

  display.set("0")

  #...number buttons...........................................................

  btn1=Button(
    gui,text="1",
    fg=colorBlack,bg=colorLightGray,height=btnHt,width=btnWd,
    command=lambda:inputNumber("1")
  )
  btn1.grid(row=5,column=0)

  btn2=Button(
    gui,text="2",
    fg=colorBlack,bg=colorLightGray,height=btnHt,width=btnWd,
    command=lambda:inputNumber("2")
  )
  btn2.grid(row=5,column=1)

  bnt3=Button(
    gui,text="3",
    fg=colorBlack,bg=colorLightGray,height=btnHt,width=btnWd,
    command=lambda:inputNumber("3")
  )
  bnt3.grid(row=5,column=2)

  btn4=Button(
    gui,text="4",
    fg=colorBlack,bg=colorLightGray,height=btnHt,width=btnWd,
    command=lambda:inputNumber("4")
  )
  btn4.grid(row=4,column=0)

  btn5=Button(
    gui,text="5",
    fg=colorBlack,bg=colorLightGray,height=btnHt,width=btnWd,
    command=lambda:inputNumber("5")
  )
  btn5.grid(row=4,column=1)

  btn6=Button(
    gui,text="6",
    fg=colorBlack,bg=colorLightGray,height=btnHt,width=btnWd,
    command=lambda:inputNumber("6")
  )
  btn6.grid(row=4,column=2)

  btn7=Button(
    gui,text="7",
    fg=colorBlack,bg=colorLightGray,height=btnHt,width=btnWd,
    command=lambda:inputNumber("7")
  )
  btn7.grid(row=3,column=0)

  btn8=Button(
    gui,text="8",
    fg=colorBlack,bg=colorLightGray,height=btnHt,width=btnWd,
    command=lambda:inputNumber("8")
  )
  btn8.grid(row=3,column=1)

  btn9=Button(
    gui,text="9",
    fg=colorBlack,bg=colorLightGray,height=btnHt,width=btnWd,
    command=lambda:inputNumber("9")
  )
  btn9.grid(row=3,column=2)

  btn0=Button(
    gui,text="0",
    fg=colorBlack,bg=colorLightGray,height=btnHt,width=str(int(btnWd)*2),
    command=lambda:inputNumber("0")
  )
  btn0.grid(row=6,column=0,columnspan=2,ipadx=5)

  btnDecimal=Button(
    gui,text=".",
    fg=colorBlack,bg=colorLightGray,height=btnHt,width=btnWd,
    command=lambda:inputNumber(".")
  )
  btnDecimal.grid(row=6,column=2)

  #...operator buttons.........................................................

  btnDivision=Button(
    gui,text="/",
    fg=colorBlack,bg=colorOrange,height=btnHt,width=btnWd,
    command=lambda:inputOperator("/")
  )
  btnDivision.grid(row=2,column=3)

  btnMultiply=Button(
    gui,text="*",
    fg=colorBlack,bg=colorOrange,height=btnHt,width=btnWd,
    command=lambda:inputOperator("*")
  )
  btnMultiply.grid(row=3,column=3)

  btnSubtract=Button(
    gui,text="-",
    fg=colorBlack,bg=colorOrange,height=btnHt,width=btnWd,
    command=lambda:inputOperator("-")
  )
  btnSubtract.grid(row=4,column=3)

  btnAdd=Button(
    gui,text="+",
    fg=colorBlack,bg=colorOrange,height=btnHt,width=btnWd,
    command=lambda:inputOperator("+")
  )
  btnAdd.grid(row=5,column=3)

  #...function buttons.........................................................

  btnSign=Button(
    gui,text="+/-",
    fg=colorBlack,bg=colorGray,height=btnHt,width=btnWd,
    command=lambda:fnSign()
  )
  btnSign.grid(row=2,column=1)

  btnPercent=Button(
    gui,text="%",
    fg=colorBlack,bg=colorGray,height=btnHt,width=btnWd,
    command=lambda:fnPercent()
  )
  btnPercent.grid(row=2,column=2)

  #...action buttons...........................................................

  btnEquals=Button(
    gui,text="=",
    fg=colorBlack,bg=colorOrange,height=btnHt,width=btnWd,
    command=actionCalculate
  )
  btnEquals.grid(row=6,column=3)

  btnClear=Button(
    gui,text="CE",
    fg=colorWhite,bg=colorRed,height=btnHt,width=btnWd,
    command=actionClear
  )
  btnClear.grid(row=2,column="0")

  #...main.....................................................................

  gui.mainloop()

