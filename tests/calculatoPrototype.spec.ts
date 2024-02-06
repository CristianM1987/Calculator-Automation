import { test, expect } from '@playwright/test';
import { variables } from '../pageObjects/variables.ts';

test('webOk', async ({ page }) => {

  await page.goto(variables.calculatorPage)
  await expect(page).toHaveTitle(/.*Basic Calculator/);
  
});

test('sum', async ({ page }) => {

  await page.goto(variables.calculatorPage)
  await page.fill(variables.firstNumber, '10')
  await page.locator(variables.secondNumber).fill("8")
  await page.locator(variables.operationCombo).selectOption('Add')
  //await expect(opCombo).toHaveValues(['Add'])
  await page.locator(variables.calculateButton).click()
  const resultado = await page.locator(variables.answerTextBox)
  await expect(resultado).toHaveValue('18')
  
});

test('rest', async ({ page }) => {

  await page.goto(variables.calculatorPage)
  await page.fill(variables.firstNumber, '10')
  await page.locator(variables.secondNumber).fill("8")
  await page.locator(variables.operationCombo).selectOption('Subtract')
  await page.locator(variables.calculateButton).click()
  const resultado = await page.locator(variables.answerTextBox)
  await expect(resultado).toHaveValue('2')
  
});

test('multi', async ({ page }) => {

  await page.goto(variables.calculatorPage)
  await page.fill(variables.firstNumber, '10')
  await page.locator(variables.secondNumber).fill("8")
  await page.locator(variables.operationCombo).selectOption('Multiply')
  await page.locator(variables.calculateButton).click()
  const resultado = await page.locator(variables.answerTextBox)
  await expect(resultado).toHaveValue('80')
  
});

test('division', async ({ page }) => {

  await page.goto(variables.calculatorPage)
  await page.fill(variables.firstNumber, '10')
  await page.locator(variables.secondNumber).fill("5")
  await page.locator(variables.operationCombo).selectOption('Divide')
  await page.locator(variables.calculateButton).click()
  const resultado = await page.locator(variables.answerTextBox)
  await expect(resultado).toHaveValue('2')
  
});

test('concat', async ({ page }) => {

  await page.goto(variables.calculatorPage)
  await page.fill(variables.firstNumber, '10')
  await page.locator(variables.secondNumber).fill("5")
  await page.locator(variables.operationCombo).selectOption('Concatenate')
  await page.locator(variables.calculateButton).click()
  const resultado = await page.locator(variables.answerTextBox)
  await expect(resultado).toHaveValue('105')
  
});

test('clear', async ({ page }) => {

  await page.goto(variables.calculatorPage)
  await page.fill(variables.firstNumber, '10')
  await page.locator(variables.secondNumber).fill("5")
  await page.locator(variables.operationCombo).selectOption('Concatenate')
  await page.locator(variables.calculateButton).click()
  const resultado = await page.locator(variables.answerTextBox)
  await expect(resultado).toHaveValue('105')
  await page.locator(variables.clearButton).click()
  await expect(resultado).toHaveValue('')
  
});
