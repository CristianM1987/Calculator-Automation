import { test, expect } from '@playwright/test';
import { variables } from '../pageObjects/variables.ts';

test('webOk', async ({ page }) => {

  await page.goto(variables.calculatorPage)
  await expect(page).toHaveTitle(/.*Basic Calculator/);
  
});

test('sum', async ({ page }) => {

  await page.goto(variables.calculatorPage)
  await page.locator(variables.buildCombo).selectOption('3')
  await page.fill(variables.firstNumber, '10')
  await page.locator(variables.secondNumber).fill("8")
  await page.locator(variables.operationCombo).selectOption('Add')
  await page.locator(variables.calculateButton).click()
  let resultado = await page.locator(variables.answerTextBox).inputValue()
  console.log('el resultado de sum es ', resultado)
  await expect(resultado).toBe('18')
  
});

test('sumWithLetter', async ({ page }) => {

  await page.goto(variables.calculatorPage)
  await page.locator(variables.buildCombo).selectOption('3')
  await page.fill(variables.firstNumber, 'a')
  await page.locator(variables.secondNumber).fill("8")
  await page.locator(variables.operationCombo).selectOption('Add')
  await page.locator(variables.calculateButton).click()
  const resultado = page.locator(variables.answerTextBox)
  await expect(resultado).toHaveValue('')
  await page.waitForTimeout(1000);
  const actualMessage = await page.locator(variables.wrongEntry).textContent()
  await expect(actualMessage).toBe('Number 1 is not a number');
  console.log('El mensaje de error es',actualMessage)
  await page.locator(variables.clearButton)
  await page.fill(variables.firstNumber, '2')
  await page.locator(variables.secondNumber).fill("t")
  await page.locator(variables.operationCombo).selectOption('Add')
  await page.locator(variables.calculateButton).click()
  const resultado2 = page.locator(variables.answerTextBox)
  await expect(resultado2).toHaveValue('')
  await page.waitForTimeout(1000);
  const actualMessage2 = await page.locator(variables.wrongEntry).textContent()
  await expect(actualMessage2).toBe('Number 2 is not a number');
  console.log('El mensaje de error es',actualMessage2)
});

test('rest', async ({ page }) => {

  await page.goto(variables.calculatorPage)
  await page.locator(variables.buildCombo).selectOption('3')
  await page.fill(variables.firstNumber, '10')
  await page.locator(variables.secondNumber).fill("8")
  await page.locator(variables.operationCombo).selectOption('Subtract')
  await page.locator(variables.calculateButton).click()
  const resultado = await page.locator(variables.answerTextBox).inputValue()
  console.log('el resultado de rest es ', resultado)
  await expect(resultado).toBe('2')
  
});

test('restWithLetter', async ({ page }) => {

  await page.goto(variables.calculatorPage)
  await page.locator(variables.buildCombo).selectOption('3')
  await page.fill(variables.firstNumber, 'a')
  await page.locator(variables.secondNumber).fill("8")
  await page.locator(variables.operationCombo).selectOption('Subtract')
  await page.locator(variables.calculateButton).click()
  const resultado = page.locator(variables.answerTextBox)
  await expect(resultado).toHaveValue('')
  await page.waitForTimeout(1000);
  const actualMessage = await page.locator(variables.wrongEntry).textContent()
  console.log('el mensaje de restWithLetter es ', actualMessage)
  await expect(actualMessage).toBe('Number 1 is not a number');
  await page.locator(variables.clearButton)
  await page.fill(variables.firstNumber, '2')
  await page.locator(variables.secondNumber).fill("t")
  await page.locator(variables.operationCombo).selectOption('Subtract')
  await page.locator(variables.calculateButton).click()
  const resultado2 = page.locator(variables.answerTextBox)
  await expect(resultado2).toHaveValue('')
  await page.waitForTimeout(1000);
  const actualMessage2 = await page.locator(variables.wrongEntry).textContent()
  await expect(actualMessage2).toBe('Number 2 is not a number');
  console.log('el mensaje de restWithLetter es ', actualMessage2)
});

test('multi', async ({ page }) => {

  await page.goto(variables.calculatorPage)
  await page.locator(variables.buildCombo).selectOption('3')
  await page.fill(variables.firstNumber, '10')
  await page.locator(variables.secondNumber).fill("8")
  await page.locator(variables.operationCombo).selectOption('Multiply')
  await page.locator(variables.calculateButton).click()
  const resultado = await page.locator(variables.answerTextBox).inputValue()
  await expect(resultado).toBe('80')
  console.log('el resultado de multi es ', resultado)
  
});

test('multiWithLetter', async ({ page }) => {

  await page.goto(variables.calculatorPage)
  await page.locator(variables.buildCombo).selectOption('3')
  await page.fill(variables.firstNumber, 'a')
  await page.locator(variables.secondNumber).fill("8")
  await page.locator(variables.operationCombo).selectOption('Multiply')
  await page.locator(variables.calculateButton).click()
  const resultado = page.locator(variables.answerTextBox)
  await expect(resultado).toHaveValue('')
  await page.waitForTimeout(1000);
  const actualMessage = await page.locator(variables.wrongEntry).textContent();
  await expect(actualMessage).toBe('Number 1 is not a number');
  console.log('el mensaje de multiWithLetter es ', actualMessage)
  await page.locator(variables.clearButton)
  await page.fill(variables.firstNumber, '2')
  await page.locator(variables.secondNumber).fill("t")
  await page.locator(variables.operationCombo).selectOption('Multiply')
  await page.locator(variables.calculateButton).click()
  const resultado2 = page.locator(variables.answerTextBox)
  await expect(resultado2).toHaveValue('')
  await page.waitForTimeout(1000);
  const actualMessage2 = await page.locator(variables.wrongEntry).textContent();
  await expect(actualMessage2).toBe('Number 2 is not a number');
  console.log('el mensaje de multiWithLetter 2 es ', actualMessage2)
});

test('division', async ({ page }) => {

  await page.goto(variables.calculatorPage)
  await page.locator(variables.buildCombo).selectOption('3')
  await page.fill(variables.firstNumber, '10')
  await page.locator(variables.secondNumber).fill("5")
  await page.locator(variables.operationCombo).selectOption('Divide')
  await page.locator(variables.calculateButton).click()
  const resultado = await page.locator(variables.answerTextBox).inputValue()
  await expect(resultado).toBe('2')
  console.log('el resultado de division es ', resultado)
  
});

test('divisionWithLetter', async ({ page }) => {

  await page.goto(variables.calculatorPage)
  await page.locator(variables.buildCombo).selectOption('3')
  await page.fill(variables.firstNumber, 'a')
  await page.locator(variables.secondNumber).fill("8")
  await page.locator(variables.operationCombo).selectOption('Divide')
  await page.locator(variables.calculateButton).click()
  const resultado = page.locator(variables.answerTextBox)
  await expect(resultado).toHaveValue('')
  await page.waitForTimeout(1000);
  const actualMessage = await page.locator(variables.wrongEntry).textContent();
  await expect(actualMessage).toBe('Number 1 is not a number');
  console.log('el mensaje de divisionWithLetter es ', actualMessage)
  await page.locator(variables.clearButton)
  await page.fill(variables.firstNumber, '2')
  await page.locator(variables.secondNumber).fill("t")
  await page.locator(variables.operationCombo).selectOption('Divide')
  await page.locator(variables.calculateButton).click()
  const resultado2 = page.locator(variables.answerTextBox)
  await expect(resultado2).toHaveValue('')
  await page.waitForTimeout(1000);
  const actualMessage2 = await page.locator(variables.wrongEntry).textContent();
  await expect(actualMessage2).toBe('Number 2 is not a number');
  console.log('el mensaje de divisionWithLetter 2 es ', actualMessage2)
});

test('concat', async ({ page }) => {

  await page.goto(variables.calculatorPage)
  await page.locator(variables.buildCombo).selectOption('3')
  await page.fill(variables.firstNumber, '10')
  await page.locator(variables.secondNumber).fill("5")
  await page.locator(variables.operationCombo).selectOption('Concatenate')
  await page.locator(variables.calculateButton).click()
  const resultadoconcat = await page.locator(variables.answerTextBox).inputValue()
  await expect(resultadoconcat).toBe('105')
  console.log('el resultado de concat es ', resultadoconcat)
  await page.locator(variables.clearButton)
  await page.fill(variables.firstNumber, 'a')
  await page.locator(variables.secondNumber).fill("a")
  await page.locator(variables.operationCombo).selectOption('Concatenate')
  await page.locator(variables.calculateButton).click()
  const resultadoconcat2 = await page.locator(variables.answerTextBox).inputValue()
  await expect(resultadoconcat2).toBe('aa')
  console.log('el resultado de concat 2 es ', resultadoconcat2)
});

test('clear', async ({ page }) => {

  await page.goto(variables.calculatorPage)
  await page.locator(variables.buildCombo).selectOption('3')
  await page.fill(variables.firstNumber, '10')
  await page.locator(variables.secondNumber).fill("5")
  await page.locator(variables.operationCombo).selectOption('Concatenate')
  await page.locator(variables.calculateButton).click()
  const resultado = await page.locator(variables.answerTextBox).inputValue()
  await expect(resultado).toBe('105')
  await page.locator(variables.clearButton).click()
  const resultado2 = await page.locator(variables.answerTextBox).inputValue()
  await expect(resultado2).toHaveLength(0)
  console.log('el resultado de clear es', resultado2)
  
});

test('sumWithIntegrate', async ({ page }) => {

  await page.goto(variables.calculatorPage)
  await page.locator(variables.buildCombo).selectOption('3')
  await page.fill(variables.firstNumber, '10.5')
  await page.locator(variables.secondNumber).fill("8.4")
  await page.locator(variables.operationCombo).selectOption('Add')
  await page.locator(variables.integrateCheck).check()
  await page.locator(variables.calculateButton).click()
  const resultado = await page.locator(variables.answerTextBox).inputValue()
  await expect(resultado).toBe('18')
  console.log('el resultado de sumWithIntegrate es', resultado)
  
});

test('divisionWithZero', async ({ page }) => {

  await page.goto(variables.calculatorPage)
  await page.locator(variables.buildCombo).selectOption('3')
  await page.fill(variables.firstNumber, '0')
  await page.locator(variables.secondNumber).fill("0")
  await page.locator(variables.operationCombo).selectOption('Divide')
  await page.locator(variables.calculateButton).click()
  const msjDivisionZero = await page.locator(variables.wrongEntry).textContent();
  await expect(msjDivisionZero).toBe('Divide by zero error!');
  console.log('el resultado de division por 0 es ', msjDivisionZero)
  
});