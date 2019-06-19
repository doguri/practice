// calculator.groovy

import groovy.swing.SwingBuilder
import javax.swing.*
import java.awt.*

def GUI = new CalcGUI();

public class CalcGUI {

  def swing = new SwingBuilder();

  float accumulator = 0;
  def entry = "";
  def operator = "";
  def stage = "";

  def inputNumber = {
    //...update clear button...
    if (entry == "") {
      swing.clearbutton.setText("CE");
    }
    //...set number...
    if ((entry == "") || (entry == "0")) {
      entry = it;
    } else if ((it == ".") && (entry.contains("."))) {
      return;
    } else {
      entry += it;
    }
    swing.display.text = entry;
  }

  def inputOperator = {
    if (swing.display.text == "") {
      display("0");
    }
    //...update clear button...
    if (entry == "") {
      swing.clearbutton.setText("CE");
    }
    //...set operator...
    if (it != "") {
      operator = it;
    }
    if (entry != "") {
      accumulator = entry.toFloat();
    }
    entry = "";
  }

  def fnSign = {
    if (swing.display.text == "") {
      display("0");
    }
    if (swing.display.text == "0") {
      return;
    }
    if (entry == "") {
      entry = swing.display.text;
    }
    if (entry.startsWith("-")) {
      entry = entry.subSequence(1, entry.length());
    } else {
      entry = "-" + entry;
    }
    display(entry);
  }

  def fnPercent = {
    if (swing.display.text == "") {
      display("0");
    }
    if (swing.display.text == "") {
      return;
    }
    if (entry == "") {
      entry = swing.display.text;
    }
    float percent = entry.toFloat() / 100;
    entry = percent.toString();
    display(entry);
  }

  //...actions.................................................................

  def calculate = {
    if (operator == "") {
      return;
    }
    if (operator == "+") {
      accumulator += entry.toFloat();
    }
    if (operator == "-") {
      accumulator -= entry.toFloat();
    }
    if (operator == "*") {
      accumulator *= entry.toFloat();
    }
    if (operator == "/") {
      accumulator /= entry.toFloat();
    }
    display(accumulator.toString());
    operator = "";
    entry = "";
  }

  def clear = {
    if (entry == "") {
      accumulator = 0;
      operator = "";
      swing.clearbutton.setText("CE");
    } else {
      entry = "";
      swing.clearbutton.setText("C");
    }
    swing.display.text = "0";
  }

  def display = {
    if (it.endsWith(".0")) {
      swing.display.text = it.subSequence(0, it.length() - 2);
    } else {
      swing.display.text = it;
    }
  }

  //---------------------------------------------------------------------------

  def frameButtons = {
    swing.panel(
      layout:new BorderLayout(), constraints:BorderLayout.NORTH) {
      textField(
        text:"0",
        id:"display", columns:20, horizontalAlignment:JLabel.RIGHT
      );
    }
    swing.panel(
      id:"buttons", layout:new GridBagLayout(), constraints:BorderLayout.CENTER) {

      //...number buttons.....................................................

      button(
        text: "1",
        background: java.awt.Color.LIGHT_GRAY,
        constraints: gbc(gridx: 0, gridy: 3, ipadx: 26, ipady: 8, fill: 1),
        actionPerformed: { inputNumber("1") }
      );
      button(
        text: "2",
        background: java.awt.Color.LIGHT_GRAY,
        constraints: gbc(gridx: 1, gridy: 3, ipadx: 26, ipady: 8, fill: 1),
        actionPerformed: { inputNumber("2") }
      );
      button(
        text: "3",
        background: java.awt.Color.LIGHT_GRAY,
        constraints: gbc(gridx: 2, gridy: 3, ipadx: 26, ipady: 8, fill: 1),
        actionPerformed: { inputNumber("3"); }
      );
      button(
        text: "4",
        background: java.awt.Color.LIGHT_GRAY,
        constraints: gbc(gridx: 0, gridy: 2, ipadx: 26, ipady: 8, fill: 1),
        actionPerformed :{ inputNumber("4"); }
      );
      button(
        text: "5",
        background: java.awt.Color.LIGHT_GRAY,
        constraints: gbc(gridx: 1, gridy: 2, ipadx: 26, ipady: 8, fill: 1),
        actionPerformed: { inputNumber("5"); }
      );
      button(
        text: "6",
        background: java.awt.Color.LIGHT_GRAY,
        constraints: gbc(gridx: 2, gridy: 2, ipadx: 26, ipady: 8, fill: 1),
        actionPerformed: { inputNumber("6"); }
      );
      button(
        text: "7",
        background: java.awt.Color.LIGHT_GRAY,
        constraints: gbc(gridx: 0, gridy: 1, ipadx: 26, ipady: 8, fill: 1),
        actionPerformed: { inputNumber("7"); }
      );
      button(
        text: "8",
        background: java.awt.Color.LIGHT_GRAY,
        constraints: gbc(gridx: 1, gridy: 1, ipadx: 26, ipady: 8, fill: 1),
        actionPerformed: { inputNumber("8"); }
      );
      button(
        text: "9",
        background: java.awt.Color.LIGHT_GRAY,
        constraints: gbc(gridx: 2, gridy: 1, ipadx: 26, ipady: 8, fill: 1),
        actionPerformed: { inputNumber("9"); }
      );
      button(
        text: "0",
        background: java.awt.Color.LIGHT_GRAY,
        constraints: gbc(gridx: 0, gridy: 4, ipadx: 26, ipady: 8, fill: 1, gridwidth: 2),
        actionPerformed: { inputNumber("0"); }
      );
      button(
        text: ".",
        background: java.awt.Color.LIGHT_GRAY,
        constraints: gbc(gridx: 2, gridy: 4, ipadx: 26, ipady: 8, fill: 1),
        actionPerformed: { inputNumber("."); }
      );

      //...operator buttons....................................................

      button(
        text: "/",
        background: java.awt.Color.ORANGE,
        constraints: gbc(gridx: 3, gridy: 0, ipadx: 26, ipady: 8, fill: 1),
        actionPerformed: { inputOperator("/"); }
      );
      button(
        text: "*",
        background: java.awt.Color.ORANGE,
        constraints: gbc(gridx: 3, gridy: 1, ipadx: 26, ipady: 8, fill: 1),
        actionPerformed: { inputOperator("*"); }
      );
      button(
        text: "-",
        background: java.awt.Color.ORANGE,
        constraints: gbc(gridx: 3, gridy: 2, ipadx: 26, ipady: 8, fill: 1),
        actionPerformed: { inputOperator("-"); }
      );
      button(
        text: "+",
        background: java.awt.Color.ORANGE,
        constraints: gbc(gridx: 3, gridy: 3, ipadx: 26, ipady: 8, fill: 1),
        actionPerformed: { inputOperator("+"); }
      );

      //...function buttons....................................................

      button(
        text: "+/-",
        background: java.awt.Color.GRAY,
        constraints: gbc(gridx: 1, gridy: 0, ipadx: 26, ipady: 8, fill: 1),
        actionPerformed: { fnSign(); }
      )
      button(
        text: "%",
        background: java.awt.Color.GRAY,
        constraints: gbc(gridx: 2, gridy: 0, ipadx: 26, ipady: 8, fill: 1),
        actionPerformed: { fnPercent(); }
      );

      //...action buttons......................................................

      button(
        text: "=",
        background: java.awt.Color.ORANGE,
        constraints: gbc(gridx: 3, gridy: 4, ipadx: 26, ipady: 8, fill: 1),
        actionPerformed: { calculate(); }
      );
      button(
        id: "clearbutton",
        text: "CE",
        foreground: java.awt.Color.WHITE,
        background: java.awt.Color.RED,
        constraints: gbc(gridx: 0, gridy: 0, ipadx: 26, ipady: 8, fill: 1, weightx: 1),
        actionPerformed: { clear(); }
      );
    }
  }

  def frameMenu = {
    swing.menuBar() {
      menu(text: "File", mnemonic: "F") {
        menuItem(text: "Exit", mnemonic: "X", actionPerformed: { System.exit(0); })
      }
    }
  }

  def frame = swing.frame(
    defaultCloseOperation: JFrame.EXIT_ON_CLOSE,
    title: "Calc", size: [295, 250], show: true, locationRelativeTo: null) {
    frameMenu();
    frameButtons();
  }

}
