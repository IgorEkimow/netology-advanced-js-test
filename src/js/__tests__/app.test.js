import { expect } from '@jest/globals';
import lifeLine from '../app';

test('Should return `healthy` for health 90', () => {
  const result = lifeLine({ name: 'Маг', health: 90 });
  expect(result).toBe('healthy');
});

test('Should return `wounded` for health 50', () => {
  const result = lifeLine({ name: 'Маг', health: 50 });
  expect(result).toBe('wounded');
});

test('Should return `wounded` for health 30', () => {
  const result = lifeLine({ name: 'Маг', health: 30 });
  expect(result).toBe('wounded');
});

test('Should return `wounded` for health 15', () => {
  const result = lifeLine({ name: 'Маг', health: 15 });
  expect(result).toBe('wounded');
});

test('Should return `critical` for health 10', () => {
  const result = lifeLine({ name: 'Маг', health: 10 });
  expect(result).toBe('critical');
});
