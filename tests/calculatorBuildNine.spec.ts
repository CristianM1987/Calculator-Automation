import { test, expect } from '@playwright/test';
import { variables } from '../pageObjects/variables.ts';

test('webOk', async ({ page }) => {

  await page.goto(variables.calculatorPage)
  await expect(page).toHaveTitle(/.*Basic Calculator/);
  
});

test('sum', async ({ page }) => {

  await page.goto(variables.calculatorPage)
  await page.locator(variables.buildCombo).selectOption('9')
  await page.fill(variables.firstNumber, '10')
  await page.locator(variables.secondNumber).fill("8")
  await page.locator(variables.operationCombo).selectOption('Add')
  await page.locator(variables.calculateButton).click()
  const resultado = page.locator(variables.answerTextBox)
  await expect(resultado).toHaveValue('18')
  
});

test('sumWithLetter', async ({ page }) => {

  await page.goto(variables.calculatorPage)
  await page.locator(variables.buildCombo).selectOption('9')
  await page.fill(variables.firstNumber, 'a')
  await page.locator(variables.secondNumber).fill("8")
  await page.locator(variables.operationCombo).selectOption('Add')
  await page.locator(variables.calculateButton).click()
  const resultado = page.locator(variables.answerTextBox)
  await expect(resultado).toHaveValue('')
  await page.waitForTimeout(1000);
  const actualMessage = await page.locator(variables.wrongEntry).textContent();
  await expect(actualMessage).toBe('Number 1 is not a number');
  await page.locator(variables.clearButton)
  await page.fill(variables.firstNumber, '2')
  await page.locator(variables.secondNumber).fill("t")
  await page.locator(variables.operationCombo).selectOption('Add')
  await page.locator(variables.calculateButton).click()
  const resultado2 = page.locator(variables.answerTextBox)
  await expect(resultado2).toHaveValue('')
  await page.waitForTimeout(1000);
  const actualMessage2 = await page.locator(variables.wrongEntry).textContent();
  await expect(actualMessage2).toBe('Number 2 is not a number');
});

test('rest', async ({ page }) => {

  await page.goto(variables.calculatorPage)
  await page.locator(variables.buildCombo).selectOption('9')
  await page.fill(variables.firstNumber, '10')
  await page.locator(variables.secondNumber).fill("8")
  await page.locator(variables.operationCombo).selectOption('Subtract')
  await page.locator(variables.calculateButton).click()
  const resultado = page.locator(variables.answerTextBox)
  await expect(resultado).toHaveValue('2')
  
});

test('restWithLetter', async ({ page }) => {

  await page.goto(variables.calculatorPage)
  await page.locator(variables.buildCombo).selectOption('9')
  await page.fill(variables.firstNumber, 'a')
  await page.locator(variables.secondNumber).fill("8")
  await page.locator(variables.operationCombo).selectOption('Subtract')
  await page.locator(variables.calculateButton).click()
  const resultado = page.locator(variables.answerTextBox)
  await expect(resultado).toHaveValue('')
  await page.waitForTimeout(1000);
  const actualMessage = await page.locator(variables.wrongEntry).textContent();
  await expect(actualMessage).toBe('Number 1 is not a number');
  await page.locator(variables.clearButton)
  await page.fill(variables.firstNumber, '2')
  await page.locator(variables.secondNumber).fill("t")
  await page.locator(variables.operationCombo).selectOption('Subtract')
  await page.locator(variables.calculateButton).click()
  const resultado2 = page.locator(variables.answerTextBox)
  await expect(resultado2).toHaveValue('')
  await page.waitForTimeout(1000);
  const actualMessage2 = await page.locator(variables.wrongEntry).textContent();
  await expect(actualMessage2).toBe('Number 2 is not a number');
});

test('multi', async ({ page }) => {

  await page.goto(variables.calculatorPage)
  await page.locator(variables.buildCombo).selectOption('9')
  await page.fill(variables.firstNumber, '10')
  await page.locator(variables.secondNumber).fill("8")
  await page.locator(variables.operationCombo).selectOption('Multiply')
  await page.locator(variables.calculateButton).click()
  const resultado = page.locator(variables.answerTextBox)
  await expect(resultado).toHaveValue('80')
  
});

test('multiWithLetter', async ({ page }) => {

  await page.goto(variables.calculatorPage)
  await page.locator(variables.buildCombo).selectOption('9')
  await page.fill(variables.firstNumber, 'a')
  await page.locator(variables.secondNumber).fill("8")
  await page.locator(variables.operationCombo).selectOption('Multiply')
  await page.locator(variables.calculateButton).click()
  const resultado = page.locator(variables.answerTextBox)
  await expect(resultado).toHaveValue('')
  await page.waitForTimeout(1000);
  const actualMessage = await page.locator(variables.wrongEntry).textContent();
  await expect(actualMessage).toBe('Number 1 is not a number');
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
});

test('division', async ({ page }) => {

  await page.goto(variables.calculatorPage)
  await page.locator(variables.buildCombo).selectOption('9')
  await page.fill(variables.firstNumber, '10')
  await page.locator(variables.secondNumber).fill("5")
  await page.locator(variables.operationCombo).selectOption('Divide')
  await page.locator(variables.calculateButton).click()
  const resultado = page.locator(variables.answerTextBox)
  await expect(resultado).toHaveValue('2')
  
});

test('divisionWithLetter', async ({ page }) => {

  await page.goto(variables.calculatorPage)
  await page.locator(variables.buildCombo).selectOption('9')
  await page.fill(variables.firstNumber, 'a')
  await page.locator(variables.secondNumber).fill("8")
  await page.locator(variables.operationCombo).selectOption('Divide')
  await page.locator(variables.calculateButton).click()
  const resultado = page.locator(variables.answerTextBox)
  await expect(resultado).toHaveValue('')
  await page.waitForTimeout(1000);
  const actualMessage = await page.locator(variables.wrongEntry).textContent();
  await expect(actualMessage).toBe('Number 1 is not a number');
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
});

test('concat', async ({ page }) => {

  await page.goto(variables.calculatorPage)
  await page.locator(variables.buildCombo).selectOption('9')
  await page.fill(variables.firstNumber, '10')
  await page.locator(variables.secondNumber).fill("5")
  await page.locator(variables.operationCombo).selectOption('Concatenate')
  await page.locator(variables.calculateButton).click()
  const resultadoconcat = page.locator(variables.answerTextBox)
  await expect(resultadoconcat).toHaveValue('105')
  await page.locator(variables.clearButton)
  await page.fill(variables.firstNumber, 'a')
  await page.locator(variables.secondNumber).fill("a")
  await page.locator(variables.operationCombo).selectOption('Concatenate')
  await page.locator(variables.calculateButton).click()
  const resultadoconcat2 = page.locator(variables.answerTextBox)
  await expect(resultadoconcat2).toHaveValue('aa')
});

test('clear', async ({ page }) => {

  await page.goto(variables.calculatorPage)
  await page.locator(variables.buildCombo).selectOption('9')
  await page.fill(variables.firstNumber, '10')
  await page.locator(variables.secondNumber).fill("5")
  await page.locator(variables.operationCombo).selectOption('Concatenate')
  await page.locator(variables.calculateButton).click()
  const resultado = page.locator(variables.answerTextBox)
  await expect(resultado).toHaveValue('105')
  await page.locator(variables.clearButton).click()
  await expect(resultado).toHaveValue('')
  
});

test('sumWithIntegrate', async ({ page }) => {

  await page.goto(variables.calculatorPage)
  await page.locator(variables.buildCombo).selectOption('9')
  await page.fill(variables.firstNumber, '10.5')
  await page.locator(variables.secondNumber).fill("8.4")
  await page.locator(variables.operationCombo).selectOption('Add')
  await page.locator(variables.integrateCheck).check()
  await page.locator(variables.calculateButton).click()
  const resultado = page.locator(variables.answerTextBox)
  await expect(resultado).toHaveValue('18')
  
});