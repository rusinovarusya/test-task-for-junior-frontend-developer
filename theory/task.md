# Часть 1 (Теория)

Написать что выводит данный код. Предложите 2 варианта модификации кода, чтобы ответ был следующим: `Bad: 10, Bad: 12, Good: 15, Good: 21`.

## Исходный вариант

Код

```js
const arr = [10, 12, 15, 21];

for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`)
  }, 3000)
}
```

выведет

`Bad: undefined`
`Bad: undefined`
`Bad: undefined`
`Bad: undefined`

## Исправленный вариант 1

```js
const arr = [10, 12, 15, 21];

for (let i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`)
  }, 3000)
}
```

## Исправленный вариант 2

```js
const arr = [10, 12, 15, 21];

for (var i = 0; i < arr.length; i++) {
  current = arr[i];
  setTimeout(function() {
    console.log(current > 13 ? `Good: ${current}` : `Bad: ${current}`)
  }, 3000)
}
```
