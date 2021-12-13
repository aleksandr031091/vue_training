export const isRequired = (value) => ({
  hasPassed: !!value,
  message: "Пожалуйста заполните это поле",
});

export const charMaxLimit = (limit) => (val) => ({
  hasPassed: val.length <= limit,
  message: "Вы превысили лимит",
});

export const charMinLimit = (limit) => (value) => ({
  hasPassed: value.length >= limit,
  message: "Минимальное колличество символов должно быть 5",
});
